import Reports from "../src/components/report";

import Navs from "../src/components/nav";
export default function Report() {
  return (
    <div className="row d-flex">
      <div>
        <Navs />
      </div>
      <div className="col-md-12 col-sm-10">
        <Reports />
      </div>
    </div>
  );
}
