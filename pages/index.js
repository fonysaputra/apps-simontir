import Home from "../src/components/home";
import { useEffect } from "react";

import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  });
  return (
    <div
      style={{
        backgroundColor: "purple",
        position: "absolute",
        margin: 0,
        top: 0,
        left: 0,
        height: "100%",
        textAlign: "center",
        right: 0,
      }}
    >
      {/* <Home /> */}
      <img
        width={200}
        style={{ margin: 0, marginTop: "20%" }}
        src="./logo.png"
      />
    </div>
  );
}
