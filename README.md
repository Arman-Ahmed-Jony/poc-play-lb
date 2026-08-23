# Users CRUD App

Simple full-stack app with React frontend, Node.js backend, and SQLite database.

## Structure

```
backend/   → Express API on port 3001
frontend/  → React (Vite) on port 5173
```

## Setup

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

## Run

Open two terminals:

```bash
# Terminal 1 – backend
cd backend && npm run dev

# Terminal 2 – frontend
cd frontend && npm run dev
```

Open http://localhost:5173 in your browser.

## API

| Method | Endpoint         | Description   |
|--------|------------------|---------------|
| GET    | /api/users       | List all users |
| GET    | /api/users/:id   | Get one user   |
| POST   | /api/users       | Create user    |
| PUT    | /api/users/:id   | Update user    |
| DELETE | /api/users/:id   | Delete user    |

Body for POST/PUT: `{ "name": "...", "email": "..." }`
# poc-play-lb
