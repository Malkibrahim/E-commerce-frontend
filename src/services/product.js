import axios from "../axios";
// import axios from "axios";
export async function GetAll() {
  // debugger;
  const data = await axios.get("http://localhost:3000/product");
  return data;
}
export async function GetItemById(id) {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(`http://localhost:3000/product/${id}`, {
    headers: {
      Aurthorization: token,
    },
  });
  console.log(data);
  return data.product;
}
export async function GetByCategoryType(id) {
  const { data } = await axios.get("http://localhost:3000/product");
  const menuRes = data.filter((d) => d.categoryType === id);
  return menuRes;
}
export async function Delete(id) {
  debugger;
  const token = localStorage.getItem("token");
  const data = axios.delete(`http://localhost:3000/product/delete/${id}`, {
    headers: {
      Aurthorization: token,
    },
  });
  console.log(data);
}
export async function Add(item) {
  debugger;
  const token = localStorage.getItem("token");
  const product = await axios.post(
    "http://localhost:3000/product/add-product",
    item,
    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  console.log(product);
  return product;
}
export async function Edit(item, id) {
  console.log(id);
  const token = localStorage.getItem("token");

  const { product } = await axios.patch(
    `http://localhost:3000/product/edit/${id}`,
    item,
    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  console.log(product);
  return product;
}
export async function CategoryFilter(id) {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    `http://localhost:3000/product/filter/${id}`,
    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  const menuRes = data.filter((d) => d.categoryType === id);
  return menuRes;
}
export async function Search(search) {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    `http://localhost:3000/product/search`,
    search,
    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  return data;
}

export async function SortByName(search) {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    "http://localhost:3000/product/sort",

    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  console.log(data);
  return data;
}

export async function SortByHighPrice(search) {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    "http://localhost:3000/product/sort-high-price",

    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  console.log(data);
  return data;
}
export async function SortByLowPrice(search) {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    "http://localhost:3000/product/sort-low-price",

    {
      headers: {
        Aurthorization: token,
      },
    }
  );
  console.log(data);
  return data;
}
