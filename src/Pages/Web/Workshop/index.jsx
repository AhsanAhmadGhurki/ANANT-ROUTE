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
    <div className="container mx-auto px-4">
      <Headline />

      <div className="mt-10">
        <LegendWithFilters
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

      <div className="flex gap-6 mt-6">
        {/* Left: Line Chart + Table */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="h-[300px]">
            <LineChartComponent />
          </div>

          <AnswerTable  tableData={tableData} />
        </div>

        {/* Right: Bar Chart */}
        <div className="w-[35%] h-[600px]">
          <BarChartComponent />
        </div>
      </div>

      <AiComing />
    </div>
  );
}
