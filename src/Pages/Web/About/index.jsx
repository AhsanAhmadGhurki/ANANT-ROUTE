import { useState } from "react";
import { Icon } from "@iconify/react";
import Headline from "../../../components/public_components/headline";
import InfoBadge from "../../../components/public_components/InfoBadge";
import PollChartList from "../../../components/public_components/PollChartList";
import BarChartComponent from "../../../components/public_components/BarChartComponent";
import LineChartComponent from "../../../components/public_components/LineChartComponent";
import LegendWithFilters from "../../../components/public_components/Filters";

export default function About() {
  const [activeFilter, setActiveFilter] = useState("Age");
  const filters = ["Age", "Gender", "Poli", "Authentication"];

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
            <div className="font-medium text-base">Featured Poll</div>
          </div>
          <Headline />
          <div className="mt-10">
            {/* Filters + Legend */}
            <LegendWithFilters
              filters={filters}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            {/* Charts */}
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/3">
                <BarChartComponent />
              </div>
              <div className="md:w-2/3">
                <LineChartComponent />
              </div>
            </div>
          </div>
        </div>

        {/* Info Badges Section */}
        <div className="grid md:grid-cols-3 gap-9 py-10">
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
