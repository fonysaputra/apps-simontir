import React from "react";
import { ResponsiveLine } from "@nivo/line";
function ChartVoltage({ data }) {
  return (
    <div style={{ height: 170 }} className="text-center">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 10, bottom: 50, left: 35 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "paired" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={false}
        useMesh={true}
      />
    </div>
  );
}

export default ChartVoltage;
