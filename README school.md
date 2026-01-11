#  School Management System
A complete **MERN-based School Management System** featuring student/teacher dashboards, attendance tracking, notices, authentication, and more — built for smooth school administration.

##  Project Preview
(Replace these with actual screenshot paths after uploading)

| Home Page | Login Page |
|----------|------------|
| ![Home Screenshot](/images/home.png) | ![Login Screenshot](/images/login.png) |

| Dashboard | Attendance |
|----------|------------|
| ![Dashboard Screenshot](/images/dashboard.png) | ![Attendance Screenshot](/images/attendance.png) |

##  Tech Stack

### **Frontend**
- React.js  
- React Router  
- Axios  
- CSS Modules  
- ProtectedRoute wrapper  
- Responsive design  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- REST API architecture  

### **Database**
- MongoDB Atlas / Local MongoDB

##  Folder Structure

```
school-management-system/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**
```
git clone https://github.com/YOUR_USERNAME/school-management-system.git
cd school-management-system
```

## **2️⃣ Backend Setup**

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

Run backend:
```
npm start
```

Backend runs at: **http://localhost:5000**

## **3️⃣ Frontend Setup**

```
cd frontend
npm install
npm start
```

Frontend runs at: **http://localhost:3000**

##  Features

### 👨🏻‍💼 **Admin**
- Manage students & teachers  
- View all attendance  
- Add and manage notices  
- Dashboard analytics  

### 🧑‍🏫 **Teacher**
- Mark attendance  
- Manage student records  
- View assigned classes  

### 🧑‍🎓 **Student**
- View attendance  
- View notices  
- Access student dashboard  

### 🔐 **Security**
- Protected routes  
- Role-based access  

## 🖼️ More Screenshots

### Login  
![Login](/images/login.png)

### Dashboard  
![Dashboard](/images/dashboard.png)

### Attendance Page  
![Attendance](/images/attendance.png)

### Notices  
![Notices](/images/notices.png)

### Students Management  
![Students](/images/students.png)

## 🛑 Environment Variables

Backend `.env` example:

```
MONGO_URL=
PORT=5000
JWT_SECRET=yourSecret (if using auth)
```

## 🤝 Contributing
Feel free to fork the repo and send pull requests.

## 📄 License
This project is open-source and free to use.
