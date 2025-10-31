import { useState } from "react";
import Headline from "../../../components/public_components/headline";
import BarChartComponent from "../../../components/public_components/BarChartComponent";
import LineChartComponent from "../../../components/public_components/LineChartComponent";
import LegendWithFilters from "../../../components/public_components/Filters";
import AiComing from "../../../components/public_components/AiComing";
import AnswerTable from "../../../components/public_components/AnswerTable";



export default function Workshop() {
  const [activeFilter, setActiveFilter] = useState("Age");
  const filters = ["Age", "Gender", "Poli", "Authentication"];

  const tableData = [
    { choice: "Strongly support", share: "5%" },
    { choice: "Somewhat support", share: "30%" },
    { choice: "Mixed / unsure", share: "25%" },
    { choice: "Somewhat oppose", share: "20%" },
    { choice: "Strongly oppose", share: "20%" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Headline />

      <div className="mt-6 sm:mt-8 md:mt-10">
        <LegendWithFilters
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        {/* Left: Line Chart + Table */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
            <LineChartComponent />
          </div>

          <AnswerTable tableData={tableData} />
        </div>

        {/* Right: Bar Chart */}
        <div className="w-full md:w-[35%] lg:w-[40%] h-[400px] sm:h-[500px] md:h-[600px]">
          <BarChartComponent />
        </div>
      </div>

      <AiComing />
    </div>
  );
}
