import React from "react";
import StatCards from "../../../components/public_components/StatCards";

const Categories = () => {
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
            title: "Total Categories & Tags",
            value: "6",
            status: "5 Visible",
            icon: "heroicons:folder-open",
            iconColor: "text-[#0263D1]",
          },
          {
            title: "Active Tags",
            value: 6,
            status: "2 inactive",
            icon: "fluent:tag-48-regular",
            iconColor: "text-[#39A400]",
          },
          {
            title: "Tag Usage",
            value: "334",
            status: "Total tag applications",
            icon: "material-symbols-light:data-usage",
            iconColor: "text-[#002DDF]",
          },
        ]}
      />
    </div>
  );
};

export default Categories;
