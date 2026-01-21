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

Authorization: <JWT_TOKEN>

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

## API Documentation

### Authentication

POST /api/auth/register  
Registers a new user.

Request Body:
{
"email": "user@example.com",
"password": "password123"
}

Response:
{
"token": "<jwt_token>"
}

---

POST /api/auth/login  
Logs in an existing user.

Request Body:
{
"email": "user@example.com",
"password": "password123"
}

Response:
{
"token": "<jwt_token>"
}

---

### User

GET /api/user/me  
Returns authenticated user profile.

Headers:
Authorization: <JWT_TOKEN>

---

### Tasks

GET /api/tasks  
Fetch all tasks for logged-in user.

POST /api/tasks  
Create a new task.

PUT /api/tasks/:id  
Update a task.

DELETE /api/tasks/:id  
Delete a task.

Headers (for all protected routes):
Authorization: <JWT_TOKEN>

## Production Scaling Considerations

To scale this frontend-backend architecture for production:

1. **Frontend**
   - Use code splitting and lazy loading for better performance
   - Deploy behind a CDN (Vercel already provides this)
   - Add error boundaries and global loading states

2. **Backend**
   - Move backend behind a load balancer
   - Use horizontal scaling with multiple instances
   - Introduce caching (Redis) for frequently accessed data
   - Implement rate limiting and request validation

3. **Authentication**
   - Store JWT secrets securely using environment managers
   - Use refresh tokens for long-lived sessions
   - Consider OAuth for third-party login

4. **Database**
   - Use indexed queries for performance
   - Add connection pooling
   - Introduce read replicas for heavy read workloads

5. **Security & Monitoring**
   - Enable centralized logging
   - Add monitoring (Prometheus / Grafana)
   - Use HTTPS everywhere
   - Enable CORS restrictions per environment

👤 Author

Shirshak Dixit
B.Tech IT Student
Frontend / Full Stack Developer

📄 License

This project is created for evaluation purposes as part of a technical assignment.
