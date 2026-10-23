-- =============================================================================
-- Grievance360 Initial Seed Data
-- =============================================================================

-- 1. Seed Municipal & Utility Departments
INSERT INTO departments (id, code, name, description, head_official_name, head_official_email, default_sla_hours)
VALUES
    ('a0000000-0000-0000-0000-000000000001', 'WATER', 'Water Supply & Sewage Board', 'Responsible for potable drinking water, pipeline leaks, sewage treatment', 'Dr. Ramesh Kulkarni', 'water.cell@grievance360.local', 24),
    ('a0000000-0000-0000-0000-000000000002', 'POWER', 'Electricity & Energy Board', 'Grid maintenance, voltage surges, damaged street lights', 'Smt. Kavita Sen', 'power.cell@grievance360.local', 12),
    ('a0000000-0000-0000-0000-000000000003', 'SANIT', 'Solid Waste & Public Health', 'Municipal garbage collection, drainage de-silting, sanitization', 'Shri Amit Deshmukh', 'sanitation.cell@grievance360.local', 36),
    ('a0000000-0000-0000-0000-000000000004', 'ROADS', 'Public Works & Roads', 'Pothole repairs, pedestrian footpath hazards, road marking', 'Er. Farooq Ahmed', 'roads.cell@grievance360.local', 72)
ON CONFLICT (code) DO NOTHING;

-- 2. Seed Officers & Test Citizens
INSERT INTO users (id, full_name, email, phone, role, department_id)
VALUES
    ('b0000000-0000-0000-0000-000000000001', 'Nodal Officer Water', 'officer.water@grievance360.local', '+919876543210', 'OFFICER', 'a0000000-0000-0000-0000-000000000001'),
    ('b0000000-0000-0000-0000-000000000002', 'Chief Grievance Admin', 'admin@grievance360.local', '+919876543211', 'ADMIN', NULL),
    ('b0000000-0000-0000-0000-000000000003', 'Aarav Sharma', 'aarav.sharma@example.com', '+919876543212', 'CITIZEN', NULL)
ON CONFLICT (email) DO NOTHING;

-- 3. Seed Grievances
INSERT INTO grievances (
    id, ticket_id, citizen_id, citizen_name, citizen_email, citizen_phone,
    title, description, category, department_id, priority, status,
    location_address, pincode, sla_deadline, created_at
)
VALUES
    (
        'c0000000-0000-0000-0000-000000000001',
        'GRV-2026-00101',
        'b0000000-0000-0000-0000-000000000003',
        'Aarav Sharma',
        'aarav.sharma@example.com',
        '+919876543212',
        'Main water pipeline burst in Sector 4 junction',
        'Drinking water overflowing on road since 4 AM, causing acute water scarcity in adjacent towers.',
        'Water Supply & Sewage Board',
        'a0000000-0000-0000-0000-000000000001',
        'HIGH',
        'IN_PROGRESS',
        'Cross Road 4, Sector 12',
        '560001',
        CURRENT_TIMESTAMP + INTERVAL '24 hours',
        CURRENT_TIMESTAMP - INTERVAL '6 hours'
    )
ON CONFLICT (ticket_id) DO NOTHING;
