import React from 'react'
import StatCards from "../../../components/public_components/StatCards";

const Moderation = () => {
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
            title: "Total Reports",
            value: "1,247",
            change: "+12% vs last month",
            icon: "famicons:flag-outline",
            iconColor: "text-[#FB2C36]",
          },
          {
            title: "Open Reports",
            value: 89,
            change: "-3% vs last month",
            icon: "icon-park-outline:caution",
            iconColor: "text-[#FFB400]",
          },
          {
            title: "Avg Resolution Time",
            value: "1,128",
            change: "-15% vs last week",
            icon: "fluent:clock-20-regular",
            iconColor: "text-[#D5332C]",
          },
          {
            title: "Resolved Today",
            value: 7,
            change: "+5% vs last week",
            icon: "cuida:calendar-outline",
            iconColor: "text-[#F89000]",
          }
        ]}
      />
    </div>
  )
}

export default Moderation