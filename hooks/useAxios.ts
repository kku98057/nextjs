import axios from "axios";

export default function UseAxios() {
  return axios
    .get(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
    )
    .then((res) => res.data);
}
