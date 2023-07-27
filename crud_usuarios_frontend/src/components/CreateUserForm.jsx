import { useForm } from "react-hook-form";
import { createUser } from "../api/users.api";
import { useNavigate } from "react-router-dom";
import './styles/CreateUserForm.css'

export function UserForm() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    navigate("/users");
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>Create New User</h1>
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
    </form>
  );
}
