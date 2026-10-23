# 📋 Grievance360 API Specification

Base URL: `http://localhost:8000/api/v1`

---

## 1. Health Probe

### `GET /api/v1/health/`
Checks database, redis, and NLP engine connectivity.

**Response (200 OK):**
```json
{
  "status": "healthy",
  "timestamp": "2026-10-23T10:41:00.123456Z",
  "services": {
    "database": "connected",
    "redis": "connected",
    "nlp_pipeline": "ready",
    "engine": "SentenceTransformer (all-MiniLM-L6-v2)"
  }
}
```

---

## 2. Complaint Registration & Dynamic AI Triage

### `POST /api/v1/complaints/register`
Accepts complaint details, embeds text using SentenceTransformer, routes to AICTE Bureau, assigns dynamic priority & SLA deadline, checks for duplicate complaints, and persists to PostgreSQL.

**Request Body:**
```json
{
  "title": "Senior hostel residents imposing physical roll calls and verbal abuse",
  "description": "Senior students in Hostel Block C are threatening first-year students with physical violence and ragging during midnight hours.",
  "complainant_role": "STUDENT",
  "complainant_email": "student.victim@example.org",
  "complainant_phone": "+919811223344",
  "institution_aicte_id": "1-10001001"
}
```

**Response (201 Created):**
```json
{
  "tracking_id": "GRV-2026-00102",
  "complaint_id": "30000000-0000-0000-0000-000000000001",
  "title": "Senior hostel residents imposing physical roll calls and verbal abuse",
  "assigned_bureau": "Anti-Ragging Bureau",
  "bureau_id": "10000000-0000-0000-0000-000000000001",
  "priority": "CRITICAL",
  "status": "AUTO_ASSIGNED",
  "sla_deadline": "2026-10-23T22:41:00.000000Z",
  "is_duplicate": false,
  "master_complaint_id": null,
  "created_at": "2026-10-23T10:41:00.000000Z",
  "message": "Grievance filed successfully and auto-assigned to Anti-Ragging Bureau with CRITICAL priority."
}
```

---

## 3. Complaint Tracking & Audit Timeline

### `GET /api/v1/complaints/track/{complaint_id}`
Fetches detailed complaint status, institution details, assigned bureau, SLA deadline, and complete chronological audit log timeline.

**Response (200 OK):**
```json
{
  "complaint_id": "30000000-0000-0000-0000-000000000001",
  "tracking_id": "GRV-2026-00001",
  "title": "Hostel curfew intimidation and verbal ragging of first-year boarders",
  "description": "Senior hostel residents in Block C subjected new entrants to unpermitted late-night physical roll calls and verbal abuse.",
  "complainant_role": "STUDENT",
  "complainant_email": "victim.student@example.org",
  "complainant_phone": "+919811223344",
  "institution_id": "20000000-0000-0000-0000-000000000001",
  "institution_name": "Indian Institute of Technology Delhi (IIT Delhi)",
  "institution_city": "New Delhi",
  "institution_state": "Delhi",
  "bureau_id": "10000000-0000-0000-0000-000000000001",
  "bureau_name": "Anti-Ragging Bureau",
  "priority": "CRITICAL",
  "status": "IN_PROGRESS",
  "is_duplicate": false,
  "master_complaint_id": null,
  "sla_deadline": "2026-10-23T22:00:00Z",
  "created_at": "2026-10-23T06:00:00Z",
  "updated_at": "2026-10-23T08:00:00Z",
  "timeline": [
    {
      "log_id": "40000000-0000-0000-0000-000000000001",
      "action_taken": "AUTO_TRIAGED_BY_AI",
      "from_bureau_name": null,
      "to_bureau_name": "Anti-Ragging Bureau",
      "officer_remarks": "NLP semantic classifier detected severity keywords: curfew intimidation, ragging. Priority set to CRITICAL.",
      "actor_id": "SYSTEM_NLP_TRIAGE_WORKER",
      "timestamp": "2026-10-23T06:00:00Z"
    },
    {
      "log_id": "40000000-0000-0000-0000-000000000002",
      "action_taken": "NOTICE_SERVED_TO_INSTITUTION",
      "from_bureau_name": "Anti-Ragging Bureau",
      "to_bureau_name": "Anti-Ragging Bureau",
      "officer_remarks": "Formal inquiry email dispatched to Dean of Student Affairs. Proactive warden report requested within 12 hours.",
      "actor_id": "OFFICER_ANTIRAGGING_04",
      "timestamp": "2026-10-23T08:00:00Z"
    }
  ]
}
```

---

## 4. List Complaints

### `GET /api/v1/complaints/`
Retrieves complaints with optional filters.

**Query Parameters:**
- `status` (optional, string): e.g. `AUTO_ASSIGNED`, `IN_PROGRESS`, `RESOLVED`, `ESCALATED`
- `bureau` (optional, string): e.g. `Anti-Ragging`, `Approval`, `Finance`, `Legal`
