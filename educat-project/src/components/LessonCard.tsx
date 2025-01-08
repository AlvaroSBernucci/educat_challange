import { useNavigate } from "react-router-dom";

export function LessonCard({ lesson }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ background: "rgb(217 211 211)" }}
      onClick={() => {
        navigate(`/lesson-show/${lesson.id}`);
      }}>
      <h2>{lesson.lesson_title}</h2>
      <p>{lesson.lesson_description}</p>
      <p>{lesson.lesson_schedule}</p>
      <p>{lesson.student_count}</p>
    </div>
  );
}
