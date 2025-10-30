import React from "react";
import StatCards from "../../../components/public_components/StatCards";

const AdminDashboard = () => {
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
            title: "Active Polls",
            value: 89,
            change: "-3% vs last month",
            icon: "simple-line-icons:energy",
            iconColor: "text-[#FFA527]",
          },
          {
            title: "Votes (24h)",
            value: "1,248",
            change: "+8% vs yesterday",
            icon: "formkit:down",
            iconColor: "text-[#002DDF]",
          },
          {
            title: "Flagged",
            value: 7,
            change: "-15% vs last week",
            icon: "famicons:flag-outline",
            iconColor: "text-[#FB2C36]",
          },
          {
            title: "Pending Approvals",
            value: 23,
            change: "+5% vs last week",
            icon: "hugeicons:clock-05",
            iconColor: "text-[#4245FF]",
          },
        ]}
      />
    </div>
  );
};

export default AdminDashboard;
