# E-Learning Platform

A full-stack web application for interactive programming education, supporting Python, JavaScript, and Java. Students can learn through lessons, quizzes, exercises, and track their progress.

---

## Features

- **User Authentication:** Register, login, and manage student accounts.
- **Course Dashboard:** Browse and enroll in Python, JavaScript, and Java courses.
- **Dynamic Lessons:** Modular lesson structure with dynamic routing and lazy loading.
- **Interactive Code Editor:** Write, run, and auto-grade code directly in the browser.
- **AI-Powered Hints:** Get context-aware hints for coding exercises using AI.
- **AI Recommendation Questionnaire:** Upon registration, students can fill out a questionnaire. The AI analyzes their answers and recommends the most suitable programming language to start with.
- **Progress Tracking:** Track lesson completion and course progress.
- **Profile & Settings:** Update personal info, change password, and upload a profile picture.
- **Responsive Design:** Modern UI with Tailwind CSS, optimized for all devices.

---

## Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express, PostgreSQL
- **AI Integration:** OpenRouter API for AI hints and recommendations
- **Other:** Multer (file uploads), dotenv (env management)

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL database

### Environment Variables

Create a `.env` file in both `backend/` and `frontend/` directories.

#### Backend `.env` example:
```
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/yourdb
OPENROUTER_API_KEY=your_openrouter_api_key
API_URL=https://openrouter.ai/api/v1/chat/completions
```

#### Frontend `.env` example:
```
VITE_BACKEND_URL=http://localhost:3000
```

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/e-learning-platform.git
cd e-learning-platform
```

#### 2. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

#### 3. Set up the database

- Create a PostgreSQL database.
- Run the SQL scripts in `backend/db/` to create tables (`students`, `courses`, `enrollments`, `progress`, etc.).

#### 4. Start the backend server

```bash
cd backend
npm start
```

#### 5. Start the frontend development server

```bash
cd frontend
npm run dev
```

---

## Usage

- Visit `http://localhost:5173` (or the port shown in your terminal).
- Register as a new student or log in.
- On registration, fill out the AI Recommendation Questionnaire to get a personalized language suggestion.
- Browse courses, start lessons, and complete exercises.
- Use the code editor to solve problems and get instant feedback.
- Track your progress and update your profile in the settings page.

---

## Project Structure

```
backend/
  ├── db/                # Database schema and seed files
  ├── routes/            # Express route handlers
  ├── services/          # Business logic (AI, etc.)
  ├── uploads/           # Uploaded profile pictures
  └── index.js           # Entry point

frontend/
  ├── src/
  │   ├── components/    # Reusable React components
  │   ├── pages/         # Page-level components and lessons
  │   ├── App.jsx        # Main app and routing
  │   └── ...            # Other source files
  └── ...
```

---

## Deployment

- Set environment variables for production in your hosting provider.
- Ensure CORS is configured on the backend to allow frontend requests.
- Use services like Render, Vercel, or Netlify for deployment.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [OpenRouter](https://openrouter.ai/) for AI-powered hints and recommendations
- [Tailwind CSS](https://tailwindcss.com/) for UI styling
- [React](https://react.dev/) for the frontend framework

---
