import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./contexts/UserContext";
import { LessonPage } from "./pages/LessonPage";
import { LessonFormPage } from "./pages/LessonFormPage";
import LessonShowPage from "./pages/LessonShowPage";
import UserShowPage from "./pages/UserShowPage";
import LoginFormPage from "./pages/LoginFormPage";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/lesson" />}></Route>
          <Route path="/login" element={<LoginFormPage />}></Route>
          <Route path="/lesson" element={<LessonPage />}></Route>
          <Route path="/lesson-create" element={<LessonFormPage />}></Route>
          <Route path="/lesson/:id" element={<LessonFormPage />}></Route>
          <Route path="/lesson-show/:id" element={<LessonShowPage />}></Route>
          <Route path="/me" element={<UserShowPage />}></Route>
          <Route path="/me/dashboard" element={<TeacherDashboard />}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
