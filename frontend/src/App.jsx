// Import necessary libraries and components
import { lazy, Suspense } from 'react'; // React core and lazy loading with Suspense
import Loading from './components/Loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing functionality
import HomePage from './pages/HomePage'; // Home page component
import LoginPage from './pages/LoginPage'; // Login page component
import RegisterPage from './pages/RegisterPage'; // Register page component
import CoursesPage from './pages/CoursesPage'; // Student dashboard component
import SettingsPage from './pages/SettingsPage'; // Settings page component
import ProfilePage from './pages/ProfilePage'; // Profile page component
import PythonModules from './pages/Languages/Python/ModuleOverview.json'; // Import Python module structure JSON
import JavaScriptModules from './pages/Languages/JavaScript/JsModuleOverview.json'; // Import JavaScript module structure JSON
import JavaModules from './pages/Languages/Java/JvModuleOverview.json'; // Import Java module structure JSON
import PythonQuiz from './pages/Languages/Python/PythonQuiz';
import JavaScriptQuiz from './pages/Languages/JavaScript/JavaScriptQuiz';
import JavaQuiz from './pages/Languages/Java/JavaQuiz';
import PythonEx1 from './pages/Languages/Python/PythonEx1';
import PythonEx2 from './pages/Languages/Python/PythonEx2';
import PythonEx3 from './pages/Languages/Python/PythonEx3';
import JavaScriptEx1 from './pages/Languages/JavaScript/JavaScriptEx1';
import JavaScriptEx2 from './pages/Languages/JavaScript/JavaScriptEx2';
import JavaScriptEx3 from './pages/Languages/JavaScript/JavaScriptEx3';
import JavaEx1 from './pages/Languages/Java/JavaEx1';
import JavaEx2 from './pages/Languages/Java/JavaEx2';
import JavaEx3 from './pages/Languages/Java/JavaEx3';
import ProgressTracker from './components/ProgressTracker';

// Dynamically import lesson components using React.lazy
const componentMap = {
  PyM1Lesson1: lazy(() => import('./pages/Languages/Python/Module1/PyM1Lesson1')),
  PyM1Lesson2: lazy(() => import('./pages/Languages/Python/Module1/PyM1Lesson2')),
  PyM1Lesson3: lazy(() => import('./pages/Languages/Python/Module1/PyM1Lesson3')),
  PyM2Lesson1: lazy(() => import('./pages/Languages/Python/Module2/PyM2Lesson1')),
  PyM2Lesson2: lazy(() => import('./pages/Languages/Python/Module2/PyM2Lesson2')),
  PyM2Lesson3: lazy(() => import('./pages/Languages/Python/Module2/PyM2Lesson3')),
  PyM3Lesson1: lazy(() => import('./pages/Languages/Python/Module3/PyM3Lesson1')),
  PyM3Lesson2: lazy(() => import('./pages/Languages/Python/Module3/PyM3Lesson2')),
  PyM3Lesson3: lazy(() => import('./pages/Languages/Python/Module3/PyM3Lesson3')),
  PyM4Lesson1: lazy(() => import('./pages/Languages/Python/Module4/PyM4Lesson1')),
  PyM4Lesson2: lazy(() => import('./pages/Languages/Python/Module4/PyM4Lesson2')),
  PyM5Lesson1: lazy(() => import('./pages/Languages/Python/Module5/PyM5Lesson1')),
  PyM5Lesson2: lazy(() => import('./pages/Languages/Python/Module5/PyM5Lesson2')),
};

// Dynamically import lesson components using React.lazy
const JsComponentMap = {
  JsM1Lesson1: lazy(() => import('./pages/Languages/JavaScript/Module1/JsM1Lesson1')),
  JsM1Lesson2: lazy(() => import('./pages/Languages/JavaScript/Module1/JsM1Lesson2')),
  JsM2Lesson1: lazy(() => import('./pages/Languages/JavaScript/Module2/JsM2Lesson1')),
  JsM2Lesson2: lazy(() => import('./pages/Languages/JavaScript/Module2/JsM2Lesson2')),
  //JsM1Lesson1: lazy(() => import('./pages/Languages/JavaScript/Module1/JsM1Lesson1')),
  JsM2Lesson3: lazy(() => import('./pages/Languages/JavaScript/Module2/JsM2Lesson3')),
  JsM3Lesson1: lazy(() => import('./pages/Languages/JavaScript/Module3/JsM3Lesson1')),
  JsM3Lesson2: lazy(() => import('./pages/Languages/JavaScript/Module3/JsM3Lesson2')),
  JsM3Lesson3: lazy(() => import('./pages/Languages/JavaScript/Module3/JsM3Lesson3')),
  JsM4Lesson1: lazy(() => import('./pages/Languages/JavaScript/Module4/JsM4Lesson1')),
  JsM4Lesson2: lazy(() => import('./pages/Languages/JavaScript/Module4/JsM4Lesson2')),
  JsM5Lesson1: lazy(() => import('./pages/Languages/JavaScript/Module5/JsM5Lesson1')),
  JsM5Lesson2: lazy(() => import('./pages/Languages/JavaScript/Module5/JsM5Lesson2')),
};

// Dynamically import lesson components using React.lazy
const JvComponentMap = {
  JvM1Lesson1: lazy(() => import('./pages/Languages/Java/Module1/JvM1Lesson1')),
  JvM1Lesson2: lazy(() => import('./pages/Languages/Java/Module1/JvM1Lesson2')),
  JvM1Lesson3: lazy(() => import('./pages/Languages/Java/Module1/JvM1Lesson3')),
  JvM2Lesson1: lazy(() => import('./pages/Languages/Java/Module2/JvM2Lesson1')),
  JvM2Lesson2: lazy(() => import('./pages/Languages/Java/Module2/JvM2Lesson2')),
  JvM3Lesson1: lazy(() => import('./pages/Languages/Java/Module3/JvM3Lesson1')),
  JvM3Lesson2: lazy(() => import('./pages/Languages/Java/Module3/JvM3Lesson2')),
  JvM3Lesson3: lazy(() => import('./pages/Languages/Java/Module3/JvM3Lesson3')),
  JvM4Lesson1: lazy(() => import('./pages/Languages/Java/Module4/JvM4Lesson1')),
  JvM4Lesson2: lazy(() => import('./pages/Languages/Java/Module4/JvM4Lesson2')),
};

function App() {
  /**
   * Function to render all routes for Python lessons dynamically.
   * Uses the `PythonModules` JSON to map module and lesson paths to components.
   */
  const renderPythonLessonRoutes = () => {
    return PythonModules.flatMap((module) =>
      module.lessons.map((lesson) => {
        const LessonComponent = componentMap[lesson.componentKey]; // Get component from map
        if (!LessonComponent) {
          console.error(`Component for key ${lesson.componentKey} not found.`); // Log error if component is missing
          return null; // Skip rendering if component is undefined
        }
        // Ensure path consistency without double slashes
        const fullPath = `/:student_id${lesson.path.startsWith("/") ? lesson.path : `/${lesson.path}`}`;
        return (
          <Route 
            key={lesson.path} 
            path={fullPath} // Dynamic path for each lesson
            element={
              <Suspense fallback={<Loading/>}> {/* Show fallback during lazy loading */}
                <ProgressTracker totalLessons={13} lesson_id={lesson.id} course_id={1}>
                  <LessonComponent /> {/* Render lesson component */}
                </ProgressTracker>
              </Suspense>
            }
          />
        );
      })
    );
  };

  /* Function to render all routes for JavaScript lessons dynamically.
   * Uses the `JavaScriptModules` JSON to map module and lesson paths to components.
  */
  const renderJavaScriptLessonRoutes = () => {
    return JavaScriptModules.flatMap((module) =>
      module.lessons.map((lesson) => {
        const LessonComponent = JsComponentMap[lesson.componentKey]; // Get component from map
        if (!LessonComponent) {
          console.error(`Component for key ${lesson.componentKey} not found.`); // Log error if component is missing
          return null; // Skip rendering if component is undefined
        }
        // Ensure path consistency without double slashes
        const fullPath = `/:student_id${lesson.path.startsWith("/") ? lesson.path : `/${lesson.path}`}`;
        return (
          <Route 
            key={lesson.path} 
            path={fullPath} // Dynamic path for each lesson
            element={
              <Suspense fallback={<Loading/>}> {/* Show fallback during lazy loading */}
                <ProgressTracker totalLessons={12} lesson_id={lesson.id} course_id={2}>
                  <LessonComponent /> {/* Render lesson component */}
                </ProgressTracker>
              </Suspense>
            }
          />
        );
      })
    );
  };

  /* Function to render all routes for Java lessons dynamically.
  * Uses the `JavaModules` JSON to map module and lesson paths to components.
  */
  const renderJavaLessonRoutes = () => {
    return JavaModules.flatMap((module) =>
      module.lessons.map((lesson) => {
        const LessonComponent = JvComponentMap[lesson.componentKey]; // Get component from map
        if (!LessonComponent) {
          console.error(`Component for key ${lesson.componentKey} not found.`); // Log error if component is missing
          return null; // Skip rendering if component is undefined
        }
        // Ensure path consistency without double slashes
        const fullPath = `/:student_id${lesson.path.startsWith("/") ? lesson.path : `/${lesson.path}`}`;
        return (
          <Route 
            key={lesson.path} 
            path={fullPath} // Dynamic path for each lesson
            element={
              <Suspense fallback={<Loading/>}> {/* Show fallback during lazy loading */}
                <ProgressTracker totalLessons={10} lesson_id={lesson.id} course_id={3}>
                  <LessonComponent /> {/* Render lesson component */}
                </ProgressTracker>
              </Suspense>
            }
          />
        );
      })
    );
  };

  return (
    <div>
      {/* Define the Router for handling navigation */}
      <Router>
        <Routes>
          {/* Static routes for main pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:student_id/coursespage" element={<CoursesPage />} />
          <Route path="/:student_id/settingspage" element={<SettingsPage />} />
          <Route path="/:student_id/profilepage" element={<ProfilePage />} />
          <Route path="/:student_id/quizpage" element={<PythonQuiz />} />
          <Route path="/:student_id/pythonex1" element={<PythonEx1 />} />
          <Route path="/:student_id/pythonex2" element={<PythonEx2 />} />
          <Route path="/:student_id/pythonex3" element={<PythonEx3 />} />
          {/* Dynamically generated routes for Python lessons */}
          {renderPythonLessonRoutes()}
          <Route path="/:student_id/jsquizpage" element={<JavaScriptQuiz />} />
          <Route path="/:student_id/javascriptex1" element={<JavaScriptEx1 />} />
          <Route path="/:student_id/javascriptex2" element={<JavaScriptEx2 />} />
          <Route path="/:student_id/javascriptex3" element={<JavaScriptEx3 />} />
          {/* Dynamically generated routes for JavaScript lessons */}
          {renderJavaScriptLessonRoutes()}
          <Route path="/:student_id/jvquizpage" element={<JavaQuiz />} />
          <Route path="/:student_id/javaex1" element={<JavaEx1 />} />
          <Route path="/:student_id/javaex2" element={<JavaEx2 />} />
          <Route path="/:student_id/javaex3" element={<JavaEx3 />} />
          {/* Dynamically generated routes for JavaScript lessons */}
          {renderJavaLessonRoutes()}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
