import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

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
              <Link to="/me" className="btn btn-success btn-custom">
                Perfil
              </Link>
              {currentUser.is_teacher && (
                <Link to="/me/dashboard" className="btn btn-success btn-custom">
                  Dashboard
                </Link>
              )}
              {currentUser.is_superuser && (
                <Link to="/lesson-create" className="btn btn-success btn-custom">
                  Adicionar Aula
                </Link>
              )}
              <button className="btn btn-success btn-custom" onClick={handleLogout}>
                Log out
              </button>
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
