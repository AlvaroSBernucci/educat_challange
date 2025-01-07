import { useForm } from "react-hook-form";
import { createLesson } from "../api/lesson.api";
import { getUsers } from "../api/users.api";
import { useEffect, useState } from "react";

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
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const response = await createLesson(data);
    console.log(response);
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
        <button type="submit">Criar Aula</button>
      </form>
    </div>
  );
}
