<h1 align="center">🧠 PrepWise</h1>

<p align="center">
  <b>Your all-in-one platform for smarter preparation and learning.</b>  
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

---

## 🚀 Overview

**PrepWise** is a modern web application built to simplify and enhance exam preparation.  
It combines **seamless authentication**, **cloud storage**, and a **beautiful responsive UI** for an effortless learning experience.

---

## 🧩 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,tailwind,firebase" height="50" />

</p>

| Technology | Description |
|-------------|-------------|
| **React.js** | Frontend library for building interactive user interfaces. |
| **Tailwind CSS** | Utility-first CSS framework for fast and responsive design. |
| **Firebase** | Backend for real-time data storage, hosting, and deployment. |
| **Clerk** | Authentication and user management platform for modern web apps. |

---

## 🌟 Features

- 🔐 **Secure Authentication** with Clerk  
- ☁️ **Firebase Integration** for real-time data and storage  
- 💻 **Responsive UI** built with React and Tailwind  
- 🚀 **Fast Deployment** via Firebase Hosting  
- 📊 **Scalable Architecture** suitable for future enhancements  

---

## 🏗️ Project Structure

prepwise/
├── public/ # Static files (index.html, favicon, etc.)
│
├── src/ # Main source code
│ ├── assets/ # Images, fonts, and icons
│ ├── components/ # Reusable UI components (Navbar, Card, etc.)
│ ├── context/ # React Context API for global state (Auth, Theme)
│ ├── hooks/ # Custom React hooks (useAuth, useFetch, etc.)
│ ├── pages/ # Application pages (Home, Dashboard, Practice, etc.)
│ ├── routes/ # Route management (Protected routes)
│ ├── services/ # Firebase & Clerk configurations
│ │ ├── firebase.js # Firebase setup & config
│ │ └── auth.js # Clerk authentication utilities
│ ├── styles/ # Tailwind CSS configurations & global styles
│ ├── utils/ # Helper functions and constants
│ ├── App.jsx # Main React component
│ ├── main.jsx # React DOM entry point
│ └── index.css # Tailwind CSS base styles
│
├── .env # Environment variables
├── package.json # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.js # PostCSS config
└── README.md # Documentation

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/prepwise.git
cd prepwise

2️⃣ Install dependencies
npm install

3️⃣ Set up environment variables

Create a .env file in the root directory and add your Firebase and Clerk credentials:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key

4️⃣ Run the project
npm run dev

🚀 Deployment

This project is deployed on Firebase Hosting for seamless performance and scalability.

To deploy manually:

npm run build
firebase deploy

💡 Features

🔐 Secure authentication via Clerk
☁️ Real-time data with Firebase
🎨 Modern responsive UI with Tailwind CSS
⚡ Fast & optimized build with Vite
📊 Scalable structure for future enhancements

🧑‍💻 Author

Harshit Shukla
📧 [harshitshukla4513@gmail.com]
🌐 Portfolio : https://hars123.github.io/Harshit-Shukla/
⭐ If you like this project, give it a star on GitHub!

“Made with ❤️ by Harshit Shukla”.



