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
    <div style={{ position: "absolute", margin: 0, top: 0, left: 0, right: 0 }}>
      {/* <Home /> */}
      <img
        width={"100%"}
        src="https://images.unsplash.com/photo-1593086439822-bcebf2f1e052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
      />
    </div>
  );
}
