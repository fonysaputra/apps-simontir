import Header from "../header";

import ChartVoltage from "./chartVoltage";
import ChartCurrent from "./chartCurrent";
function Index() {
  let datas = [
    {
      id: "Voltage (V)",
      color: "hsl(263, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 189,
        },
        {
          x: "1",
          y: 3,
        },
        {
          x: "2",
          y: 182,
        },
        {
          x: "3",
          y: 197,
        },
        {
          x: "4",
          y: 108,
        },
        {
          x: "5",
          y: 97,
        },
        {
          x: "6",
          y: 102,
        },
        {
          x: "7",
          y: 136,
        },

        {
          x: "8",
          y: 133,
        },
        {
          x: "9",
          y: 102,
        },
      ],
    },
  ];

  let datas2 = [
    {
      id: "Voltage (V)",
      color: "hsl(263, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 89,
        },
        {
          x: "1",
          y: 93,
        },
        {
          x: "2",
          y: 82,
        },
        {
          x: "3",
          y: 97,
        },
        {
          x: "4",
          y: 98,
        },
        {
          x: "5",
          y: 97,
        },
        {
          x: "6",
          y: 82,
        },
        {
          x: "7",
          y: 16,
        },

        {
          x: "8",
          y: 13,
        },
        {
          x: "9",
          y: 12,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div>
        <div className="container pt-5 pl-5">
          <div
            style={{
              marginLeft: "15%",
              marginTop: "2%",
              textAlign: "center",
              width: "100%",
              alignContent: "center",
            }}
          >
            <div className="card m-5">
              <div className="row m-2">
                <div className="col-md-4 p-4">
                  <div className="d-flex">
                    <span>Battery 1</span>
                    &nbsp;
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

                <div className="col-md-4 text-center">
                  <span>History Voltage Of Battery Charge</span>
                  &nbsp;
                  <ChartVoltage data={datas} />
                </div>

                <div className="col-md-4">
                  <span>History Current Of Battery Charge</span>
                  &nbsp;
                  <ChartCurrent data={datas} />
                </div>
              </div>

              <div className="row m-2">
                <div className="col-md-4 p-4">
                  <div className="d-flex">
                    <span>Battery 2</span>
                    &nbsp;
                    <div
                      className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                </div>

                <div className="col-md-4 text-center">
                  <ChartVoltage data={datas2} />
                </div>

                <div className="col-md-4">
                  <ChartCurrent data={datas2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
