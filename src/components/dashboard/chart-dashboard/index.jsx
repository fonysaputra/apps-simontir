import React from "react";
import Chart from "./chart";
import Chart2 from "./chart2";

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
      id: "",
      color: "hsl(103, 70%, 10%)",
      data: [
        {
          x: "0",
          y: 189,
        },
        {
          x: "1",
          y: 63,
        },
        {
          x: "2",
          y: 182,
        },
        {
          x: "3",
          y: 107,
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
  return (
    <div className="mt-4 col-md-12">
      <div className="row mt-3">
        <div className="col-sm-6 col-lg-6">
          <div className="card">
            <div className="card-body pd-sm-10 pd-lg-10">
              <Chart data={datas} />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="card">
            <div className="card-body pd-sm-10 pd-lg-10">
              <Chart2 data={datas2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
