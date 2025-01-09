import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/users.api";

export function Navigation() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      if (localStorage.getItem("token")) {
        try {
          const response = await getUser();
          setCurrentUser(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          setCurrentUser(null);
          localStorage.removeItem("token");
        }
      }
    }

    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ps-4 pe-4 pt-2 pb-2">
        <Link to="/lesson" className="text-decoration-none text-light">
          <h1>Educat</h1>
        </Link>
        <div className="d-flex gap-3">
          {currentUser ? (
            <>
              <Link to="/lesson" className="btn btn-success btn-custom">
                Aulas
              </Link>
              <button className="btn btn-success btn-custom" onClick={handleLogout}>
                Log out
              </button>
              {currentUser.is_superuser && (
                <Link to="/lesson-create" className="btn btn-success btn-custom">
                  Adicionar Aula
                </Link>
              )}
            </>
          ) : (
            <Link to="/login" className="btn btn-success btn-custom">
              Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
