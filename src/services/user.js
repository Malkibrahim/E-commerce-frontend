import axios from "axios";
export async function registeration(User) {
  const { data } = axios.post("http://localhost:3000/user/register", User);
}
export async function login(user) {
  const { data } = await axios.post(`http://localhost:3000/user/login`, user);
  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.user._id);

  console.log(data);
}
