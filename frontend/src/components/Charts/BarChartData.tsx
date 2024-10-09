import { BarChartType } from '../../types/types';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useMonth } from '../../contexts/MonthContext';

const BarChartData = ({ data }: BarChartType) => {
  const { selectedMonthLabel } = useMonth();

  // If no data is provided, use dummy data
  const dummyData = {

    priceRangeCounts: [

      { range: "$0 - $50", count: 10 },
      { range: "$51 - $100", count: 20 },
      { range: "$101 - $150", count: 15 },
      { range: "$151 - $200", count: 25 },
      { range: "$201 - $300", count: 30 },
      
    ],

  };

  // Use dummy data if data is not available
  const chartData = dummyData;

  // Map through the data to create the series and categories for the chart
  const series = [{
    name: "Price Range Count",
    data: chartData.priceRangeCounts.map(item => item.count),
  }];

  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      width: '100%',
    },
    xaxis: {
      categories: chartData.priceRangeCounts.map(item => item.range), // Using the ranges as the categories for the X-axis
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '80%',
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
        },
      },
    ],
  };

  return (
    <div className="w-full h-full bg-[#EDF6F6]">
      <h1 className="m-4 text-2xl">Bar Chart - {selectedMonthLabel}</h1>
      <Chart options={options} series={series} type="bar" width="100%" height="100%" />
    </div>
  );
};

export default BarChartData;
