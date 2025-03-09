# School Management API

## 📌 Overview
The **School Management API** is a RESTful API built using **Node.js**, **Express.js**, and **MySQL**. It allows users to manage schools, including adding, updating, retrieving, and deleting school records.

## 🚀 Features
- Create, Read, Update, and Delete (CRUD) operations for schools.
- MySQL database integration.
- Deployed using **Railway**.
- API testing via **Postman**.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Deployment**: Railway
- **API Testing**: Postman

## 📂 Project Structure
```
├── routes
│   ├── school.js        # School API routes
├── db.js               # MySQL database connection
├── server.js           # Entry point for the API
├── package.json        # Project dependencies
├── .env                # Environment variables
└── README.md           # Documentation
```

## 📦 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Mohitarora2435/School-Management-API.git
cd school-management-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add your MySQL database credentials:
```env
DB_HOST=host
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=name
DB_PORT=port
```

### 4️⃣ Start the Server
```sh
npm start
```
The API will be available at `http://localhost:3000`.

## 🌍 API Endpoints
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| **POST**   | `/api/addSchool` | Add a new school    |
| **GET**    | `/api//api/listSchools?latitude=40.7128&longitude=-74.0060`   | Get all schools     |

## 🚀 Deployment
### Deploying on **Railway**
1. Push the code to GitHub.
2. Connect your repository to **Railway**.
3. Set up environment variables in Railway.
4. Deploy the project.

## 📮 Testing with Postman
1. Import the Postman collection (if available).
2. Use the API base URL from your Railway deployment.
3. Test endpoints using Postman.

## 📝 License
This project is licensed under the **MIT License**.

---
### 🎯 Contributors
- **Mohit Arora** (@Mohitarora2435)

---
### 🌟 Show Support
Give a ⭐ on [GitHub](https://github.com/Mohitarora2435/School-Management-API) if you like this project!

