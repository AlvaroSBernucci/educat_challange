import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { addStudentLesson, getLesson } from "../api/lesson.api";
import { format } from "date-fns";
import { getTeacher } from "../api/users.api";
import { UserContext } from "../contexts/UserContext";
import toast from "react-hot-toast";

export default function LessonShowPage() {
  const [lesson, setLesson] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);
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
        const response = await getTeacher(lesson.teacher);
        setTeacher(response.data);
      }
    }
    loadTeacher();
  }, [lesson]);

  useEffect(() => {
    async function checkStudent() {
      if (lesson.student_count >= 0) {
        const validateUser = lesson.students.find((id) => id === currentUser.id);
        setStudent(validateUser);
      }
    }
    checkStudent();
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
          <span className="fw-bold">Professor:</span> {teacher.username}
        </p>
        <p>
          <span className="fw-bold">Email de contato:</span> {teacher.email}
        </p>
        <p>
          <span className="fw-bold">Sobre:</span> {lesson.lesson_description}
        </p>
        {currentUser &&
          !currentUser.is_teacher &&
          (student ? (
            <button className="btn btn-custom text-light mt-4" disabled>
              Inscrito
            </button>
          ) : (
            <button
              className="btn btn-custom text-light mt-4"
              onClick={(event) => {
                addStudentLesson(lesson.id, lesson);
                toast.success("Matriculado com sucesso!");
                event.target.disabled = true;
                event.target.innerHTML = "Inscrito";
                console.log(event);
              }}>
              Inscrever-se
            </button>
          ))}
      </div>
    </div>
  );
}
