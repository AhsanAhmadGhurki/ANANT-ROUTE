import React from "react";
import StatCards from "../../../components/public_components/StatCards";

const index = () => {
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
            icon: "mage:users",
            iconColor: "text-[#8B5CEF]",
          },
          {
            title: "Active Polls",
            value: 89,
            change: "-3% vs last month",
            icon: "tabler:user-check",
            iconColor: "text-[#15CACB]",
          },
          {
            title: "Votes (24h)",
            value: "1,248",
            change: "-15% vs last week",
            icon: "solar:users-group-two-rounded-linear",
            iconColor: "text-[#2C6FFF]",
          },
          {
            title: "Flagged",
            value: 7,
            change: "+5% vs last week",
            icon: "mingcute:user-x-line",
            iconColor: "text-[#FF3B3B]",
          },
          {
            title: "Pending Approvals",
            value: 23,
            change: "+5% vs last week",
            icon: "mingcute:user-add-2-line",
            iconColor: "text-[#00BC7D]",
          },
        ]}
      />
    </div>
  );
};

export default index;
