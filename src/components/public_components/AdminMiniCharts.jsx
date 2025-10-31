import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Votes Over Time (orange area)
export const VotesAreaMini = () => {
  const data = [
    { d: "Sat", v: 30 },
    { d: "Sun", v: 35 },
    { d: "Mon", v: 55 },
    { d: "Tue", v: 45 },
    { d: "Wed", v: 60 },
    { d: "Thu", v: 68 },
    { d: "Fri", v: 75 },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-1 pt-1 pb-2">
      <p className="text-[13px] text-slate-600">Votes Over Time (7 days)</p>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="votesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.65} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.15} />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="d" tick={{ fontSize: 11, fill: "#9CA3AF" }} tickLine={false} axisLine={false} />
            <YAxis hide domain={[0, 100]} />
            <Tooltip cursor={false} />
            <Area type="monotone" dataKey="v" stroke="#f59e0b" strokeWidth={2} fill="url(#votesGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// New Polls per Day (pale bars with one accent)
export const NewPollsBarMini = () => {
  const data = [
    { d: "Sat", v: 65 },
    { d: "Sun", v: 40 },
    { d: "Mon", v: 48 },
    { d: "Tue", v: 58 },
    { d: "Wed", v: 70, accent: true },
    { d: "Thu", v: 32 },
    { d: "Fri", v: 62 },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-1 pt-1 pb-2">
        <p className="text-[13px] text-slate-600">New Polls per Day (7 days)</p>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid horizontal vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="d" tick={{ fontSize: 11, fill: "#9CA3AF" }} tickLine={false} axisLine={false} />
            <YAxis hide domain={[0, 100]} />
            <Tooltip cursor={false} />
            <Bar dataKey="v" radius={[6, 6, 0, 0]} barSize={20}>
              {data.map((entry, idx) => (
                <Cell
                  key={`c-${idx}`}
                  fill={entry.accent ? "#ef4444" : "#f3cfe0"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Flag Volume (blue line with dots)
export const FlagVolumeLineMini = () => {
  const data = [
    { d: "Sat", v: 15 },
    { d: "Sun", v: 20 },
    { d: "Mon", v: 45 },
    { d: "Tue", v: 38 },
    { d: "Wed", v: 65 },
    { d: "Thu", v: 60 },
    { d: "Fri", v: 75 },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-1 pt-1 pb-2">
      <p className="text-[13px] text-slate-600">Flag Volume (7 days)</p>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 10, bottom: 0, left: 10 }}>
            <CartesianGrid horizontal vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="d" tick={{ fontSize: 11, fill: "#9CA3AF" }} tickLine={false} axisLine={false} />
            <YAxis hide domain={[0, 100]} />
            <Tooltip cursor={false} />
            <Line type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, stroke: "#fff", strokeWidth: 2, fill: "#3b82f6" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default { VotesAreaMini, NewPollsBarMini, FlagVolumeLineMini };


