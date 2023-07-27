import { deleteUser } from "../api/users.api";
import "./styles/DeleteButton.css"

export function DeleteUserButton({user}) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <button
      id="delete_button"
      onClick={async () => {
        if (confirm("Estas seguro de querer eliminar el usuario?")) {
          await deleteUser(user.id);
          refreshPage();
        } else {
          alert("No se ha borrado ningun usuario");
        }
      }}
    >
      Delete
    </button>
  );
}
