import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <Link to="/users">User List</Link>
      <Link to="/users-create">Create User</Link>
      <Link to="/users-edit">Edit User</Link>
    </nav>
  );
}
