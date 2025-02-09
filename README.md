# HustleBunker

🚀 **A modern workspace booking platform** that allows individuals and teams to create custom plans for co-working spaces with additional amenities.

---

## **📌 Project Goal**
The goal of **HustleBunker** is to provide a seamless and intuitive platform where users can:
✅ **Browse & book** co-working spaces  
✅ **Customize workspace plans** with additional amenities  
✅ **Manage bookings & payments** easily  
✅ **Get real-time updates** on workspace availability  

---

## **🧔CO-FOUNDERS**
- Nirant Kale
- Durvesh Chavan
- Tejas Wanole
- Faraz Shaikh

---

## **💻 Tech Stack**
### **Frontend (React + Vite)**
- **React.js** (Component-based UI)
- **Vite** (Fast build tool)
- **Bootstrap** (Styling framework)
- **React Hooks** (State management)
- **Axios** (API requests)
- **React Router** (Navigation)

### **Backend (Node.js + Express)**
- **Express.js** (Server-side framework)
- **MongoDB + Mongoose** (Database & ORM)
- **JWT Authentication** (Secure login)
- **Bcrypt.js** (Password hashing)
- **Cors & Helmet** (Security)

### **Other Tools & Configurations**
- **ESLint & Prettier** (Code linting & formatting)
- **Git & GitHub** (Version control)
- **Dotenv** (Environment variable management)

---

## **📁 Project Structure**
```
hustlebunker/
│── frontend-hustlebunker/     # React frontend
│   ├── public/                 # Static assets
│   ├── src/                    # Source code
│   │   ├── assets/              # Images, icons, etc.
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Individual page components
│   │   ├── App.js               # Main application component
│   │   ├── main.jsx             # React DOM rendering
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.js           # Vite configuration
│
│── server/                      # Node.js backend
│   ├── public/assets/           # Static server assets
│   ├── src/
│   │   ├── controllers/         # API controllers
│   │   ├── database/            # Database connection
│   │   ├── middlewares/         # Middleware (Auth, Error Handling)
│   │   ├── models/              # Mongoose schemas
│   │   ├── routes/              # Express API routes
│   │   ├── utils/               # Helper functions
│   │   ├── app.js               # Main Express app
│   │   ├── constants.js         # Configurations & Constants
│   │   ├── index.js             # Server entry point
│   ├── package.json             # Backend dependencies
│   ├── .env                     # Environment variables
│
├── .gitignore                   # Git ignored files
├── README.md                     # Project Documentation
```

---

## **👥 Stakeholders**
### **1️⃣ Users**
- Individuals looking for workspace
- Teams needing co-working spaces
- Remote workers & freelancers

### **2️⃣ Admin**
- Manage workspace listings
- Handle user bookings & payments
- Monitor system analytics

---

## **🚀 Getting Started**
### **1. Clone the repository**
```sh
git clone https://github.com/yourusername/hustlebunker.git
cd hustlebunker
```

### **2. Install dependencies**
#### **Frontend**
```sh
cd frontend-hustlebunker
npm install
```
#### **Backend**
```sh
cd server
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file inside the **server/** directory:
```sh
PORT=3031
MONGO_URI=mongodb+srv://yourdburl
JWT_SECRET=your_secret_key
```

---

## **📡 Running the Application**
### **1. Start Backend Server**
```sh
cd server
npm start
```
**Server Running on**: `http://localhost:3031`

### **2. Start Frontend**
```sh
cd frontend-hustlebunker
npm run dev
```
**Frontend Running on**: `http://localhost:5173`

---

## **📌 API Endpoints**
### **Auth**
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user & get token
- `GET /api/auth/user` - Fetch user profile

### **Workspace**
- `GET /api/workspaces` - Get available workspaces
- `POST /api/bookings` - Book a workspace
- `GET /api/bookings/:userId` - Get user bookings

---

## **📌 Future Features**
✅ **User Reviews & Ratings**  
✅ **Payment Integration**  
✅ **Google Calendar Sync**  
✅ **Admin Dashboard**  

---

## **📌 Contributing**
1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature-xyz`)
3. **Commit Your Changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin feature-xyz`)
5. **Create a Pull Request**

---

## **📌 License**
This project is licensed under the **MIT License**.

---

## **📌 Contact**
📧 Email: `contact@hustlebunker.com`  
🌐 Website: [HustleBunker](http://hustlebunker.com)  

---

