export const cekLogin = async () => {
  const token = localStorage.getItem("browserDefault");

  if (!token) {
    return true;
  }
};
