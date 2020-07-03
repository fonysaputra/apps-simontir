import React from "react";

function Index() {
  return (
    <div className="mt-4 col-md-12">
      <div className="row">
        <div className="col-md">
          <div className="card">
            <span
              className="display-5 text-center m-3"
              style={{ backgroundColor: "yellow" }}
            >
              {" "}
              MANAGEMENT & MONITORING BATTERY{" "}
            </span>
            <div className="row m-1">
              <div className="col">
                <span>
                  <b>SOURCE</b>
                </span>
                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Daya</span>
                  </div>
                  <div className="col">
                    <span>:0.00 W</span>
                  </div>
                </div>

                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Tegangan</span>
                  </div>
                  <div className="col">
                    <span>:0.00 V</span>
                  </div>
                </div>

                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Arus</span>
                  </div>
                  <div className="col">
                    <span>:0.00 A</span>
                  </div>
                </div>
              </div>

              <div className="col">
                <span>
                  <b>BATTERY</b>
                </span>

                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Daya</span>
                  </div>
                  <div className="col">
                    <span>:30000 W</span>
                  </div>
                </div>

                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Tegangan</span>
                  </div>
                  <div className="col">
                    <span>:60 V</span>
                  </div>
                </div>

                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Arus</span>
                  </div>
                  <div className="col">
                    <span>:34.4 Ah</span>
                  </div>
                </div>

                <div className="row m-2" style={{ fontSize: "0.9rem" }}>
                  <div className="col">
                    <span>Suhu</span>
                  </div>
                  <div className="col">
                    <span>:25 C</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-3">
              <span>
                <b>Efficiency &nbsp; : &nbsp; 0.00 %</b>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center text-center">
          <span>
            <img
              width={260}
              height="100%"
              src="http://www.reviversoft.com/blog/wp-content/uploads/2010/08/battery-optimizer-icon.png"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Index;
