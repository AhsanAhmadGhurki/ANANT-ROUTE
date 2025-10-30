import React from "react";
import StatCards from "../../../components/public_components/StatCards";

const Analytics = () => {
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
    </div>
  );
};

export default Analytics;
