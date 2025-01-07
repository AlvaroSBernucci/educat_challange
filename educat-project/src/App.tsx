import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LessonPage } from "./pages/LessonPage";
import { LessonFormPage } from "./pages/LessonFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/lesson" />}></Route>
        <Route path="/lesson" element={<LessonPage />}></Route>
        <Route path="/lesson-create" element={<LessonFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
