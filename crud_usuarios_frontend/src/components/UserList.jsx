import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users.api";
import { UserCard } from "./UserCard";
import "./styles/UserList.css";

export function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      
      const res = await getAllUsers();
      setUsers(res.data);
    }
    
    loadUsers();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  function noUsers() {
    if (users.length === 0) {
      return <h1>No hay usuarios registrados...</h1>;
    }
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {noUsers()}
    </div>
  );
}
