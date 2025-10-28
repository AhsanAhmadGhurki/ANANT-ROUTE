import React from "react";
// import PollChartList from "../../../components/public_components/PollChartList";
import PollChart from "../../../components/public_components/PollChart";

const SavedPolls = () => {
  const polls = [
    {
      flag: "twemoji:flag-india",
      question:
        "It is acceptable to end a personal relationship solely because of someone’s political party affiliation?",
      options: [
        "A) Strongly agree",
        "B) Somewhat agree",
        "D) Somewhat disagree",
        "E) Strongly disagree",
      ],
      percentage: 99,
    },
    {
      flag: "twemoji:flag-united-states",
      question:
        "Should schools have more freedom to design their own curriculum?",
      options: [
        "A) Yes, full control",
        "B) Partial control",
        "C) Minor flexibility",
        "D) No, follow national standards",
      ],
      percentage: 82,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2 mb-12">
        <p className="text-2xl font-medium">Saved Polls</p>
        <p className="text-sm">Polls you've bookmarked for later reference </p>
      </div>
      {/* import PollChart */}
      {/* <PollChartList /> */}
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {polls.map((poll, index) => (
          <PollChart key={index} {...poll} />
        ))}
      </div>
    </>
  );
};

export default SavedPolls;
