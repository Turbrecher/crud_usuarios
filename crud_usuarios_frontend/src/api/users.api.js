import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8000/users/api/v1/users/",
});

export const getAllUsers = () => userApi.get("/");

export const createUser = (user) => userApi.post("/",user)

export const getUser = (id) => userApi.get('/'+id)

export const deleteUser = (id) => userApi.delete(("/"+id))

export const updateUser = (id, user) => userApi.put(('/'+id+"/"), user)
