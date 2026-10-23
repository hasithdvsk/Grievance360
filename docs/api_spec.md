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

---

## 3. Complaint Tracking & Audit Timeline

### `GET /api/v1/complaints/track/{complaint_id}`
Fetches detailed complaint status, institution details, assigned bureau, SLA deadline, and complete chronological audit log timeline.

---

## 4. ReportLab Action Taken Report (ATR) PDF Exporter

### `GET /api/v1/complaints/{complaint_id}/export-atr`
Generates and streams an official, digitally signed Action Taken Report PDF with SHA-256 verification hash and complete chronological audit action table.

---

## 5. Executive PostGIS Analytics Overview

### `GET /api/v1/analytics/overview`
Returns top 10 geospatial hotspot regions, bureau resolution velocity, and critical breach counts.

---

## 6. Multilingual Translation & Voice Note Ingestion

### `GET /api/v1/multilingual/languages`
Lists all supported regional Indian languages: Telugu (`te`), Tamil (`ta`), Hindi (`hi`), Marathi (`mr`), Bengali (`bn`), and English (`en`).

### `POST /api/v1/multilingual/submit-voice`
Accepts multipart audio file uploads (.mp3, .wav, .m4a), transcribes via Whisper, translates regional Indian text to English via M2M100/IndicTrans2, and registers the complaint into the AICTE triage pipeline.

**Multipart Form Parameters:**
- `audio_file`: binary audio data
- `complainant_email`: `student@example.org`
- `complainant_role`: `STUDENT`
- `institution_aicte_id`: `1-10001001`
- `source_language`: `auto` / `hi` / `te` / `ta` / `mr` / `bn`

### `POST /api/v1/multilingual/translate`
Translates complaint updates, directives, or Action Taken Reports into regional languages.

**Request Body:**
```json
{
  "text": "IN_PROGRESS: Action is being reviewed by Nodal Officer.",
  "target_language": "hi",
  "source_language": "en"
}
```

**Response (200 OK):**
```json
{
  "original_text": "IN_PROGRESS: Action is being reviewed by Nodal Officer.",
  "source_language": "en",
  "target_language": "hi",
  "target_language_name": "Hindi",
  "translated_text": "कार्रवाई प्रगति पर है। नोडल अधिकारी द्वारा समीक्षा की जा रही है। (IN_PROGRESS)"
}
```
