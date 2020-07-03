function index() {
  return (
    <div className="mt-4 col-md-12 ml-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card text-center">
            <span style={{ color: "black" }} className="my-3">
              {" "}
              STATUS
            </span>
            <div className="row p-4">
              <div className="col-md">
                <div className="progress">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-center">
            <span style={{ color: "black" }} className="my-3">
              {" "}
              STATUS TIAP BATTERY
            </span>

            <div className="row p-4 ">
              <div className="col-md-3  p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>20%</span>
              </div>
              <div className="col-md-3 p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>40%</span>
              </div>

              <div className="col-md-3 p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success "
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>40%</span>
              </div>

              <div className="col-md-3 p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}
                  >
                    60%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>60%</span>
              </div>

              <div className="col-md-3 p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>20%</span>
              </div>

              <div className="col-md-3 p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>20%</span>
              </div>
              <div className="col-md-3 p-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
                <span style={{ fontSize: 14 }}>20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
