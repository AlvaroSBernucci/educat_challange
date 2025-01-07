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
    <div>
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
