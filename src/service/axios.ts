import Axios from "axios";


const axios = Axios.create({
  baseURL: "https://apistoreapp.cyclic.app",
});

export default axios;
