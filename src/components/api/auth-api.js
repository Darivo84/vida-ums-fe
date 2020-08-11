import axios from "axios";

const login = async (user) => {
  const result = await axios.post("/auth/login", user);
  return result;
};

const signup = async (user) => {
  const result = await axios.post("/auth/signup", user);
  return result;
};

const hasLoggedin = async () => {
  const res = await axios.get("/auth/hasloggedin");
  return res;
};

const reset = async () => {
  const res = await axios.post("/auth/reset-password");
  return res;
};

const logout = async () => {
  const res = await axios.get("/auth/logout");
  return res;
};

export { login, signup, hasLoggedin, reset, logout };
