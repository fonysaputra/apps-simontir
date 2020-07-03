import React from "react";
import Chart from "./chart";
import Order from "./box/order";
import BumpRevenue from "./box/bumpRevenue";
import DiscountClaimed from "./box/discountClaimed";
import ShippingCost from "./box/shippingCost";
import QuantitySold from "./box/quantitySold";
import COGS from "./box/cogs";
import UnpaidRevenue from "./box/unpaidRevenue";
import GrossRevenue from "./box/grossRevenue";
import NetRevenue from "./box/netRevenue";
import GrossProfit from "./box/grossProfit";
import Expanses from "./box/expanses";
import NetProfit from "./box/netProfit";

const datas = [
  {
    country: "AD",
    "hot dog": 145,
    "hot dogColor": "hsl(219, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(111, 70%, 50%)",
    sandwich: 113,
    sandwichColor: "hsl(289, 70%, 50%)",
    kebab: 70,
    kebabColor: "hsl(252, 70%, 50%)",
    fries: 74,
    friesColor: "hsl(211, 70%, 50%)",
    donut: 59,
    donutColor: "hsl(101, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 95,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 159,
    burgerColor: "hsl(275, 70%, 50%)",
    sandwich: 158,
    sandwichColor: "hsl(53, 70%, 50%)",
    kebab: 30,
    kebabColor: "hsl(156, 70%, 50%)",
    fries: 115,
    friesColor: "hsl(234, 70%, 50%)",
    donut: 0,
    donutColor: "hsl(144, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 98,
    "hot dogColor": "hsl(293, 70%, 50%)",
    burger: 107,
    burgerColor: "hsl(298, 70%, 50%)",
    sandwich: 197,
    sandwichColor: "hsl(275, 70%, 50%)",
    kebab: 163,
    kebabColor: "hsl(319, 70%, 50%)",
    fries: 169,
    friesColor: "hsl(128, 70%, 50%)",
    donut: 158,
    donutColor: "hsl(302, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 72,
    "hot dogColor": "hsl(181, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(211, 70%, 50%)",
    sandwich: 139,
    sandwichColor: "hsl(264, 70%, 50%)",
    kebab: 14,
    kebabColor: "hsl(93, 70%, 50%)",
    fries: 138,
    friesColor: "hsl(199, 70%, 50%)",
    donut: 118,
    donutColor: "hsl(332, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 32,
    "hot dogColor": "hsl(4, 70%, 50%)",
    burger: 4,
    burgerColor: "hsl(157, 70%, 50%)",
    sandwich: 157,
    sandwichColor: "hsl(87, 70%, 50%)",
    kebab: 68,
    kebabColor: "hsl(250, 70%, 50%)",
    fries: 146,
    friesColor: "hsl(337, 70%, 50%)",
    donut: 194,
    donutColor: "hsl(271, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 155,
    "hot dogColor": "hsl(133, 70%, 50%)",
    burger: 90,
    burgerColor: "hsl(291, 70%, 50%)",
    sandwich: 65,
    sandwichColor: "hsl(252, 70%, 50%)",
    kebab: 120,
    kebabColor: "hsl(57, 70%, 50%)",
    fries: 136,
    friesColor: "hsl(37, 70%, 50%)",
    donut: 24,
    donutColor: "hsl(325, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 41,
    "hot dogColor": "hsl(173, 70%, 50%)",
    burger: 195,
    burgerColor: "hsl(75, 70%, 50%)",
    sandwich: 165,
    sandwichColor: "hsl(306, 70%, 50%)",
    kebab: 140,
    kebabColor: "hsl(79, 70%, 50%)",
    fries: 92,
    friesColor: "hsl(334, 70%, 50%)",
    donut: 65,
    donutColor: "hsl(11, 70%, 50%)",
  },
];
function Index() {
  return (
    <div className="mt-4 ml-5">
      <h4 className="mg-b-0 tx-spacing--1 animated  bounce">Revenue</h4>

      <div className="row mt-3">
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-body pd-sm-10 pd-lg-10">
              <Chart data={datas} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 d-flex align-content-beetwen flex-wrap">
          <div className="row align-content-beetwen ">
            <Order />
            <BumpRevenue />
            <DiscountClaimed />
            <ShippingCost />
          </div>
        </div>
      </div>

      <div className="row mt-2 pd-lg-6 pd-sm-6 align-content-beetwen">
        <QuantitySold />
        <COGS />
        <UnpaidRevenue />

        <GrossRevenue />
        <NetRevenue />

        <GrossProfit />
        <Expanses />
        <NetProfit />
      </div>
    </div>
  );
}

export default Index;
