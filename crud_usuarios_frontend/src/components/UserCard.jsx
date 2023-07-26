export function UserCard({ user }) {
  return (
    <div>
      <hr />
      <h1>{user.name}</h1>
      <h1>{user.surname}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.birth_date}</h1>
      <hr />
    </div>
  );
}
