# 📌 Note App – Full Stack Application

A production-ready full-stack Note Management application built with modern web technologies.
The app allows users to create, read, update, and delete notes through a clean UI and a RESTful API, with integrated rate limiting for abuse prevention.

---

## 🚀 Live Demo

🔗 **Live Application:**
[https://note-app-cuoh.onrender.com/](https://note-app-cuoh.onrender.com/)

---

# 🏗 Architecture Overview

This project follows a standard client–server architecture:

* **Frontend:** React + TypeScript (SPA)
* **Backend:** Express.js REST API
* **Database:** MongoDB
* **Rate Limiting:** Upstash Redis
* **Deployment:** Render

---

# ✨ Features

## Frontend

* Built with **React + TypeScript + Vite**
* Responsive UI using **TailwindCSS + DaisyUI**
* Client-side routing with **React Router**
* Axios-based API integration
* User feedback when rate limit is exceeded
* Clean component-based architecture

## Backend

* RESTful API built with **Express.js**
* **MongoDB + Mongoose** for data persistence
* Centralized controller-based structure
* Middleware-based request handling
* Rate limiting implemented using **Upstash Redis**
* Environment-based configuration

---

# 📂 Project Structure

```
Note-App/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── libs/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── index.html
│   └── package.json
│
└── package.json
```

The structure follows clear separation of concerns:

* Controllers handle business logic
* Routes define API endpoints
* Middleware manages cross-cutting concerns
* Models define database schemas

---

# 🔌 API Endpoints

Base URL:

```
http://localhost:5001/api/notes
```

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | /        | Get all notes   |
| GET    | /:id     | Get single note |
| POST   | /        | Create a note   |
| PUT    | /:id     | Update a note   |
| DELETE | /:id     | Delete a note   |

---

# 🛡 Rate Limiting

Rate limiting is implemented using **Upstash Redis** to prevent API abuse.

* Applied per IP address
* Limits excessive requests within a defined time window
* Returns appropriate HTTP status when exceeded

This ensures fair usage and improves backend stability.

---

# ⚙️ Installation & Setup

## Prerequisites

* Node.js (v16+)
* MongoDB
* Upstash Redis account (for rate limiting)

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/m07ammed18/Note-App.git
cd Note-App
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
```

---

## 4️⃣ Run the Application

### Development Mode

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

---

### Production Mode (Root)

```bash
npm run build
npm start
```

---

# 🧰 Technologies Used

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* DaisyUI
* Axios
* React Router

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Upstash Redis

---

# 📈 What I Practiced in This Project

* Full-stack architecture design
* REST API design principles
* Middleware implementation
* Rate limiting using Redis
* Environment configuration
* Deployment to production
* Type-safe frontend development

---

# 📜 License

ISC License

---

# 👤 Author

**Mohammed Belhadj**