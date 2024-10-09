import { useEffect, useState } from "react";
import { useMonth } from "../../contexts/MonthContext";
import { getBarChartData, getPieChartData, getStatisticsData } from "../../api/analyticsApi-clients";
import { BarChartType, PieChartType, StatisticsType } from "../../types/types";
import PieChartData from "./PieChartData";
import BarChartData from "./BarChartData";
import TransitionsStatistics from "./TransitionsStatistics";
import Shimmer from "./Shimmer"; // Import the Shimmer component

const Charts = () => {
  const { selectedMonth } = useMonth();
  const [statisticsData, setStatisticsData] = useState<StatisticsType | null>(null);
  const [pieChartData, setPieChartData] = useState<PieChartType | null>(null);
  const [barChartData, setBarChartData] = useState<BarChartType | null>(null);

  const fetchData = async (apiFunction: Function, setData: Function) => {
    try {
      const data = await apiFunction(selectedMonth);
      console.log(`Fetched data for ${apiFunction.name}:`, data); // Debug log for fetched data
      setData(data);
    } catch (error) {
      console.error(`Error fetching data from ${apiFunction.name}:`, error);
    }
  };

  useEffect(() => {
    fetchData(getStatisticsData, setStatisticsData);
    fetchData(getPieChartData, setPieChartData);
    fetchData(getBarChartData, setBarChartData);
  }, [selectedMonth]);

  return (
    <main className="p-4">
      {/* Statistics and Pie Chart */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {statisticsData ? (
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <TransitionsStatistics {...statisticsData} />
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <Shimmer />
          </div>
        )}

        {pieChartData ? (
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <PieChartData {...pieChartData} />
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <Shimmer />
          </div>
        )}
      </div>

      {/* Bar Chart */}
      <div className="mt-4 min-h-[400px]">
        {barChartData ? (
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <BarChartData data={barChartData.data} />
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-4 shadow-md">
            <Shimmer />
          </div>
        )}
      </div>
    </main>
  );
};

export default Charts;
