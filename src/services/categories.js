import axios from "../axios";
export async function GetAllCategories() {
  const { data } = await axios.get("http://localhost:3000/category");
  console.log(data);
  return data.categories;
}
export async function GetItemById(id) {
  const { data } = await axios.get(`http://localhost:3000/category/${id}`);
  console.log(data);
  return data;
}
