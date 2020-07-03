import React from 'react'
import Chart from './chart'
import Box from './box'

function Index() {
  let datas = [
    {
      id: 'japan',
      color: 'hsl(263, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 289,
        },
        {
          x: 'helicopter',
          y: 3,
        },
        {
          x: 'boat',
          y: 182,
        },
        {
          x: 'train',
          y: 197,
        },
        {
          x: 'subway',
          y: 108,
        },
        {
          x: 'bus',
          y: 97,
        },
        {
          x: 'car',
          y: 202,
        },
        {
          x: 'moto',
          y: 236,
        },
        {
          x: 'bicycle',
          y: 75,
        },
        {
          x: 'horse',
          y: 122,
        },
        {
          x: 'skateboard',
          y: 133,
        },
        {
          x: 'others',
          y: 132,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(272, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 60,
        },
        {
          x: 'helicopter',
          y: 127,
        },
        {
          x: 'boat',
          y: 195,
        },
        {
          x: 'train',
          y: 136,
        },
        {
          x: 'subway',
          y: 187,
        },
        {
          x: 'bus',
          y: 63,
        },
        {
          x: 'car',
          y: 149,
        },
        {
          x: 'moto',
          y: 187,
        },
        {
          x: 'bicycle',
          y: 107,
        },
        {
          x: 'horse',
          y: 57,
        },
        {
          x: 'skateboard',
          y: 280,
        },
        {
          x: 'others',
          y: 114,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(68, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 28,
        },
        {
          x: 'helicopter',
          y: 16,
        },
        {
          x: 'boat',
          y: 238,
        },
        {
          x: 'train',
          y: 136,
        },
        {
          x: 'subway',
          y: 91,
        },
        {
          x: 'bus',
          y: 9,
        },
        {
          x: 'car',
          y: 180,
        },
        {
          x: 'moto',
          y: 108,
        },
        {
          x: 'bicycle',
          y: 204,
        },
        {
          x: 'horse',
          y: 240,
        },
        {
          x: 'skateboard',
          y: 67,
        },
        {
          x: 'others',
          y: 151,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(241, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 89,
        },
        {
          x: 'helicopter',
          y: 201,
        },
        {
          x: 'boat',
          y: 117,
        },
        {
          x: 'train',
          y: 50,
        },
        {
          x: 'subway',
          y: 121,
        },
        {
          x: 'bus',
          y: 173,
        },
        {
          x: 'car',
          y: 160,
        },
        {
          x: 'moto',
          y: 168,
        },
        {
          x: 'bicycle',
          y: 35,
        },
        {
          x: 'horse',
          y: 41,
        },
        {
          x: 'skateboard',
          y: 27,
        },
        {
          x: 'others',
          y: 182,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(339, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 284,
        },
        {
          x: 'helicopter',
          y: 227,
        },
        {
          x: 'boat',
          y: 63,
        },
        {
          x: 'train',
          y: 204,
        },
        {
          x: 'subway',
          y: 248,
        },
        {
          x: 'bus',
          y: 217,
        },
        {
          x: 'car',
          y: 176,
        },
        {
          x: 'moto',
          y: 114,
        },
        {
          x: 'bicycle',
          y: 43,
        },
        {
          x: 'horse',
          y: 166,
        },
        {
          x: 'skateboard',
          y: 13,
        },
        {
          x: 'others',
          y: 124,
        },
      ],
    },
  ]
  return (
    <div>
      <h4 className="mg-b-0 tx-spacing--1 animated  bounce">Transaction</h4>
      <div className="row mt-3">
        <div className="col-sm-6 col-lg-6">
          <div className="card">
            <div className="card-body pd-sm-10 pd-lg-10">
              <Chart data={datas} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 d-flex align-content-beetwen flex-wrap">
          <Box />
        </div>
      </div>
    </div>
  )
}

export default Index
