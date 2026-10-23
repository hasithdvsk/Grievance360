# 🗄️ Database Schemas & Migrations (`packages/db`)

This package contains the PostgreSQL DDL schema definitions, seed data fixtures, and database scripts for Grievance360.

---

## 📁 File Structure

- `schema.sql`: Contains base tables (`departments`, `users`, `grievances`, `grievance_timeline`), custom ENUMs, foreign keys, and performant indexes.
- `seed.sql`: Realistic municipal department records, sample users, and initial test grievances.

---

## 🚀 Running Migrations Manually

### Using psql CLI:
```bash
# Execute schema
psql -U postgres -d grievance360_db -f schema.sql

# Execute seed data
psql -U postgres -d grievance360_db -f seed.sql
```

When using `docker-compose up`, these scripts are automatically mounted into `/docker-entrypoint-initdb.d/` and applied on initial container startup.
