import Sidebar from '@/components/Sidebar';
import MyResponsivePie from '@/components/data-visualizations/PieChart';
import MyResponsiveBar from '@/components/data-visualizations/BarChart';
import MyResponsiveLine from '@/components/data-visualizations/LineChart';
import MyResponsiveBump from '@/components/data-visualizations/BumpChart';

const visualizations = [
  MyResponsivePie,
  MyResponsiveBar,
  MyResponsiveLine,
  MyResponsiveBump
];

export default function Reports() {
  return (
    <Sidebar current='Reports'>
      <div className='grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-2 2xl:grid-cols-3'>
        {visualizations.map((visualization, idx) => (
          <div key={idx} className='group'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg'>
              {visualization()}
            </div>
          </div>
        ))}
      </div>
    </Sidebar>
  );
}
