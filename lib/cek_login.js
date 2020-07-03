export const cekLogin = async () => {
  const token = localStorage.getItem("browserName");

  if (!token) {
    return true;
  }
};

export const logout = async () => {
  localStorage.removeItem("browserName");
  const token = localStorage.getItem("browserName");

  if (!token) {
    return true;
  }
};
