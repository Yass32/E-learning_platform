# E-Learning Platform

This repository contains the source code for a full-stack web application designed for educational purposes. The project includes a backend built with Node.js and Express, and a frontend built with React and Tailwind CSS. The application provides features such as student management, progress tracking, auto-grading, and more.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [License](#license)

---

## Features

- **Student Management**: Add, update, and delete student profiles.
- **Progress Tracking**: Track student progress in courses and lessons.
- **Auto-Grading**: Automatically grade student submissions with test cases.
- **Course Enrollment**: Enroll students in courses and manage their progress.
- **Interactive Frontend**: User-friendly interface for students and administrators.
- **File Uploads**: Support for uploading profile images.
- **Recommendation System**: Recommends user career paths based on the Career Questionnaire. 

---

## Technologies Used

### Backend:
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating RESTful APIs.
- **PostgreSQL**: Database for storing student and course data.
- **pg**: PostgreSQL client for Node.js.
- **uuid**: For generating unique IDs.
- **Multer**: For handling file uploads.
- **OpenRouter**: Provides AI models.

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for fast development.

---

## Project Structure

### Backend (`/backend`):
```
backend/
├── package.json          # Backend dependencies
├── server.js             # Entry point for the backend server
├── routes/               # API route handlers
│   ├── recommendationRoute.js
│   ├── studentRoutes.js
├── services/             # Service logic for specific features
│   ├── autograde.js
│   ├── executecode.js
│   ├── openrouterService.js
├── uploads/              # Uploaded files (e.g., profile images)
│   ├── 1742847897217-profile image.jpg
│   ├── 1742848623465-profile image.jpg
```

### Frontend (`/frontend`):
```
frontend/
├── .gitignore            # Files to ignore in Git
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Frontend dependencies
├── postcss.config.js     # PostCSS configuration
├── README.md             # Frontend-specific README
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
├── public/               # Static assets
│   ├── vite.svg
├── src/                  # Source code
│   ├── App.jsx           # Main React component
│   ├── index.css         # Global CSS
│   ├── main.jsx          # Entry point for React
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable React components
│   ├── pages/            # Page-specific React components
```

---

## Setup Instructions

### Prerequisites:
- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn

### Backend Setup:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the PostgreSQL database and configure the connection in `server.js`.
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the frontend in your browser at `http://localhost:5173`.
2. Use the application to manage students, track progress, and auto-grade submissions.
3. The backend API runs at `http://localhost:3000`.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
```

This `README.md` provides a comprehensive overview of your project, including its features, technologies, structure, and setup instructions. You can customize it further based on your specific requirements.
