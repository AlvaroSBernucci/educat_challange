import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { LessonPage } from "./pages/LessonPage";
import { LessonFormPage } from "./pages/LessonFormPage";
import LessonShowPage from "./pages/LessonShowPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/lesson" />}></Route>
        <Route path="/lesson" element={<LessonPage />}></Route>
        <Route path="/lesson-create" element={<LessonFormPage />}></Route>
        <Route path="/lesson/:id" element={<LessonFormPage />}></Route>
        <Route path="/lesson-show/:id" element={<LessonShowPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
