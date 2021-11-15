import axios from "axios";

const baseUrl = "http://localhost:3001/api/products";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data).catch((err) => console.error(err));
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((res) => res.data).catch((err) => console.error(err));
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const productServices = {
  getAll,
  getOne,
  update,
};

export default productServices;
