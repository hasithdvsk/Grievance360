"""
Grievance360 - FastAPI Application Entry Point
High-throughput async backend for grievance ingestion, NLP classification, and status tracking.
"""

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import health, grievances
from app.core.config import settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan management: initialize database pools,
    load NLP embedding models, and establish Redis connection.
    """
    print(f"🚀 Starting {settings.PROJECT_NAME} v{settings.VERSION}...")
    yield
    print(f"🛑 Shutting down {settings.PROJECT_NAME}...")


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Enterprise AI-Powered Grievance Redressal and Analytics Engine",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# Cross-Origin Resource Sharing (CORS) Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Router Modules
app.include_router(health.router, prefix="/api/v1/health", tags=["Health"])
app.include_router(grievances.router, prefix="/api/v1/grievances", tags=["Grievances"])


@app.get("/", tags=["Root"])
async def root():
    return {
        "service": settings.PROJECT_NAME,
        "status": "online",
        "version": settings.VERSION,
        "docs": "/docs",
        "redoc": "/redoc",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=settings.PORT, reload=True)
