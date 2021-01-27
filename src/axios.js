import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-73b51.cloudfunctions.net/api",
  // "http://localhost:5001/clone-73b51/us-central1/api",
});

export default instance;
