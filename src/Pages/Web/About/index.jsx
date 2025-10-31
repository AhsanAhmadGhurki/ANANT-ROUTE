import { useState } from "react";
import { Icon } from "@iconify/react";
import Headline from "../../../components/public_components/Headline";
import InfoBadge from "../../../components/public_components/InfoBadge";
import PollChartList from "../../../components/public_components/PollChartList";
import BarChartComponent from "../../../components/public_components/BarChartComponent";
import LineChartComponent from "../../../components/public_components/LineChartComponent";
import LegendWithFilters from "../../../components/public_components/Filters";

export default function About() {
  const [activeFilter, setActiveFilter] = useState("Age");
  const filters = ["Age", "Gender", "Politics", "Authentication"];

  return (
    <div className="hide-scrollbar overflow-auto w-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
        <div className="p-4 sm:p-5 md:p-6 shadow-md rounded-xl sm:rounded-2xl bg-white border border-gray-200 flex flex-col">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div>
              <Icon
                icon="fluent-color:checkmark-circle-32"
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
              />
            </div>
            <div className="font-medium text-sm sm:text-base">Featured Poll</div>
          </div>
          <Headline />
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            {/* Filters + Legend */}
            <LegendWithFilters
              filters={filters}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            {/* Charts */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row mt-4 sm:mt-6">
              <div className="w-full lg:w-1/3 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <BarChartComponent />
              </div>
              <div className="w-full lg:w-2/3 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <LineChartComponent />
              </div>
            </div>
          </div>
        </div>

        {/* Info Badges Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-9 py-6 sm:py-8 md:py-10">
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

        {/* Poll Chart List */}
        <PollChartList />

        {/* loading... */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-4 sm:py-6">
          <Icon
            icon="uiw:reload"
            width="20"
            height="20"
            className="sm:w-6 sm:h-6 text-[#FE6963]"
          />
          <p className="text-sm sm:text-base">Loading more...</p>
        </div>
        </div>
      </div>
    </div>
  );
}
