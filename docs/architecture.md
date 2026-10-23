# 🏛️ System Architecture - Grievance360

This document defines the high-level architecture, data pipeline, and asynchronous task execution model of the Grievance360 platform.

---

## 📐 Architecture Diagram

```mermaid
flowchart TD
    subgraph ClientLayer ["Client Layer"]
        CitizenBrowser["Citizen Web Portal\n(Next.js 14 App Router)"]
        OfficialPortal["Department Officer Dashboard\n(Recharts & Framer Motion)"]
    end

    subgraph APILayer ["Backend API Layer"]
        FastAPIServer["FastAPI Async Gateway\n(Port 8000)"]
        CorsAuth["Auth & Validation Middleware\n(Pydantic v2)"]
    end

    subgraph ServiceLayer ["Processing & AI Layer"]
        SentenceTransformers["Semantic NLP Engine\n(Sentence-Transformers / PyTorch)"]
        CeleryWorker["Celery Distributed Workers\n(Async Task Runner)"]
        PDFGen["ReportLab PDF Engine\n(Official Resolution Letter)"]
    end

    subgraph StorageLayer ["Persistence & Broker Layer"]
        PostgreSQL[("PostgreSQL 16\n(Schema & Timeline Log)")]
        RedisBroker[("Redis 7\n(Task Queue & Semantic Cache)")]
    end

    CitizenBrowser -->|REST / JSON| FastAPIServer
    OfficialPortal -->|REST / JSON| FastAPIServer
    FastAPIServer --> CorsAuth
    CorsAuth --> SentenceTransformers
    CorsAuth --> PostgreSQL
    FastAPIServer -->|Enqueue Async Job| RedisBroker
    RedisBroker --> CeleryWorker
    CeleryWorker --> PDFGen
    CeleryWorker --> PostgreSQL
```

---

## 🔄 Grievance Lifecycle & AI Pipeline

1. **Intake**: Citizen submits grievance via Next.js form with attachments and location data.
2. **Semantic Embedding**: FastAPI passes textual description to `sentence-transformers` to generate a 384-dimensional embedding vector.
3. **Duplicate Detection**: Cosine similarity check against recent complaints in the same ward/category. If similarity > 0.88, flags ticket as a likely duplicate.
4. **Automated Triage & Routing**: Priority (Low/Medium/High/Critical) and department are predicted based on learned classifier heuristics.
5. **SLA Timers**: Celery schedules periodic SLA tick events. If resolution exceeds `default_sla_hours`, automated escalation alerts are sent to the department head.
6. **Resolution & Certificate**: Upon officer sign-off, ReportLab compiles an official digitally timestamped resolution notice PDF.
