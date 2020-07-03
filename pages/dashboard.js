import Dashboard from "../src/components/dashboard";

import Navs from "../src/components/nav";
export default function index() {
  return (
    <div className="row d-flex">
      <div>
        <Navs />
      </div>
      <div className="col-md-12 col-sm-10">
        <Dashboard />
      </div>
    </div>
  );
}
