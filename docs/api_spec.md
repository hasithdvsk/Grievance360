# 📋 Grievance360 API Specification

Base URL: `http://localhost:8000/api/v1`

---

## 1. Health & Readiness

### `GET /health/`
Checks database, redis, and NLP engine connectivity.

**Response (200 OK):**
```json
{
  "status": "healthy",
  "timestamp": "2026-10-23T10:14:33.123456",
  "services": {
    "database": "connected",
    "redis": "connected",
    "nlp_pipeline": "ready"
  }
}
```

---

## 2. Grievance Management

### `GET /grievances/`
Retrieve list of grievances with optional filtering.

**Query Parameters:**
- `status` (optional, string): e.g. `OPEN`, `IN_PROGRESS`, `RESOLVED`, `ESCALATED`
- `category` (optional, string): e.g. `Water Supply & Sewage Board`

**Response (200 OK):**
```json
[
  {
    "id": "1",
    "ticket_id": "GRV-2026-00101",
    "title": "High voltage fluctuation damaging electronic meters",
    "description": "Repeated voltage spikes observed between 6 PM to 9 PM, caused transformer trip.",
    "category": "Electricity & Power",
    "priority": "HIGH",
    "status": "IN_PROGRESS",
    "department": "Public Works & Energy",
    "citizen_name": "Priya Nair",
    "created_at": "2026-10-22T09:30:00Z",
    "updated_at": "2026-10-23T04:15:00Z"
  }
]
```

---

### `POST /grievances/`
Submit a new citizen grievance for AI triage.

**Request Body:**
```json
{
  "title": "Potable water contamination in Ward 7",
  "description": "For the past 4 days, tap water supplied to block B has high turbidity and foul odor.",
  "category": "Water Supply & Sanitation",
  "citizen_name": "Aarav Sharma",
  "citizen_email": "aarav@example.com",
  "location": "Ward 7, Sector 12"
}
```

**Response (201 Created):**
```json
{
  "id": "c1f7a461-9c17-488b-a7eb-94e82df471aa",
  "ticket_id": "GRV-2026-00103",
  "title": "Potable water contamination in Ward 7",
  "description": "For the past 4 days, tap water supplied to block B has high turbidity and foul odor.",
  "category": "Water Supply & Sanitation",
  "priority": "MEDIUM",
  "status": "OPEN",
  "department": "Municipal Grievance Cell",
  "citizen_name": "Aarav Sharma",
  "created_at": "2026-10-23T10:14:43Z",
  "updated_at": "2026-10-23T10:14:43Z"
}
```

---

### `GET /grievances/{ticket_id}`
Fetch detailed status and audit history of a grievance.

**Response (200 OK):**
Returns the grievance object matching the `ticket_id`.
