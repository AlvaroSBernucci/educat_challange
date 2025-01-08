import { useState, useEffect } from "react";
import { getAllLessons } from "../api/lesson.api";
import { LessonCard } from "./LessonCard";

export function LessonsList() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    async function loadLessons() {
      const response = await getAllLessons();
      setLessons(response.data);
    }

    loadLessons();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Aulas disponíveis</h2>
      <div className="row gx-3 gy-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
