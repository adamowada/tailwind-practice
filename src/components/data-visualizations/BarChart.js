import dynamic from 'next/dynamic';

const ResponsiveBar = dynamic(
  () => import('@nivo/bar').then((mod) => mod.ResponsiveBar),
  { ssr: false }
);

const data = [
  {
    "country": "AD",
    "hot dog": 167,
    "hot dogColor": "hsl(73, 70%, 50%)",
    "burger": 80,
    "burgerColor": "hsl(58, 70%, 50%)",
    "sandwich": 198,
    "sandwichColor": "hsl(63, 70%, 50%)",
    "kebab": 103,
    "kebabColor": "hsl(342, 70%, 50%)",
    "fries": 72,
    "friesColor": "hsl(346, 70%, 50%)",
    "donut": 140,
    "donutColor": "hsl(351, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 103,
    "hot dogColor": "hsl(162, 70%, 50%)",
    "burger": 125,
    "burgerColor": "hsl(241, 70%, 50%)",
    "sandwich": 135,
    "sandwichColor": "hsl(289, 70%, 50%)",
    "kebab": 48,
    "kebabColor": "hsl(145, 70%, 50%)",
    "fries": 76,
    "friesColor": "hsl(49, 70%, 50%)",
    "donut": 95,
    "donutColor": "hsl(245, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 160,
    "hot dogColor": "hsl(155, 70%, 50%)",
    "burger": 140,
    "burgerColor": "hsl(52, 70%, 50%)",
    "sandwich": 7,
    "sandwichColor": "hsl(9, 70%, 50%)",
    "kebab": 185,
    "kebabColor": "hsl(80, 70%, 50%)",
    "fries": 32,
    "friesColor": "hsl(138, 70%, 50%)",
    "donut": 83,
    "donutColor": "hsl(113, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 196,
    "hot dogColor": "hsl(326, 70%, 50%)",
    "burger": 64,
    "burgerColor": "hsl(37, 70%, 50%)",
    "sandwich": 112,
    "sandwichColor": "hsl(172, 70%, 50%)",
    "kebab": 162,
    "kebabColor": "hsl(234, 70%, 50%)",
    "fries": 14,
    "friesColor": "hsl(139, 70%, 50%)",
    "donut": 191,
    "donutColor": "hsl(29, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 43,
    "hot dogColor": "hsl(165, 70%, 50%)",
    "burger": 161,
    "burgerColor": "hsl(99, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(24, 70%, 50%)",
    "kebab": 93,
    "kebabColor": "hsl(177, 70%, 50%)",
    "fries": 33,
    "friesColor": "hsl(260, 70%, 50%)",
    "donut": 25,
    "donutColor": "hsl(135, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 166,
    "hot dogColor": "hsl(314, 70%, 50%)",
    "burger": 57,
    "burgerColor": "hsl(336, 70%, 50%)",
    "sandwich": 169,
    "sandwichColor": "hsl(79, 70%, 50%)",
    "kebab": 85,
    "kebabColor": "hsl(154, 70%, 50%)",
    "fries": 127,
    "friesColor": "hsl(64, 70%, 50%)",
    "donut": 50,
    "donutColor": "hsl(359, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 52,
    "hot dogColor": "hsl(338, 70%, 50%)",
    "burger": 161,
    "burgerColor": "hsl(10, 70%, 50%)",
    "sandwich": 30,
    "sandwichColor": "hsl(254, 70%, 50%)",
    "kebab": 143,
    "kebabColor": "hsl(76, 70%, 50%)",
    "fries": 42,
    "friesColor": "hsl(241, 70%, 50%)",
    "donut": 30,
    "donutColor": "hsl(148, 70%, 50%)"
  }
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default MyResponsiveBar