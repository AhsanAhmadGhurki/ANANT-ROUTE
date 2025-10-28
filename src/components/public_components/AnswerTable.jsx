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
    <div className="overflow-auto">
      <table className="w-full text-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 text-start">Answer Choices</th>
            <th className="px-4 py-2 text-center">Share of vote</th>
            <th className="px-4 py-2 text-end">Total vote</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.choice}>
              <td className="px-4 py-2 flex items-center gap-2">
                {/* Colored circle */}
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[row.choice] }}
                ></span>
                {row.choice}
              </td>
              <td className="px-4 py-2 text-center">{row.share}</td>
              <td className="px-4 py-2 text-end filter blur-[3px]">
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
