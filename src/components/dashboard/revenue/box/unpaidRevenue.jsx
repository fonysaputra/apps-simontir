import React from 'react'

function UnpaidRevenue() {
  return (
    <div className="col-md-3 mb-auto p-2">
      <div className="card card-body">
        <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
          Unpaid Revenue
        </h6>
        <div className="d-flex d-lg-block d-xl-flex align-items-end">
          <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">0.81%</h3>
          <p className="tx-11 tx-color-03 mg-b-0">
            <span className="tx-medium tx-success">
              1.2% <i className="icon ion-md-arrow-up"></i>
            </span>
            than last week
          </p>
        </div>
        <div className="chart-three">
          <div
            id="flotChart3"
            className="flot-chart ht-30"
            style={{ padding: 0, position: 'relative' }}
          >
            <canvas
              className="flot-base"
              width="250"
              height="30"
              style={{
                direction: 'ltr',
                position: 'absolute',
                left: 0,
                top: 0,
                width: 250.5,
                height: 30,
              }}
            ></canvas>
            <canvas
              className="flot-overlay"
              width="250"
              height="30"
              style={{
                direction: 'ltr',
                position: 'absolute',
                left: 0,
                top: 0,
                width: 250.5,
                height: 30,
              }}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnpaidRevenue
