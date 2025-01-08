import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function LessonCard({ lesson }) {
  const navigate = useNavigate();
  const rawDate = lesson.lesson_schedule;
  const formattedDate = format(new Date(rawDate), "dd/MM/yyyy");
  const formattedTime = format(new Date(rawDate), "HH:mm");

  return (
    <div
      onClick={() => {
        navigate(`/lesson-show/${lesson.id}`);
      }}
      className="col-6">
      <div className="p-3 rounded-4 h-100 card-lesson">
        <h2 className="text-center mb-5">Aula: {lesson.lesson_title}</h2>
        <div className="row pe-4 ps-4">
          <div className="col-6">
            <p>
              <span className="fw-bold">Data:</span> {formattedDate}
            </p>
            <p>
              <span className="fw-bold">Hora:</span> {formattedTime}
            </p>
          </div>
          <div className="col-6">
            <p>
              <span className="fw-bold">Alunos:</span> {lesson.student_count}
            </p>
            <p>
              <span className="fw-bold">Sobre:</span> {lesson.lesson_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
