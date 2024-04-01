import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then((mod) => mod.ResponsiveLine),
  { ssr: false }
);

const data = [
  {
    "id": "japan",
    "color": "hsl(348, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 34
      },
      {
        "x": "helicopter",
        "y": 4
      },
      {
        "x": "boat",
        "y": 74
      },
      {
        "x": "train",
        "y": 202
      },
      {
        "x": "subway",
        "y": 17
      },
      {
        "x": "bus",
        "y": 28
      },
      {
        "x": "car",
        "y": 91
      },
      {
        "x": "moto",
        "y": 184
      },
      {
        "x": "bicycle",
        "y": 76
      },
      {
        "x": "horse",
        "y": 35
      },
      {
        "x": "skateboard",
        "y": 81
      },
      {
        "x": "others",
        "y": 133
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(344, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 212
      },
      {
        "x": "helicopter",
        "y": 98
      },
      {
        "x": "boat",
        "y": 285
      },
      {
        "x": "train",
        "y": 67
      },
      {
        "x": "subway",
        "y": 207
      },
      {
        "x": "bus",
        "y": 138
      },
      {
        "x": "car",
        "y": 157
      },
      {
        "x": "moto",
        "y": 84
      },
      {
        "x": "bicycle",
        "y": 180
      },
      {
        "x": "horse",
        "y": 90
      },
      {
        "x": "skateboard",
        "y": 88
      },
      {
        "x": "others",
        "y": 296
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(69, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 82
      },
      {
        "x": "helicopter",
        "y": 18
      },
      {
        "x": "boat",
        "y": 282
      },
      {
        "x": "train",
        "y": 83
      },
      {
        "x": "subway",
        "y": 200
      },
      {
        "x": "bus",
        "y": 256
      },
      {
        "x": "car",
        "y": 44
      },
      {
        "x": "moto",
        "y": 35
      },
      {
        "x": "bicycle",
        "y": 68
      },
      {
        "x": "horse",
        "y": 4
      },
      {
        "x": "skateboard",
        "y": 58
      },
      {
        "x": "others",
        "y": 198
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(245, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 84
      },
      {
        "x": "helicopter",
        "y": 3
      },
      {
        "x": "boat",
        "y": 208
      },
      {
        "x": "train",
        "y": 75
      },
      {
        "x": "subway",
        "y": 56
      },
      {
        "x": "bus",
        "y": 170
      },
      {
        "x": "car",
        "y": 108
      },
      {
        "x": "moto",
        "y": 62
      },
      {
        "x": "bicycle",
        "y": 25
      },
      {
        "x": "horse",
        "y": 131
      },
      {
        "x": "skateboard",
        "y": 102
      },
      {
        "x": "others",
        "y": 218
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(282, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 21
      },
      {
        "x": "helicopter",
        "y": 92
      },
      {
        "x": "boat",
        "y": 223
      },
      {
        "x": "train",
        "y": 209
      },
      {
        "x": "subway",
        "y": 36
      },
      {
        "x": "bus",
        "y": 232
      },
      {
        "x": "car",
        "y": 265
      },
      {
        "x": "moto",
        "y": 174
      },
      {
        "x": "bicycle",
        "y": 96
      },
      {
        "x": "horse",
        "y": 130
      },
      {
        "x": "skateboard",
        "y": 177
      },
      {
        "x": "others",
        "y": 222
      }
    ]
  }
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default MyResponsiveLine