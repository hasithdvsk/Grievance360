-- =============================================================================
-- Grievance360 Database Schema (PostgreSQL)
-- Core Relational Tables & Enums for Enterprise Grievance Redressal
-- =============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enums
CREATE TYPE grievance_status AS ENUM (
    'OPEN',
    'TRIAGED',
    'ASSIGNED',
    'IN_PROGRESS',
    'PENDING_CITIZEN_INPUT',
    'RESOLVED',
    'ESCALATED',
    'CLOSED',
    'REJECTED'
);

CREATE TYPE priority_level AS ENUM (
    'LOW',
    'MEDIUM',
    'HIGH',
    'CRITICAL'
);

-- 1. Departments & Governance Units
CREATE TABLE IF NOT EXISTS departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    head_official_name VARCHAR(255),
    head_official_email VARCHAR(255),
    default_sla_hours INT NOT NULL DEFAULT 48,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Citizens & System Users
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(32),
    role VARCHAR(32) NOT NULL DEFAULT 'CITIZEN', -- 'CITIZEN', 'OFFICER', 'ADMIN'
    department_id UUID REFERENCES departments(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. Grievances Main Register
CREATE TABLE IF NOT EXISTS grievances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id VARCHAR(32) UNIQUE NOT NULL,
    citizen_id UUID REFERENCES users(id) ON DELETE CASCADE,
    citizen_name VARCHAR(255) NOT NULL,
    citizen_email VARCHAR(255) NOT NULL,
    citizen_phone VARCHAR(32),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(128) NOT NULL,
    sub_category VARCHAR(128),
    department_id UUID REFERENCES departments(id) ON DELETE RESTRICT,
    assigned_officer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    priority priority_level NOT NULL DEFAULT 'MEDIUM',
    status grievance_status NOT NULL DEFAULT 'OPEN',
    location_address TEXT,
    pincode VARCHAR(16),
    latitude NUMERIC(10, 7),
    longitude NUMERIC(10, 7),
    sla_deadline TIMESTAMPTZ,
    is_escalated BOOLEAN NOT NULL DEFAULT FALSE,
    semantic_duplicate_of UUID REFERENCES grievances(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMPTZ
);

-- 4. Grievance Timeline & Audit Trail
CREATE TABLE IF NOT EXISTS grievance_timeline (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    grievance_id UUID NOT NULL REFERENCES grievances(id) ON DELETE CASCADE,
    actor_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(64) NOT NULL,
    from_status grievance_status,
    to_status grievance_status,
    remarks TEXT,
    internal_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for SLA and Query Optimization
CREATE INDEX IF NOT EXISTS idx_grievances_ticket_id ON grievances(ticket_id);
CREATE INDEX IF NOT EXISTS idx_grievances_status ON grievances(status);
CREATE INDEX IF NOT EXISTS idx_grievances_priority ON grievances(priority);
CREATE INDEX IF NOT EXISTS idx_grievances_department_id ON grievances(department_id);
CREATE INDEX IF NOT EXISTS idx_grievances_sla_deadline ON grievances(sla_deadline);
