import { useNavigate, redirect } from "react-router-dom";
import "./styles/UserCard.css";

export function UserCard({ user }) {
  const navigate = useNavigate();

  //<div className="info">
  //  <h2>{user.email}</h2>
  //  <h2>{user.phone}</h2>
  //  <h2>{user.birth_date}</h2>
  //</div>;

  return (
    <div
      className="usercard"
      onClick={() => {
        navigate("/users/" + user.id);
      }}
    >
      <h1 id="name">{user.name}</h1>
      <h1 id="surname">{user.surname}</h1>
    </div>
  );
}
