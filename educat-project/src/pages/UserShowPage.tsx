import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { getUser, updateUser } from "../api/users.api";
import toast from "react-hot-toast";

function UserShowPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("username", currentUser.username);
    setValue("email", currentUser.email);
  }, [currentUser]);

  const onSubmit = handleSubmit(async (data) => {
    await updateUser(data);
    const response = await getUser();
    setCurrentUser(response.data);
    toast.success("Aula criada com sucesso!");
  });

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form className="login-form p-4 rounded-4 w-100" onSubmit={onSubmit}>
        <div>
          <label htmlFor="username" className="mb-3">
            Usuário
          </label>
          <input className="form-control mb-3" type="text" id="username" {...register("username", { required: true })} />
          {errors.username && <span>Este campo é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input className="form-control mb-3" type="email" id="email" {...register("email", { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}
        </div>
        <button className="btn btn-custom text-light mt-5">Salvar</button>
      </form>
    </div>
  );
}

export default UserShowPage;
