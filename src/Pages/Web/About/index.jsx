// import { useState } from "react";
import { Icon } from "@iconify/react";
import Headline from "../../../components/public_components/headline";
import InfoBadge from "../../../components/public_components/InfoBadge";
import PollChartList from "../../../components/public_components/PollChartList";

export default function About() {
  // const [timeRange, setTimeRange] = useState("week");
  // const currentData = pollData[timeRange];

  return (
    <div className="hide-scrollbar overflow-auto">
      <div className="space-y-10 ">
        <div className="p-5 shadow-md rounded-2xl bg-white border border-gray-200 flex flex-col  ">
          <div className="flex items-center gap-2 mb-4">
            <div>
              <Icon
                icon="fluent-color:checkmark-circle-32"
                width="24"
                height="24"
              />
            </div>
            <div className="font-medium text-base">Featured Poll</div>{" "}
          </div>
          <Headline />
          <div className="w-full h-auto mt-6">
            <img src="/images/chart.png" alt="" />{" "}
          </div>
        </div>

        {/* Info Badges Section */}
        <div className="grid md:grid-cols-3 gap-9">
          <InfoBadge
            title="Opinion polling as a civic tool"
            desc="Empowering an informed populace to find common ground."
            icon={
              <Icon icon="streamline-sharp:wrench" width="24" height="24" />
            }
          />
          <InfoBadge
            title="Security-first architecture with transparent policies"
            desc="Encrypted accounts, aggregated results. Never sold, never exploited."
            icon={<Icon icon="ep:lock" width="24" height="24" />}
          />
          <InfoBadge
            title="Cut through outrage cycles"
            desc="Measure actual consensus behind trending clips, creators, and headlines."
            icon={
              <Icon icon="mdi:lightbulb-on-outline" width="24" height="24" />
            }
          />
        </div>

        {/* import PollChart */}
        <PollChartList />

        {/* loading... */}
        <div className="flex items-center justify-center gap-3">
          <Icon
            icon="uiw:reload"
            width="24"
            height="24"
            className="text-[#FE6963]"
          />{" "}
          <p>Loading more...</p>
        </div>
      </div>
    </div>
  );
}
