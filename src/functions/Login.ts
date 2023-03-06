export const login = (email: any, password: any) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email,
      name: "waleed",
      password,
    })
  );
  return true;
};
export const logout = () => {
  localStorage.clear();
};
