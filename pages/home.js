import Homes from "../src/components/home";
import { cekLogin } from "../lib/cek_login";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navs from "../src/components/nav";
function Home() {
  const router = useRouter();

  useEffect(() => {
    cekAuth();
  }, []);

  const cekAuth = async () => {
    const statusLogin = await cekLogin();
    if (statusLogin) {
      await router.push("/login");
    }
  };

  return (
    <div className="row d-flex">
      <div>
        <Navs />
      </div>
      <div className="col-md-11 col-sm-9 pl-5 container">
        <Homes />
      </div>
    </div>
  );
}

export default Home;
