import { useState } from "react";
import { useRouter } from "next/router";
function login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const actionLogin = async () => {
    if (username === "") {
      setWarning("Username Tidak Boleh Kosong");
    } else if (password === "") {
      setWarning("Password Tidak Boleh Kosong");
    } else {
      if (username === "admin" && password === "admin") {
        localStorage.setItem("browserName", "admin");
        router.push("/home");
      } else {
        setWarning("Username Atau Password Salah Silahkan Coba Lagi");
      }
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "purple",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      />
      <div className="container">
        <div className="card p-4 mt-5 m-5 ">
          <div className="text-center">
            <img src="./logo.png" width={200} />
          </div>
          <div className="text-center pt-3 d-flex justify-content-center">
            <p className=" col-md-6 ">
              System Management & Monitoring Battery Load Acid For Electric Car
            </p>
          </div>
          <div className="p-5">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <span className="py-3 text-danger">{warning}</span>
            <br />
            <div className="float-left pt-3">
              <button onClick={() => actionLogin()} className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default login;
