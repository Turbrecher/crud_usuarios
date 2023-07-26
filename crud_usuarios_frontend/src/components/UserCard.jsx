import { deleteUser } from "../api/users.api";
import { useNavigate, redirect } from "react-router-dom";

export function UserCard({ user }) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <hr />
      <h1>{user.name}</h1>
      <h1>{user.surname}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.birth_date}</h1>
      <button
        onClick={async () => {
          if (confirm("Estas seguro de querer eliminar el usuario?")) {
            await deleteUser(user.id);
            refreshPage();
          } else {
            alert("No se ha borrado ningun usuario");
          }
        }}
      >
        Delete User
      </button>
      <hr />
    </div>
  );
}
