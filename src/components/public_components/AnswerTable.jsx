import React from "react";

// COLORS for the answer choices
const COLORS = {
  "Strongly support": "#8DFAC2",
  "Somewhat support": "#FDCFA3",
  "Mixed / unsure": "#9CCBFF",
  "Somewhat oppose": "#FFD66B",
  "Strongly oppose": "#B1B2FF",
};

const AnswerTable = ({ tableData }) => {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 sm:border sm:border-gray-200 sm:rounded-lg sm:shadow-md md:border-0 md:shadow-none md:rounded-none">
      <table className="w-full text-gray-700 min-w-[500px] md:min-w-full">
        <thead>
          <tr>
            <th className="px-2 py-2 md:px-4 text-start text-xs md:text-sm font-medium">
              Answer Choices
            </th>
            <th className="px-2 py-2 md:px-4 text-center text-xs md:text-sm font-medium">
              Share of vote
            </th>
            <th className="px-2 py-2 md:px-4 text-end text-xs md:text-sm font-medium">
              Total vote
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.choice} className="border-b border-gray-100">
              <td className="px-2 py-2 md:px-4 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
                {/* Colored circle */}
                <span
                  className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[row.choice] }}
                ></span>
                <span className="whitespace-nowrap">{row.choice}</span>
              </td>
              <td className="px-2 py-2 md:px-4 text-center text-xs md:text-sm whitespace-nowrap">
                {row.share}
              </td>
              <td className="px-2 py-2 md:px-4 text-end text-xs md:text-sm filter blur-[3px] whitespace-nowrap">
                Log in for totals
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnswerTable;
