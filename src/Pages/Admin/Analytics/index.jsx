import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Select, DatePicker } from "antd";
import dayjs from "dayjs";
import StatCards from "../../../components/public_components/StatCards";
import ChartsRow from "../../../components/public_components/ChartsRow";
import {
  VotesAreaMini,
  NewPollsBarMini,
  FlagVolumeLineMini,
} from "../../../components/public_components/AdminMiniCharts";
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
  LabelList,
} from "recharts";

// Reusable tooltip that shows value and delta/percentage vs previous point
const ValueDeltaTooltip = ({ active, payload, label, data }) => {
  if (active && payload && payload.length) {
    const currentValue = payload[0]?.value;
    const index = Array.isArray(data)
      ? data.findIndex((p) => p?.d === label)
      : -1;
    const prevValue = index > 0 ? data[index - 1]?.v : null;
    const delta =
      typeof currentValue === "number" && typeof prevValue === "number"
        ? currentValue - prevValue
        : null;
    const pct =
      typeof currentValue === "number" &&
      typeof prevValue === "number" &&
      prevValue !== 0
        ? (delta / prevValue) * 100
        : null;

    const up = typeof delta === "number" && delta > 0;
    const down = typeof delta === "number" && delta < 0;
    const deltaColor = up ? "#16a34a" : down ? "#dc2626" : "#6b7280"; // green/red/slate-500
    const arrow = up ? "▲" : down ? "▼" : "•";

    return (
      <div
        style={{
          background: "white",
          border: "1px solid #E5E7EB",
          borderRadius: 8,
          padding: 10,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 4 }}>
          {label}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>
            {currentValue}
          </div>
          {delta !== null && (
            <div style={{ fontSize: 12, color: deltaColor }}>
              {arrow} {delta > 0 ? "+" : ""}
              {Math.round(delta)}
              {pct !== null && (
                <span style={{ marginLeft: 6, color: deltaColor }}>
                  ({pct > 0 ? "+" : ""}
                  {pct.toFixed(1)}%)
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

// Local, filter-driven versions so other pages remain unaffected
const VotesAreaMiniLocal = ({ data }) => (
  <div className="w-full h-full flex flex-col">
    <div className="px-1 pt-1 pb-2">
      <p className="text-[13px] text-slate-600">Votes Over Time</p>
    </div>
    <div className="flex-1">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 10 }}
        >
          <defs>
            <linearGradient id="votesGradLocal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.65} />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal vertical={false} stroke="#E5E7EB" />
          <XAxis
            dataKey="d"
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[100, 80, 60, 40, 20]}
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
            tickFormatter={(v) =>
              ({
                100: "24000",
                80: "20000",
                60: "1800",
                40: "1200",
                20: "600",
              })[v] ?? v
            }
            tickLine={false}
            axisLine={false}
            width={36}
          />
          <Tooltip cursor={false} content={<ValueDeltaTooltip data={data} />} />
          <Area
            type="monotone"
            dataKey="v"
            stroke="#f59e0b"
            strokeWidth={2}
            fill="url(#votesGradLocal)"
          />
          <LabelList
            content={({ x, y, value }) =>
              typeof value === "number" ? (
                <text
                  x={x}
                  y={y - 6}
                  fill="#6B7280"
                  fontSize={14}
                  textAnchor="middle"
                >
                  {value * 2}
                </text>
              ) : null
            }
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const NewPollsBarMiniLocal = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-1 pt-1 pb-2">
        <p className="text-[13px] text-slate-600">New Polls per Day</p>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 4, right: 8, bottom: 0, left: 10 }}
          >
            <CartesianGrid horizontal vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="d"
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              tickFormatter={(v) => `${v}%`}
              tickLine={false}
              axisLine={false}
              width={30}
            />
            <Tooltip
              cursor={false}
              content={<ValueDeltaTooltip data={data} />}
            />
            <Bar dataKey="v" radius={[6, 6, 0, 0]} barSize={40}>
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

const FlagVolumeLineMiniLocal = ({ data }) => (
  <div className="w-full h-full flex flex-col">
    <div className="px-1 pt-1 pb-2">
      <p className="text-[13px] text-slate-600">Flag Volume</p>
    </div>
    <div className="flex-1">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 4, right: 10, bottom: 0, left: 10 }}
        >
          <CartesianGrid horizontal vertical={false} stroke="#E5E7EB" />
          <XAxis
            dataKey="d"
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 11, fill: "#9CA3AF" }}
            tickFormatter={(v) => `${v}%`}
            tickLine={false}
            axisLine={false}
            width={30}
          />
          <Tooltip cursor={false} content={<ValueDeltaTooltip data={data} />} />
          <Line
            type="monotone"
            dataKey="v"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#fff", strokeWidth: 2, fill: "#3b82f6" }}
          />
          <LabelList
            content={({ x, y, value }) =>
              typeof value === "number" ? (
                <text
                  x={x}
                  y={y - 6}
                  fill="#6B7280"
                  fontSize={11}
                  textAnchor="middle"
                >
                  {`${value}%`}
                </text>
              ) : null
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Analytics = () => {
  const { Option } = Select;
  const [dateRange, setDateRange] = useState("All dates");
  const [category, setCategory] = useState("All Categories");
  const [role, setRole] = useState("User");

  // Note: Date range is now selected via RangePicker
  const categoryOptions = [
    "Technology",
    "Politics",
    "Health",
    "Sports",
    "Entertainment",
  ];

  // Demo datasets that change with filters, scoped to this page only
  const datasets = useMemo(() => {
    const baseDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const seed = (str) =>
      Array.from(str).reduce((a, c) => (a + c.charCodeAt(0)) % 97, 0) + 3;

    // Stable variability based on current filters
    const seedValue = seed(category + role + dateRange);
    const factor = 0.6 + (seedValue % 40) / 100; // baseline scaling

    // Simple deterministic PRNG based on seed for gentle jitter
    const rand01 = (n) => {
      const x = (seedValue * 9301 + n * 49297) % 233280;
      return x / 233280;
    };

    const phase = (seedValue % 7) * 0.35; // phase shift so curves differ per filter

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

    const votes = baseDays.map((d, i) => {
      const base = (28 + i * 7) * factor;
      const wave1 = Math.sin(i * 3.2 + phase) * 12; // stronger oscillation
      const wave2 = Math.sin(i * 1.05 + phase * 0.6) * 5; // second harmonic
      const jitter = (rand01(i + 11) - 0.5) * 6; // a bit more randomness
      // occasional spike or dip
      const spike = (seedValue + i) % 9 === 0 ? 10 : 0;
      const dip = (seedValue + i) % 13 === 0 ? -8 : 0;
      return {
        d,
        v: Math.round(
          clamp(base + wave1 + wave2 + jitter + spike + dip, 0, 95)
        ),
      };
    });

    const polls = baseDays.map((d, i) => {
      const base = (22 + ((i * 6) % 18)) * factor;
      const wave1 = Math.cos(i * 1.8 + phase * 0.2) * 10;
      const wave2 = Math.sin(i * 2.2 + phase) * 4;
      const jitter = (rand01(i + 23) - 0.5) * 7;
      const midweekBoost = d === "Wed" ? 6 : 0; // highlight midweek activity
      const spike = (seedValue ^ i) % 11 === 0 ? 12 : 0;
      const dip = (seedValue + i * 3) % 17 === 0 ? -9 : 0;
      return {
        d,
        v: Math.round(
          clamp(
            base + wave1 + wave2 + jitter + midweekBoost + spike + dip,
            0,
            90
          )
        ),
        accent: d === "Wed",
      };
    });

    const flags = baseDays.map((d, i) => {
      const base = (12 + i * 10) * factor;
      const wave1 = Math.sin(i * 3.1 + phase * 0.8) * 12;
      const wave2 = Math.cos(i * 1.8 + phase * 0.4) * 6;
      const step = ((i % 3) - 1) * 4; // slight step-like variation
      const jitter = (rand01(i + 37) - 0.5) * 8;
      const spike = (seedValue + i * 5) % 8 === 0 ? 14 : 0;
      const dip = (seedValue * (i + 1)) % 19 === 0 ? -10 : 0;
      return {
        d,
        v: Math.round(
          clamp(base + wave1 + wave2 + step + jitter + spike + dip, 0, 98)
        ),
      };
    });

    return { votes, polls, flags };
  }, [category, role, dateRange]);

  return (
    <div>
      <div className="mb-7">
        <p className="text-2xl font-medium">Dashboard</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={4} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Total Votes",
            value: "142,350",
            change: "+12% vs last month",
            icon: "fluent:clock-20-regular",
            iconColor: "text-[#FFA500]",
          },
          {
            title: "Active Users",
            value: 89,
            change: "-3% vs last month",
            icon: "tabler:user-check",
            iconColor: "text-[#15CACA]",
          },
          {
            title: "Avg Engagement",
            value: "64.2%",
            change: "+3.1% from last period",
            icon: "bi:eye",
            iconColor: "text-[#2185E0]",
          },
          {
            title: "Poll Completion",
            value: "87.3%",
            change: "+3.1% from last period",
            icon: "cuida:calendar-outline",
            iconColor: "text-[#F89000]",
          },
        ]}
      />

      {/* Top Filters Row */}
      <div className="flex items-center justify-between mb-4 mt-10">
        <p className="text-lg font-medium text-slate-700">Engagement</p>
        <div className="flex items-start gap-4">
          {/* Date Range */}
          <div className="flex flex-col min-w-[200px]">
            <span className="text-xs font-semibold text-slate-500 mb-1">
              Date Range
            </span>
            <DatePicker.RangePicker
              className="w-full"
              onChange={(values) => {
                if (!values || values.length === 0) {
                  setDateRange("All dates");
                  return;
                }
                const [start, end] = values;
                setDateRange(
                  `${dayjs(start).format("MMM DD, YYYY")} - ${dayjs(end).format(
                    "MMM DD, YYYY"
                  )}`
                );
              }}
            />
          </div>
          {/* Category */}
          <div className="flex flex-col min-w-[200px]">
            <span className="text-xs font-semibold text-slate-500 mb-1">
              Category
            </span>
            <Select
              value={category}
              onChange={setCategory}
              className="w-full"
              suffixIcon={
                <Icon icon="mdi:chevron-down" width="18" height="18" />
              }
            >
              <Select.Option value="All Categories">
                All Categories
              </Select.Option>
              {categoryOptions.map((opt) => (
                <Select.Option key={opt} value={opt}>
                  {opt}
                </Select.Option>
              ))}
            </Select>
          </div>
          {/* User Role */}
          <div className="flex flex-col min-w-[160px]">
            <span className="text-xs font-semibold text-slate-500 mb-1">
              User Role
            </span>
            <Select
              value={role}
              onChange={setRole}
              className="w-full"
              suffixIcon={
                <Icon icon="mdi:chevron-down" width="18" height="18" />
              }
            >
              <Select.Option value="User">user</Select.Option>
              <Select.Option value="Creator">creator</Select.Option>
              <Select.Option value="Admin">admin</Select.Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <ChartsRow
          perRow={2}
          itemHeight={300}
          charts={[
            <VotesAreaMiniLocal key="votes-mini-local" data={datasets.votes} />,
            <NewPollsBarMiniLocal
              key="newpolls-mini-local"
              data={datasets.polls}
            />,
            <FlagVolumeLineMiniLocal
              key="flag-mini-local"
              data={datasets.flags}
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default Analytics;
