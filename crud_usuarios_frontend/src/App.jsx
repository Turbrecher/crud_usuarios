import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";
import { CreateUserFormPage } from "./pages/CreateUserFormPage";
import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/users-create" element={<CreateUserFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
