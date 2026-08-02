# <img src="assets/codepilot_banner.png?v=2" alt="CodePilot Banner" width="100%">

<div align="center">

# 🚀 CodePilot - Learn Coding by Practice

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=flat&logo=express)](https://expressjs.com/)

**Master algorithms, data structures, and top-tier software engineering skills interactively with real-time feedback and gamified progression.**

[Features](#-key-features) • [Tech Stack](#-technology-stack) • [Setup & Installation](#-local-setup--installation) • [Architecture](#-project-architecture) • [Previews](#-visual-previews)

</div>

---

## 📖 Overview

**CodePilot** is an interactive, gamified learning platform built for developers who want to take their coding skills to the next level. Through structured learning paths, real-world algorithmic problems, and instant verification, CodePilot makes practicing and mastering code an engaging and rewarding experience.

### Why CodePilot?
- 🎮 **Gamified Progression**: Keep your learning streak alive and build momentum.
- ⚡ **Instant Validation**: Run your code and check it against test cases instantly.
- 📚 **Structured Paths**: Specially curated courses covering C++, Java, Python, and Web Development.

---

## ✨ Key Features

### 🖥️ 1. Interactive Coding Workspace
Write and test your code directly inside the browser. CodePilot features a robust mock-execution engine that handles and verifies code submissions instantly, letting you debug and refine your solution.

### 🏆 2. Dashboard & Streak Tracking
Track your performance stats at a glance. Features a gamified user profile including active coding streaks (flames), acquired **Respect Points**, and a list of all successfully completed problems.

### 📚 3. Featured Learning Paths
Take curated courses tailored to major languages and concepts. Get access to detailed theory, syntax references, and custom practice material for **C++**, **Java & OOP**, **Python**, and **Full-Stack Web Development**.

### 🔒 4. Secure Authentication
A production-ready authorization flow securing user profiles and personal statistics using **JSON Web Tokens (JWT)** and secure **bcryptjs** password hashing.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, Vanilla CSS3 | Responsive and elegant user interface, crafted with glassmorphic cards and dark-mode accents. |
| **Frontend Scripting** | JavaScript (ES6+) | Asynchronous API integration, dynamic DOM rendering, and client-side page routing. |
| **Backend API** | Node.js, Express.js | Structured MVC server, RESTful routing, request logging, and robust controller middlewares. |
| **Database** | MongoDB, Mongoose | Persistent storage for users, courses, coding challenges, and historical submissions. |
| **Security** | JSON Web Tokens, bcryptjs | User session management and secure credential hashing. |

---

## 📁 Project Architecture

Here is an overview of the file structure in **CodePilot**:

```text
CodePilot/
├── assets/                  # Images, logos, and UI screenshot assets
├── backend/
│   ├── config/              # Configuration files (Database connections)
│   ├── controllers/         # Controller logic (Auth, problems, courses, submissions)
│   ├── middleware/          # JWT Authorization verification
│   ├── models/              # Mongoose DB schemas (User, Problem, Course, Submission)
│   └── routes/              # RESTful API endpoints mapping
├── css/                     # Sleek design stylesheets & variables
├── js/                      # Frontend script handlers and logic
├── index.html               # Main landing page
├── auth_v2.html             # Login/Signup gate
├── dashboard_v2.html        # User profile, streaks, and achievements dashboard
├── course_v2.html           # Learning path detailed outline
├── problems_v2.html         # Algorithmic coding practice challenges repository
├── practice_v2.html         # Interactive code-editor and execution workspace
├── mcq_v2.html              # Core concept multiple choice questions page
├── server.js                # Server main entrypoint
├── seed.js                  # Master DB seed script (Default courses & problems)
├── package.json             # App dependencies & script configuration
└── .env                     # Server environment configurations
```

---

## 🚀 Local Setup & Installation

Follow these steps to run CodePilot locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and a [MongoDB Instance](https://www.mongodb.com/try/download/community) installed.

### 2. Clone and Install Dependencies
Navigate to the root directory and install dependencies:
```bash
git clone https://github.com/ChandanVarshney031/CodePilot.git
cd CodePilot
npm install
```

### 3. Environment Variables
Create a file named `.env` in the root directory and add the following config details:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_key
```

### 4. Database Seeding
To populate CodePilot with default courses and practice problems, run the seed script:
```bash
node seed.js
```

### 5. Launch the Server
Start the development server:
```bash
npm start
```
Your application will be live at `http://localhost:5001`!

---

## 📸 Visual Previews

### 🏆 Gamified Dashboard Layout
Track your daily coding streak, view earned respect points, and review solved challenges.
<p align="center">
  <img src="assets/codepilot_dashboard.png?v=2" alt="CodePilot Dashboard Mockup" width="90%" style="border-radius: 8px;">
</p>

### 🖥️ Interactive Coding Workspace
Write solutions, run test cases instantly, and receive immediate console responses.
<p align="center">
  <img src="assets/codepilot_workspace.png?v=2" alt="CodePilot Coding Workspace" width="90%" style="border-radius: 8px;">
</p>

---

## 📝 License

Distributed under the **ISC License**. See `package.json` for details.

Developed with ❤️ by [Chandan Varshney](https://github.com/ChandanVarshney031).
