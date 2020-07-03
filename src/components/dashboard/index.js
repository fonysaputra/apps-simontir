import React, { useEffect } from "react";
import Header from "../header";
import ManagementBattery from "./management-battery";
import { useRouter } from "next/router";
import StatusBattery from "./status-battery";
import Chart from "./chart-dashboard";
function Index() {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <Header />

      <div
        className="container col-md-11 pt-5 pl-5"
        style={{ marginLeft: "18%" }}
      >
        <ManagementBattery />
        <Chart />
        <StatusBattery />
      </div>
    </>
  );
}

export default Index;
