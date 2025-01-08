import { useForm } from "react-hook-form";
import { createLesson, deleteLesson, getLesson, updateLesson } from "../api/lesson.api";
import { getUsers } from "../api/users.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function LessonFormPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const response = await getUsers();
      const teachers = response.data.filter((user) => user.is_teacher);
      setTeachers(teachers);
      setLoading(false);
    }

    loadUsers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadLesson() {
      if (params.id) {
        const { data } = await getLesson(params.id);
        setValue("lesson_title", data.lesson_title);
        setValue("lesson_description", data.lesson_description);
        setValue("lesson_schedule", data.lesson_schedule);
        setValue("teacher", data.teacher);
      }
    }
    loadLesson();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateLesson(params.id, data);
    } else {
      await createLesson(data);
    }
    navigate("/lesson");
  });

  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="lesson_title">Nome da aula</label>
          <input type="text" id="lesson_title" placeholder="Insira o nome da aula" {...register("lesson_title", { required: true })} />
          {errors.lesson_title && <span>Este campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="lesson_description">Descrição da aula</label>
          <input type="text" id="lesson_description" placeholder="Insira a descrição" {...register("lesson_description", { required: true })} />
          {errors.lesson_description && <span>Este campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="lesson_schedule">Horário da aula</label>
          <input type="datetime-local" id="lesson_schedule" step="300" {...register("lesson_schedule", { required: true })} />
          {errors.lesson_schedule && <span>Este campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="teacher">Professor</label>
          <select id="teacher" {...register("teacher")}>
            <option value="">Selecione um professor</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.user_name}
              </option>
            ))}
          </select>

          {errors.lesson_schedule && <span>Este campo é obrigatório</span>}
        </div>
        <button type="submit">Salvar</button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const acepted = window.confirm("Tem certeza?");
            if (acepted) {
              await deleteLesson(params.id);
              navigate("/lesson");
            }
          }}>
          Deletar
        </button>
      )}
    </div>
  );
}
