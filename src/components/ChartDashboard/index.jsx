import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const barData = [
  { name: "Mixed / unsure", value: 25 },
  { name: "Somewhat oppose", value: 29 },
  { name: "Somewhat support", value: 30 },
  { name: "Strongly oppose", value: 29 },
  { name: "Strongly support", value: 5 },
];

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
    strongSupport: 70,
    somewhatSupport: 45,
    unsure: 30,
    somewhatOppose: 35,
    stronglyOppose: 15,
  },
];

const COLORS = {
  strongSupport: "#8DFAC2",
  somewhatSupport: "#FDCFA3",
  unsure: "#9CCBFF",
  somewhatOppose: "#FFD66B",
  stronglyOppose: "#B1B2FF",
};

const ChartDashboard = () => {
  const [activeTab, setActiveTab] = useState("Year");
  const [activeFilter, setActiveFilter] = useState("Age");

  const filters = ["Age", "Gender", "Poli", "Authentication"];
  const colorMap = {
    "Strongly support": COLORS.strongSupport,
    "Somewhat support": COLORS.somewhatSupport,
    "Mixed / unsure": COLORS.unsure,
    "Somewhat oppose": COLORS.somewhatOppose,
    "Strongly oppose": COLORS.stronglyOppose,
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        {/* Left Side: Line Labels + Filters */}
        <div className="flex justify-between text-sm text-gray-700">
          {/* Line Labels */}
          <div className="flex gap-4 mb-6">
            <span className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.strongSupport }}
              ></span>
              Strongly support
            </span>
            <span className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.somewhatSupport }}
              ></span>
              Somewhat support
            </span>
            <span className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.unsure }}
              ></span>
              Mixed / unsure
            </span>
            <span className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.somewhatOppose }}
              ></span>
              Somewhat oppose
            </span>
            <span className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.stronglyOppose }}
              ></span>
              Strongly oppose
            </span>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex justify-between gap-6 flex-wrap">
          {/* Bar Chart */}
          <div className="w-[35%] h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barSize={70}>
                <CartesianGrid stroke="#f2f2f2" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={false}
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
                    borderRadius: "12px",
                    color: "#6B7280",
                  }}
                  labelStyle={{ color: "#6B7280" }}
                />

                {/* Define diagonal stripe patterns over solid bar color */}
                <defs>
                  {barData.map((entry, index) => (
                    <pattern
                      key={`pattern-${index}`}
                      id={`pattern-${index}`}
                      width="8"
                      height="8"
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(-60)"
                    >
                      {/* background fill */}
                      <rect width="8" height="8" fill={colorMap[entry.name]} />
                      {/* stripe */}
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="8"
                        stroke="#ffffff" // stripe color (light over bg)
                        strokeWidth="8"
                        strokeOpacity={0.3} // subtle stripe
                      />
                    </pattern>
                  ))}
                </defs>

                <Bar
                  dataKey="value"
                  radius={[10, 10, 0, 0]}
                  label={{ position: "top", fill: "#9CA3AF", fontSize: 12 }}
                >
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#pattern-${index})`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="w-[60%] h-[300px] flex flex-col justify-between">
            {" "}
            {/* same height */}
            <div className="flex-1">
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
            {/* Tabs at bottom */}
            <div className="flex justify-between gap-4 mt-1 ms-16">
              {["Week", "Month", "Year", "5 Year", "All"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-6 py-1.5 rounded-md text-sm font-medium transition-all ${
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
        </div>
      </div>
    </div>
  );
};

export default ChartDashboard;
