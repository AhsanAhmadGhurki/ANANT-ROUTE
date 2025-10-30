import React from "react";
import { Icon } from "@iconify/react";

const StatCards = ({ data = [], cardsPerRow = 4 }) => {
  return (
    <div
      className="grid gap-4 sm:gap-5"
      style={{
        gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))`,
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border border-slate-200 text-slate-600 p-4 rounded-xl bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">{item.title}</div>
            <Icon
              className={item.iconColor || "text-[#8B5CEF]"}
              icon={item.icon}
              width="20"
              height="20"
            />
          </div>

          {/* Value */}
          <div className="text-2xl font-semibold text-black mb-0.5">{item.value}</div>

          {/* Footer */}
          {item.change ? (
            <div
              className={`flex items-center gap-1 ${
                String(item.change).trim().startsWith("-")
                  ? "text-red-600"
                  : "text-emerald-600"
              }`}
            >
              <Icon
                icon={
                  String(item.change).trim().startsWith("-")
                    ? "bi:graph-down-arrow"
                    : "bi:graph-up-arrow"
                }
                width="16"
                height="16"
              />
              <p className="text-sm">{item.change}</p>
            </div>
          ) : (
            <div className="flex items-center text-slate-500">
              <p className="text-sm">{item.status}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatCards;
