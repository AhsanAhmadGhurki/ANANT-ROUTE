import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const lineData = [
  {
    name: "Week",
    strongSupport: 40,
    somewhatSupport: 35,
    unsure: 20,
    somewhatOppose: 45,
    stronglyOppose: 70,
  },
  {
    name: "Month",
    strongSupport: 60,
    somewhatSupport: 45,
    unsure: 30,
    somewhatOppose: 35,
    stronglyOppose: 20,
  },
  {
    name: "Year",
    strongSupport: 80,
    somewhatSupport: 55,
    unsure: 35,
    somewhatOppose: 30,
    stronglyOppose: 10,
  },
  {
    name: "5 Year",
    strongSupport: 60,
    somewhatSupport: 50,
    unsure: 25,
    somewhatOppose: 40,
    stronglyOppose: 20,
  },
  {
    name: "All",
    strongSupport: 50,
    somewhatSupport: 40,
    unsure: 25,
    somewhatOppose: 65,
    stronglyOppose: 16,
  },
];

const COLORS = {
  strongSupport: "#8DFAC2",
  somewhatSupport: "#FDCFA3",
  unsure: "#9CCBFF",
  somewhatOppose: "#FFD66B",
  stronglyOppose: "#B1B2FF",
};

const LineChartComponent = () => {
  const [activeTab, setActiveTab] = useState("Year");

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <CartesianGrid stroke="#F3F4F6" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                color: "#6B7280",
              }}
              labelStyle={{ color: "#6B7280" }}
            />
            <Line
              type="monotone"
              dataKey="strongSupport"
              stroke={COLORS.strongSupport}
              strokeWidth={2}
              dot={{ fill: COLORS.strongSupport }}
            />
            <Line
              type="monotone"
              dataKey="somewhatSupport"
              stroke={COLORS.somewhatSupport}
              strokeWidth={2}
              dot={{ fill: COLORS.somewhatSupport }}
            />
            <Line
              type="monotone"
              dataKey="unsure"
              stroke={COLORS.unsure}
              strokeWidth={2}
              dot={{ fill: COLORS.unsure }}
            />
            <Line
              type="monotone"
              dataKey="somewhatOppose"
              stroke={COLORS.somewhatOppose}
              strokeWidth={2}
              dot={{ fill: COLORS.somewhatOppose }}
            />
            <Line
              type="monotone"
              dataKey="stronglyOppose"
              stroke={COLORS.stronglyOppose}
              strokeWidth={2}
              dot={{ fill: COLORS.stronglyOppose }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-2 sm:mt-1 sm:ms-16 ms-0 px-2 sm:px-0 flex-shrink-0">
        {["Week", "Month", "Year", "5 Year", "All"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-3 sm:px-6 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === t
                ? "bg-emerald-500 text-white"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineChartComponent;
