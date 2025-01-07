export function LessonCard({ lesson }) {
  return (
    <div>
      <h2>{lesson.lesson_title}</h2>
      <p>{lesson.lesson_description}</p>
      <p>{lesson.lesson_schedule}</p>
    </div>
  );
}
