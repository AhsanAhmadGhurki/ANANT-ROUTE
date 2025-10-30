import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Icon } from "@iconify/react";

// Sample data based on the image description
const chartData = [
  {
    name: "Week",
    votes: 95000,
  },
  {
    name: "Month",
    votes: 500,
  },
  {
    name: "Year",
    votes: 1200,
  },
  {
    name: "5 Year",
    votes: 4500,
  },
  {
    name: "All",
    votes: 800,
  },
];

const categoryFilters = ["Week", "Month", "Year", "5 Year", "All"];

// Y-axis ticks that should be equally spaced visually
const yAxisTicks = [500, 1000, 5000, 10000, 100000];

// Map tick values to evenly spaced positions for equal visual spacing
const getTickPosition = (tickValue) => {
  const sortedTicks = [...yAxisTicks].sort((a, b) => a - b);
  const index = sortedTicks.indexOf(tickValue);
  const totalTicks = sortedTicks.length;
  // Map to evenly spaced positions: 0%, 25%, 50%, 75%, 100% of max value
  return (index / (totalTicks - 1)) * 100000;
};

// Transform data values to evenly spaced positions based on log interpolation
const transformValue = (value) => {
  const sortedTicks = [...yAxisTicks].sort((a, b) => a - b);
  const min = sortedTicks[0];
  const max = sortedTicks[sortedTicks.length - 1];
  
  if (value <= min) return getTickPosition(min);
  if (value >= max) return getTickPosition(max);
  
  // Find surrounding ticks
  for (let i = 0; i < sortedTicks.length - 1; i++) {
    if (value >= sortedTicks[i] && value <= sortedTicks[i + 1]) {
      const lowerTick = sortedTicks[i];
      const upperTick = sortedTicks[i + 1];
      const lowerPos = getTickPosition(lowerTick);
      const upperPos = getTickPosition(upperTick);
      
      // Interpolate on log scale for accuracy
      const lowerLog = Math.log10(lowerTick);
      const upperLog = Math.log10(upperTick);
      const valueLog = Math.log10(value);
      const ratio = (valueLog - lowerLog) / (upperLog - lowerLog);
      
      return lowerPos + (upperPos - lowerPos) * ratio;
    }
  }
  
  return getTickPosition(max);
};

const VotesOverTimeChart = () => {
  const [activeFilter, setActiveFilter] = useState("Year");
  const [selectedTimeRange] = useState("Last 7 days");
  
  // Transform data for equal spacing visualization
  const transformedData = chartData.map(item => ({
    ...item,
    votesTransformed: transformValue(item.votes),
    originalVotes: item.votes // Keep original for tooltip
  }));

  return (
    <div className="w-full bg-transparent rounded-lg mt-7">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Title */}
        <h3 className="text-lg font-medium text-slate-700">Votes Over Time</h3>

        {/* Time Range Selector */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          onClick={() => {
            // Handle dropdown - can be expanded later
            console.log("Time range selector clicked");
          }}
        >
          <Icon
            icon="cuida:calendar-outline"
            width="20"
            height="20"
            className="text-gray-700"
          />
          <span className="text-sm font-medium">{selectedTimeRange}</span>
          <Icon
            icon="mdi:chevron-down"
            width="20"
            height="20"
            className="text-gray-700"
          />
        </button>
      </div>

      {/* Chart Area */}
      <div className="w-full h-[300px] bg-transparent rounded-lg mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={transformedData}
            margin={{ top: 10, right: 10, left: 58, bottom: 20 }}
          >
            <CartesianGrid
              stroke="#9CA3AF"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
              strokeOpacity={0.3}
            />
            <XAxis dataKey="name" tick={false} axisLine={false} hide={true} />
            <YAxis
              type="number"
              domain={[0, 100000]}
              tick={false}
              allowDataOverflow={false}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
              width={0}
            />
            {/* Force display of desired tick values using ReferenceLines at evenly spaced positions */}
            {yAxisTicks.map((tickValue) => (
              <ReferenceLine
                key={tickValue}
                y={getTickPosition(tickValue)}
                stroke="#9CA3AF"
                strokeDasharray="3 3"
                strokeOpacity={0.3}
                label={{
                  value: tickValue.toLocaleString(),
                  position: "left",
                  fill: "#9CA3AF",
                  fontSize: 12,
                  offset: 5,
                }}
              />
            ))}
            <Tooltip
              contentStyle={{
                backgroundColor: "transparent",
                color: "#E5E7EB",
              }}
              labelStyle={{ color: "#9CA3AF", marginBottom: "4px" }}
              formatter={(value, name, props) => {
                // Show original votes value in tooltip
                const originalValue = props.payload.originalVotes;
                return [`${originalValue.toLocaleString()} votes`, "Votes"];
              }}
            />
            <Line
              type="monotone"
              dataKey="votesTransformed"
              stroke="#8B5CF6"
              strokeWidth={2.5}
              dot={{
                fill: "#8B5CF6",
                r: 5,
                stroke: "#ffffff",
                strokeWidth: 2,
                style: {
                  filter: "drop-shadow(0 0 4px rgba(139, 92, 246, 0.5))",
                },
              }}
              activeDot={{
                r: 7,
                stroke: "#ffffff",
                strokeWidth: 2,
                style: {
                  filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.8))",
                },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-between items-center">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-emerald-500 text-white"
                : "bg-[#EFFBF3] text-slate-500 hover:bg-[#EFFBF3]/80"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VotesOverTimeChart;
