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
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-6">
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-500">
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: COLORS.strongSupport }}
          ></span>
          <span className="whitespace-nowrap">Strongly support</span>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: COLORS.somewhatSupport }}
          ></span>
          <span className="whitespace-nowrap">Somewhat support</span>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: COLORS.unsure }}
          ></span>
          <span className="whitespace-nowrap">Mixed / unsure</span>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: COLORS.somewhatOppose }}
          ></span>
          <span className="whitespace-nowrap">Somewhat oppose</span>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: COLORS.stronglyOppose }}
          ></span>
          <span className="whitespace-nowrap">Strongly oppose</span>
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium transition-all ${
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
