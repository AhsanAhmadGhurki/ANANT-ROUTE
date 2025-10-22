import React from "react";
import PollChartList from "../../../components/public_components/PollChartList";

const SavedPolls = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mb-12">
        <p className="text-2xl font-medium">Saved Polls</p>
        <p className="text-sm">Polls you've bookmarked for later reference </p>
      </div>
      {/* import PollChart */}
      <PollChartList />
    </>
  );
};

export default SavedPolls;
