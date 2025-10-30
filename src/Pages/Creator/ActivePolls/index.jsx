import React from "react";
import { Icon } from "@iconify/react";
import PollCard from "../../../components/public_components/PollCard";

const ActivePolls = () => {
  return (
    <div>
      <div className="text-lg mb-4">All Active Polls</div>

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

export default ActivePolls;
