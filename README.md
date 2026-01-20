PrimeTrade Auth Dashboard – Full Stack Assignment

A full-stack authentication and task management dashboard built as part of the PrimeTrade AI assignment.
The project demonstrates secure authentication, JWT-based authorization, protected CRUD APIs, and frontend–backend integration using modern web technologies.

🚀 Features
Authentication

User Signup and Login

Password hashing using bcrypt

JWT-based authentication

Protected routes using middleware

User Profile

Fetch logged-in user profile

Update profile fields (name, bio, age)

Sensitive fields (email, password) protected from updates

Task Management (CRUD)

Create tasks

Fetch user-specific tasks

Update task status (complete/incomplete)

Delete tasks

All task operations are scoped to the logged-in user

Frontend

React + Vite

Auth state managed using Context API

Protected routes using React Router

Bootstrap-based responsive UI

Client-side form validation

🛠️ Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

JSON Web Tokens (JWT)

bcrypt

dotenv

Frontend

React (Vite)

React Router DOM

Context API

Bootstrap 5

📂 Project Structure
primetrade-auth-dashboard/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── index.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
├── README.md
└── .gitignore

⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret

⚠️ .env is intentionally not committed for security reasons.

▶️ Running the Project Locally
1️⃣ Clone the repository
git clone <your-repo-url>
cd primetrade-auth-dashboard

2️⃣ Start Backend
cd backend
npm install
npm run dev

Backend runs on:

https://primetrade-auth-dashboard-1.onrender.com

3️⃣ Start Frontend
cd frontend
npm install
npm run dev

Frontend runs on:

https://primetrade-auth-dashboard-pi.vercel.app/
Vite proxy is used to forward /api requests to the backend.

🔐 API Endpoints Overview
Auth

POST /api/auth/signup

POST /api/auth/login

User

GET /api/user/me

PUT /api/user/profile

Tasks

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

All protected routes require:

Authorization: Bearer <JWT_TOKEN>

✅ Validation Strategy

Client-side validation

Required field checks

Empty input prevention

Server-side validation

Request body validation

Protected field filtering

Ownership checks for all CRUD operations

This ensures both user experience and security.

🔒 Security Considerations

Passwords are never stored in plain text

JWT tokens are validated on every protected request

Users can only access or modify their own data

Sensitive fields are not updatable via profile APIs

📌 Notes

UI is intentionally minimal to focus on functionality and integration

Bootstrap is used for quick and clean styling

Thunder Client was used for backend testing

The application demonstrates end-to-end full-stack flow

👤 Author

Shirshak Dixit
B.Tech IT Student
Frontend / Full Stack Developer

📄 License

This project is created for evaluation purposes as part of a technical assignment.
