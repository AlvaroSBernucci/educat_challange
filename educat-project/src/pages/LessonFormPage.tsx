import { useForm } from "react-hook-form";
import { createLesson, deleteLesson, getLesson, updateLesson } from "../api/lesson.api";
import { getUsers } from "../api/users.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success("Aula editada com Sucesso!");
    } else {
      await createLesson(data);
      toast.success("Aula criada com sucesso!");
    }
    navigate("/lesson");
  });

  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="container mt-5">
      {params.id ? <h2>Editar Aula</h2> : <h2>Criar Aula</h2>}
      <form onSubmit={onSubmit} className="p-4 form-lesson rounded-3">
        <div className="mb-3">
          <label htmlFor="lesson_title" className="form-label">
            Nome da aula
          </label>
          <input
            className="form-control"
            type="text"
            id="lesson_title"
            placeholder="Insira o nome da aula"
            {...register("lesson_title", { required: true })}
          />
          {errors.lesson_title && <span>Este campo é obrigatório</span>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lesson_description">
            Descrição da aula
          </label>
          <input
            className="form-control"
            type="text"
            id="lesson_description"
            placeholder="Insira a descrição"
            {...register("lesson_description", { required: true })}
          />
          {errors.lesson_description && <span>Este campo é obrigatório</span>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lesson_schedule">
            Horário da aula
          </label>
          <input
            className="form-control"
            type="datetime-local"
            id="lesson_schedule"
            step="300"
            {...register("lesson_schedule", { required: true })}
          />
          {errors.lesson_schedule && <span>Este campo é obrigatório</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="teacher" className="form-label">
            Professor
          </label>
          <select id="teacher" {...register("teacher")} className="form-select">
            <option value="">Selecione um professor</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.username}
              </option>
            ))}
          </select>

          {errors.lesson_schedule && <span>Este campo é obrigatório</span>}
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button type="submit" className="btn btn-custom text-light">
            Salvar
          </button>
          {params.id && (
            <button
              className="btn btn-danger"
              onClick={async () => {
                const acepted = window.confirm("Tem certeza?");
                if (acepted) {
                  await deleteLesson(params.id);
                  toast.success("Aula deletada com Sucesso!");
                  navigate("/lesson");
                }
              }}>
              Deletar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
