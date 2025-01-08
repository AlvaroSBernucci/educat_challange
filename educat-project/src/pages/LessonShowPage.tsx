import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "../api/lesson.api";

export default function LessonShowPage() {
  const [lesson, setLesson] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function loadLessons() {
      const response = await getLesson(params.id);
      console.log(response);
      setLesson(response.data);
    }
    loadLessons();
  }, []);

  return (
    <div>
      <h1>{lesson.lesson_title}</h1>
      <p>{lesson.lesson_description}</p>
      <p>{lesson.lesson_schedule}</p>
      <p>{lesson.student_count}</p>
      <button>Inscrever-se</button>
    </div>
  );
}
