import React from "react";
import StatCards from "../../../components/public_components/StatCards";

const PollManagement = () => {
  return (
    <div>
      <div className="mb-7">
        <p className="text-2xl font-medium">Dashboard</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={5} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Total Polls",
            value: "1,247",
            change: "+12% vs last month",
            icon: "system-uicons:graph-bar",
            iconColor: "text-[#8B5CEF]",
          },
          {
            title: "Live Polls",
            value: 89,
            change: "-3% vs last month",
            icon: "heroicons:signal-solid",
            iconColor: "text-[#EE4D4D]",
          },
          {
            title: "Draft",
            value: "1,248",
            change: "+8% vs yesterday",
            icon: "hugeicons:note-03",
            iconColor: "text-[#7C7C7C]",
          },
          {
            title: "Closed",
            value: 7,
            change: "-15% vs last week",
            icon: "bitcoin-icons:cross-filled",
            iconColor: "text-[#F44336]",
          },
          {
            title: "Flagged",
            value: 23,
            change: "+5% vs last week",
            icon: "famicons:flag-outline",
            iconColor: "text-[#FB2C36]",
          },
        ]}
      />
    </div>
  );
};

export default PollManagement;
