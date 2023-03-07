import { CheckUser } from "../firebase/Users";

export const login = async (email: any, password: any) => {
  const user = await CheckUser({ email });
  if (user && user.password == password) {
    localStorage.setItem("user", JSON.stringify({ ...user }));

    return true;
  }
  return false;
};
export const logout = () => {
  localStorage.clear();
};
export const isLogged = () => {
  const user = localStorage.getItem("user");
  return !!user;
};
export const userInfo = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};
