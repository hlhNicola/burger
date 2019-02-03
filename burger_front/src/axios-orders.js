import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://react-burger-f84e4.firebaseio.com/"
});

export default baseUrl;
