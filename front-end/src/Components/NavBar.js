import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1 className="title">Snacks App</h1>
      </Link>

      <button className="button">
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}

export default NavBar;
