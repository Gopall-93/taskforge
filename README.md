Ahh got you 😭 you want **ONLY raw README.md file content**, no explanations, no chat text.

Here you go — **copy-paste directly**:

````md
# 🚀 Mini CRM Backend – NestJS Assignment

A production-style CRM backend built using **NestJS, PostgreSQL, Prisma ORM, JWT Authentication, and Role-Based Authorization**.

---

## 🧰 Tech Stack

| Layer              | Technology               |
|--------------------|--------------------------|
| Backend Framework  | NestJS (TypeScript)      |
| Database           | PostgreSQL               |
| ORM                | Prisma v7                |
| Authentication     | Passport JWT             |
| Validation         | class-validator          |
| API Docs           | Swagger                  |
| Testing            | Jest (Unit + E2E)        |
| Containerization   | Docker + Docker Compose  |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone YOUR_REPO_URL
cd mini-crm-backend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## 🌍 Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

### `.env.example`

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mini_crm"
JWT_SECRET="supersecretkey"
PORT=3000
```

---

## 🗄 Database Migration (Prisma)

```bash
npx prisma migrate dev
npx prisma generate
```

---

## ▶️ Start Development Server

```bash
npm run start:dev
```

Server runs at:

```
http://localhost:3000
```

---

## 📖 Swagger API Documentation

```
http://localhost:3000/api
```

Steps:

1. Register user
2. Login → get JWT
3. Click **Authorize**
4. Paste token → test protected APIs

---

## 🔑 Roles & Permissions

| Role         | Access                              |
| ------------ | ----------------------------------- |
| **ADMIN**    | Manage users, customers, and tasks  |
| **EMPLOYEE** | View customers and manage own tasks |

---

## 🧪 Run Tests

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

---

## 🐳 Docker Support

Run full system (App + PostgreSQL):

```bash
docker-compose up --build
```

| Service    | URL                                                    |
| ---------- | ------------------------------------------------------ |
| API        | [http://localhost:3000](http://localhost:3000)         |
| Swagger    | [http://localhost:3000/api](http://localhost:3000/api) |
| PostgreSQL | localhost:5432                                         |

---

## 📬 API Testing (cURL Examples)

### Register User

```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Admin","email":"admin@test.com","password":"password123","role":"ADMIN"}'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"admin@test.com","password":"password123"}'
```

### Create Customer

```bash
curl -X POST http://localhost:3000/customers \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: application/json" \
-d '{"name":"Acme Corp","email":"client@acme.com","phone":"9876543210"}'
```

---

## 📌 Core Modules

| Module    | Description             |
| --------- | ----------------------- |
| Auth      | Register/Login with JWT |
| Users     | Admin manages users     |
| Customers | CRM customer records    |
| Tasks     | Task assignment system  |

---

## 🧑‍💻 Author

**Gopall Sharma**
