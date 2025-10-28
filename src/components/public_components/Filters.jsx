import React from "react";

const COLORS = {
  strongSupport: "#8DFAC2",
  somewhatSupport: "#FDCFA3",
  unsure: "#9CCBFF",
  somewhatOppose: "#FFD66B",
  stronglyOppose: "#B1B2FF",
};

const LegendWithFilters = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-4 text-sm text-gray-500">
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
  );
};

export default LegendWithFilters;
