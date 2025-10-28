import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Mixed / unsure", value: 25 },
  { name: "Somewhat oppose", value: 65 },
  { name: "Somewhat support", value: 40 },
  { name: "Strongly oppose", value: 16 },
  { name: "Strongly support", value: 50 },
];

const COLORS = {
  "Strongly support": "#8DFAC2",
  "Somewhat support": "#FDCFA3",
  "Mixed / unsure": "#9CCBFF",
  "Somewhat oppose": "#FFD66B",
  "Strongly oppose": "#B1B2FF",
};

const BarChartComponent = () => {
  return (
    <div className="w-full h-full">
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
                <rect width="8" height="8" fill={COLORS[entry.name]} />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="8"
                  stroke="#ffffff"
                  strokeWidth="8"
                  strokeOpacity={0.3}
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
              <Cell key={`cell-${index}`} fill={`url(#pattern-${index})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
