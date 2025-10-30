import React from "react";
import StatCards from "../../../components/public_components/StatCards";
const CreatorApprovals = () => {
  return (
    <div>
      <div className="mb-7">
        <p className="text-2xl font-medium">Dashboard</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={3} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Pending Reviews",
            value: "1,247",
            status: "Applications awaiting review",
            icon: "fluent:clock-20-regular",
            iconColor: "text-[#D5332C]",
          },
          {
            title: "Approved",
            value: 89,
            status: "This month",
            icon: "mingcute:check-line",
            iconColor: "text-[#008000]",
          },
          {
            title: "Rejected",
            value: "1,248",
            status: "This month",
            icon: "bitcoin-icons:cross-filled",
            iconColor: "text-[#FF0000]",
          },
        ]}
      />
    </div>
  );
};

export default CreatorApprovals;
