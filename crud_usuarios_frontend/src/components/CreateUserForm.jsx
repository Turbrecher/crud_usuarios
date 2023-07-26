import { useForm } from "react-hook-form";
import { createUser } from "../api/users.api";
import { useNavigate } from "react-router-dom";

export function UserForm() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    navigate("/users");
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Insert name"
        {...register("name", { required: true })}
      />
      <input
        type="text"
        placeholder="Insert surname"
        {...register("surname", { required: true })}
      />
      <input
        type="email"
        placeholder="Insert email"
        {...register("email", { required: true })}
      />
      <input
        type="number"
        placeholder="Insert phone"
        {...register("phone", { required: true })}
      />
      <input
        type="date"
        placeholder="Insert date"
        {...register("birth_date", { required: true })}
      />
      <button>Save User</button>
    </form>
  );
}
