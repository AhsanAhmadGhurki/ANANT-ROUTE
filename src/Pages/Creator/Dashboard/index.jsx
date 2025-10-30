import { Icon } from "@iconify/react";
import React from "react";
import StatCards from "../../../components/public_components/StatCards";
import PollCard from "../../../components/public_components/PollCard";
import VotesOverTimeChart from "../../../components/public_components/VotesOverTimeChart";

const Dashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between mb-12">
        <div className="flex flex-col">
          <p className="text-2xl font-medium">Creator Dashboard</p>
          <p className="text-sm">
            Monitor your polls and engage with your audience
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 bg-[#FE6963] text-white px-5 py-3 rounded-lg">
          <Icon icon="line-md:plus" width="24" height="24" />
          <p className="text-base font-medium">Create New Poll</p>
        </div>
      </div>

      {/* Stat Cards Inline Data */}
      <StatCards
        data={[
          {
            title: "Total Polls",
            value: 12,
            change: "+45% from last month",
            icon: "system-uicons:graph-bar",
            iconColor: "text-[#8B5CEF]",
          },
          {
            title: "Active Polls",
            value: 8,
            status: "Currently collecting votes",
            icon: "cuida:calendar-outline",
            iconColor: "text-[#38C6FF]",
          },
          {
            title: "Completed Polls",
            value: 5,
            change: "+12% from last month",
            icon: "mage:users",
            iconColor: "text-[#16A249]",
          },
          {
            title: "Participants",
            value: 320,
            status: "Currently collecting votes",
            icon: "bi:eye",
            iconColor: "text-[#F59F0A]",
          },
        ]}
        cardsPerRow={4}
      />

      {/* Votes Over Time Chart */}
      <div className="mb-12">
        <VotesOverTimeChart />
      </div>

      {/* Poll List Section */}
      <div className="flex items-center justify-between mt-14 mb-4">
        <p className="">All Polls</p>
        <button className="border border-[#FE6963] text-[#FE6963] px-4 py-1 rounded-4xl">
          View all
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <PollCard
          status="Live"
          category="Technology"
          question="Which UI tool do you prefer in 2025?"
          votes={912}
          date="10th Oct"
        />
        <PollCard
          status="Closed"
          category="Design"
          question="What's your go-to design software this year?"
          votes={291}
          date="15th Oct"
        />
        <PollCard
          status="Closed"
          category="Education"
          question="Which online platform helped you learn the most in 2025?"
          votes={870}
          date="22th Oct"
        />
        <PollCard
          status="Live"
          category="AI"
          question="Do you trust AI tools for creative work?"
          votes={1054}
          date="25th Oct"
        />
        <PollCard
          status="Closed"
          category="Development"
          question="What’s your favorite JavaScript framework of 2025?"
          votes={742}
          date="27th Oct"
        />
      </div>
    </div>
  );
};

export default Dashboard;
