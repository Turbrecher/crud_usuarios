import { Link } from "react-router-dom";
import "./styles/Nav.css";

export function Nav() {
  return (
    <nav>
      <span id="website_name"> USER CRUD</span>
      <Link className="link" to="/users">
        User List &#128722;
      </Link>
      <Link className="link" to="/users-create">
        Create User &#9997;
      </Link>
    </nav>
  );
}
