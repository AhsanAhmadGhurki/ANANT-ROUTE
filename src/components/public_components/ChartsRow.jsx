import React from "react";

/*
  Reusable row of chart cards.
  - charts: array of React nodes to render inside cards
  - perRow: number of cards per row (controls columns)
  - itemHeight: fixed height for each card container (string or number)
  - gap: tailwind gap size (e.g., "4", "6")
*/

const ChartsRow = ({ charts = [], perRow = 3, itemHeight = 220, gap = "6" }) => {
  const gridTemplateColumns = `repeat(${perRow}, minmax(0, 1fr))`;
  const heightStyle = typeof itemHeight === "number" ? `${itemHeight}px` : itemHeight;

  return (
    <div
      className={`grid gap-${gap}`}
      style={{ gridTemplateColumns }}
    >
      {charts.map((ChartEl, idx) => (
        <div
          key={idx}
          className="w-full rounded-xl border border-slate-200 bg-white shadow-sm"
          style={{ height: heightStyle }}
        >
          <div className="w-full h-full p-2">
            {ChartEl}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartsRow;


