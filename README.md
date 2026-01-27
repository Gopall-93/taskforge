# 🚀 Mini CRM Backend – NestJS Assignment

A production-style CRM backend built with **NestJS, PostgreSQL, Prisma ORM, JWT Authentication, and Role-Based Authorization**.

---

## 🧰 Tech Stack

| Layer              | Technology               |
|--------------------|--------------------------|
| Backend Framework  | NestJS (TypeScript)      |
| Database           | PostgreSQL               |
| ORM                | Prisma v7                |
| Authentication     | Passport JWT             |
| Validation         | class-validator          |
| Docs               | Swagger                  |
| Testing            | Jest (E2E)               |

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone YOUR_REPO_URL
cd mini-crm-backend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mini_crm"
JWT_SECRET="supersecretkey"
```

### Database Migration

```bash
npx prisma migrate dev
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Start Server

```bash
npm run start:dev
```

Server runs at:  
`http://localhost:3000`

---

## 📖 Swagger API Documentation

`http://localhost:3000/api`

### Usage Steps

1. Register a user  
2. Login to receive JWT  
3. Click **Authorize** in Swagger  
4. Paste token → Test protected APIs  

---

## 🔑 Roles & Permissions

| Role         | Permissions                              |
|--------------|------------------------------------------|
| **ADMIN**    | Manage users, customers, and tasks       |
| **EMPLOYEE** | View customers and manage own tasks only |

---

## 📌 Core Modules

| Module    | Purpose                    |
|-----------|----------------------------|
| Auth      | User Registration & Login  |
| Users     | Admin User Management      |
| Customers | CRM Customer Records       |
| Tasks     | Task Assignment System     |

---

## 🧪 Run Tests

```bash
npm run test:e2e
```

---

## 🧑‍💻 Author

**Gopall Sharma**  
Backend Developer Intern Assignment
