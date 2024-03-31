import Sidebar from '@/components/Sidebar';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { ResponsiveBar } from '@nivo/bar';

const stats = [
  {
    id: 1,
    name: 'Total Subscribers',
    stat: '71,897',
    icon: UsersIcon,
    change: '122',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Avg. Open Rate',
    stat: '58.16%',
    icon: EnvelopeOpenIcon,
    change: '5.4%',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: CursorArrowRaysIcon,
    change: '3.2%',
    changeType: 'decrease',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    "country": "AD",
    "hot dog": 2,
    "hot dogColor": "hsl(204, 70%, 50%)",
    "burger": 109,
    "burgerColor": "hsl(287, 70%, 50%)",
    "sandwich": 192,
    "sandwichColor": "hsl(30, 70%, 50%)",
    "kebab": 82,
    "kebabColor": "hsl(182, 70%, 50%)",
    "fries": 71,
    "friesColor": "hsl(341, 70%, 50%)",
    "donut": 50,
    "donutColor": "hsl(266, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 45,
    "hot dogColor": "hsl(8, 70%, 50%)",
    "burger": 168,
    "burgerColor": "hsl(254, 70%, 50%)",
    "sandwich": 160,
    "sandwichColor": "hsl(82, 70%, 50%)",
    "kebab": 187,
    "kebabColor": "hsl(157, 70%, 50%)",
    "fries": 125,
    "friesColor": "hsl(56, 70%, 50%)",
    "donut": 99,
    "donutColor": "hsl(228, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 183,
    "hot dogColor": "hsl(29, 70%, 50%)",
    "burger": 89,
    "burgerColor": "hsl(97, 70%, 50%)",
    "sandwich": 91,
    "sandwichColor": "hsl(82, 70%, 50%)",
    "kebab": 38,
    "kebabColor": "hsl(255, 70%, 50%)",
    "fries": 63,
    "friesColor": "hsl(355, 70%, 50%)",
    "donut": 38,
    "donutColor": "hsl(203, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 81,
    "hot dogColor": "hsl(90, 70%, 50%)",
    "burger": 124,
    "burgerColor": "hsl(357, 70%, 50%)",
    "sandwich": 1,
    "sandwichColor": "hsl(107, 70%, 50%)",
    "kebab": 39,
    "kebabColor": "hsl(57, 70%, 50%)",
    "fries": 111,
    "friesColor": "hsl(351, 70%, 50%)",
    "donut": 55,
    "donutColor": "hsl(331, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 164,
    "hot dogColor": "hsl(290, 70%, 50%)",
    "burger": 99,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 190,
    "sandwichColor": "hsl(75, 70%, 50%)",
    "kebab": 13,
    "kebabColor": "hsl(95, 70%, 50%)",
    "fries": 133,
    "friesColor": "hsl(239, 70%, 50%)",
    "donut": 28,
    "donutColor": "hsl(95, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 58,
    "hot dogColor": "hsl(123, 70%, 50%)",
    "burger": 70,
    "burgerColor": "hsl(137, 70%, 50%)",
    "sandwich": 141,
    "sandwichColor": "hsl(282, 70%, 50%)",
    "kebab": 54,
    "kebabColor": "hsl(220, 70%, 50%)",
    "fries": 103,
    "friesColor": "hsl(336, 70%, 50%)",
    "donut": 200,
    "donutColor": "hsl(67, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 143,
    "hot dogColor": "hsl(285, 70%, 50%)",
    "burger": 153,
    "burgerColor": "hsl(44, 70%, 50%)",
    "sandwich": 17,
    "sandwichColor": "hsl(1, 70%, 50%)",
    "kebab": 185,
    "kebabColor": "hsl(236, 70%, 50%)",
    "fries": 110,
    "friesColor": "hsl(32, 70%, 50%)",
    "donut": 196,
    "donutColor": "hsl(98, 70%, 50%)"
  }
];

export default function Dashboard() {
  return (
    <Sidebar current='Dashboard'>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>
        Last 30 days
      </h3>

      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((item) => (
          <div
            key={item.id}
            className='relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6'
          >
            <dt>
              <div className='absolute rounded-md bg-indigo-500 p-3'>
                <item.icon className='h-6 w-6 text-white' aria-hidden='true' />
              </div>
              <p className='ml-16 truncate text-sm font-medium text-gray-500'>
                {item.name}
              </p>
            </dt>
            <dd className='ml-16 flex items-baseline pb-6 sm:pb-7'>
              <p className='text-2xl font-semibold text-gray-900'>
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className='h-5 w-5 flex-shrink-0 self-center text-green-500'
                    aria-hidden='true'
                  />
                ) : (
                  <ArrowDownIcon
                    className='h-5 w-5 flex-shrink-0 self-center text-red-500'
                    aria-hidden='true'
                  />
                )}

                <span className='sr-only'>
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </p>
              <div className='absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6'>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    View all<span className='sr-only'> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>

      <div style={{ height: 600 }}>
        <ResponsiveBar
          data={data}
          keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
          indexBy='country'
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
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'fries',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'sandwich',
              },
              id: 'lines',
            },
          ]}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
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
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
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
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role='application'
          ariaLabel='Nivo bar chart demo'
          barAriaLabel={(e) =>
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
          }
        />
      </div>
    </Sidebar>
  );
}
