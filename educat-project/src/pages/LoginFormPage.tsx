import { useForm } from "react-hook-form";
import api from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function LoginFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", "");
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await api.post("token/", {
        username: data.username,
        password: data.password,
      });
      const token = response.data.access;
      localStorage.setItem("token", token);
      navigate("/lesson");
    } catch (error) {
      toast.error("Usuário ou senha inválidos");
    }
  });

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Usuário</label>
          <input className="form-control" type="text" id="username" {...register("username", { required: true })} />
          {errors.username && <span>Este campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input className="form-control" type="password" id="password" {...register("password", { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}
        </div>
        <button className="btn btn-custom text-light">Log in</button>
      </form>
    </div>
  );
}
