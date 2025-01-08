import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ps-4 pe-4 pt-2 pb-2">
        <Link to="/lesson" className="text-decoration-none text-light">
          <h1>Educat</h1>
        </Link>
        <div className="d-flex gap-3">
          <Link to="/lesson" className="btn btn-success btn-custom">
            Aulas
          </Link>
          <Link to="/lesson-create" className="btn btn-success btn-custom">
            Adicionar Aula
          </Link>
        </div>
      </div>
    </nav>
  );
}
