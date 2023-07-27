import { useForm } from "react-hook-form";
import { createUser, updateUser, deleteUser, getUser } from "../api/users.api";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/CreateUserForm.css";
import { useState, useEffect } from "react";
import "./styles/DeleteButton.css";

export function UserForm() {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  function setAction() {
    return params.id ? "Update" : "Create New";
  }
  const action = setAction();

  useEffect(() => {
    if (params.id) {
      async function loadUser() {
        const user = await getUser(params.id);
        setValue("name", user.data.name);
        setValue("surname", user.data.surname);
        setValue("email", user.data.email);
        setValue("phone", user.data.phone);
        setValue("birth_date", user.data.birth_date);
      }
      loadUser();
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      data.name = data.name.toUpperCase();
      data.surname = data.surname.toUpperCase();

      await updateUser(params.id, data);
      navigate("/users");
    } else {
      data.name = data.name.toUpperCase();
      data.surname = data.surname.toUpperCase();

      await createUser(data);
      navigate("/users");
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>{action} User</h1>
      <label htmlFor="">Name</label>
      <input
        type="text"
        placeholder="Insert name"
        {...register("name", { required: true })}
        autoComplete="off"
      />

      <label htmlFor="">Surname</label>
      <input
        type="text"
        placeholder="Insert surname"
        {...register("surname", { required: true })}
        autoComplete="off"
      />

      <label htmlFor="">Email</label>
      <input
        type="email"
        placeholder="Insert email"
        {...register("email", { required: true })}
        autoComplete="off"
      />

      <label htmlFor="">Phone</label>
      <input
        type="text"
        placeholder="Insert phone"
        {...register("phone", { required: true })}
        autoComplete="off"
      />

      <label htmlFor="">Birth Date</label>
      <input
        type="date"
        placeholder="Insert date"
        {...register("birth_date", { required: true })}
        autoComplete="off"
      />
      <button id="save_button">Save User</button>

      {params.id && (
        <button
          id="delete_button"
          onClick={async () => {
            if (confirm("Estas seguro de querer eliminar el usuario?")) {
              await deleteUser(params.id);
              navigate("/users");
            } else {
              alert("No se ha borrado ningun usuario");
            }
          }}
        >
          Delete
        </button>
      )}
    </form>
  );
}
