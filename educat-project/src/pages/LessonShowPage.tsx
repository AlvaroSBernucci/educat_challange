import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "../api/lesson.api";
import { format } from "date-fns";
import { getUser } from "../api/users.api";

export default function LessonShowPage() {
  const [lesson, setLesson] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function loadLessons() {
      const response = await getLesson(params.id);
      setLesson(response.data);
    }
    loadLessons();
  }, []);

  useEffect(() => {
    async function loadTeacher() {
      if (lesson.teacher) {
        const response = await getUser(lesson.teacher);
        setTeacher(response.data);
      }
    }
    loadTeacher();
  }, [lesson]);

  const rawDate = lesson.lesson_schedule;
  const formattedDate = rawDate ? format(new Date(rawDate), "dd/MM/yyyy") : "";
  const formattedTime = rawDate ? format(new Date(rawDate), "HH:mm") : "";

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="p-4 card-show rounded-4">
        <h1 className="mb-5 text-center">Aula: {lesson.lesson_title}</h1>
        <p className="mb-4">
          <span className="fw-bold">Data:</span> {formattedDate}
        </p>
        <p>
          <span className="fw-bold">Hora:</span> {formattedTime}
        </p>
        <p>
          <span className="fw-bold">Alunos Matriculados:</span> {lesson.student_count}
        </p>
        <p>
          <span className="fw-bold">Professor:</span> {teacher.user_name}
        </p>
        <p>
          <span className="fw-bold">Email de contato:</span> {teacher.user_email}
        </p>
        <p>
          <span className="fw-bold">Sobre:</span> {lesson.lesson_description}
        </p>
        <button className="btn btn-custom text-light mt-4">Inscrever-se</button>
      </div>
    </div>
  );
}
