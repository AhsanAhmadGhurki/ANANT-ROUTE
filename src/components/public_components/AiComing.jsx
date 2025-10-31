import { Icon } from "@iconify/react";

export default function AiComing() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-[#FFF9E6] py-2 sm:py-3 px-3 sm:px-4 gap-2 sm:gap-3 cursor-pointer mt-4 sm:mt-6">
      <div className="w-[18px] h-[18px] sm:w-5 sm:h-5 shrink-0">
        <Icon
          icon="mdi:stars"
          width="100%"
          height="100%"
          className="text-[#FE6963]"
        />
      </div>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base">AI Summary Guy Coming Soon...</p>
    </div>
  );
}
