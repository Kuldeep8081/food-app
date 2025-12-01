# Food Restaurant Website 🍽️

A full-stack **online food restaurant website** built using **ReactJS, NodeJS, ExpressJS, MongoDB**, and **TypeScript**.  
Users can explore the menu, add items to cart, place orders, and manage their profile, while admins can manage dishes and orders.

---

## 🚀 Tech Stack

**Frontend:**
- ReactJS
- TypeScript
- React Router
- Axios / Fetch API

**Backend:**
- NodeJS
- ExpressJS
- TypeScript
- MongoDB + Mongoose

**Other:**
- JWT-based Authentication
- RESTful APIs

---

## ✨ Features

- **Responsive Restaurant Website UI**
  - Modern layout with sections like Home, Menu, About, and Contact.
  - Fully responsive design for desktop, tablet, and mobile.

- **Dynamic Menu & Categories**
  - Menu items fetched from backend.
  - Filter dishes by categories (e.g., Starter, Main Course, Desserts, Drinks).

- **Cart & Order Management**
  - Add/remove items from cart.
  - Order summary with total price calculation.
  - Place orders and save them in the database.

- **User Authentication**
  - Sign up, login, and logout functionality.
  - Protected routes for user profile and order history using JWT.

- **Admin Dashboard (optional)**
  - Add, update, or delete menu items.
  - View and manage customer orders.

---

## 🗂️ Project Structure
root/
├── client/        # React + TypeScript frontend
├── server/        # Node + Express + TypeScript backend
└── README.md

## ⚙️ Getting Started
### 1️⃣ Clone the Repository
git clone https://github.com/Kuldeep8081/food-app.git
cd food-app
### 2️⃣ Setup Backend (server)
cd server
npm install
or
yarn install

## Environment Variables
Create a .env file inside the server folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173

## Run Backend
npm run dev
or
yarn dev

### 3️⃣ Setup Frontend (client)
cd ../client
npm install
or
yarn install

If you're using a .env for frontend (optional):
VITE_API_BASE_URL=http://localhost:5000/api

### Run Frontend
npm run dev
or
yarn dev


