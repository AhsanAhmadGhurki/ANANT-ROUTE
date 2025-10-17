import { Icon } from "@iconify/react";

export default function AiComing() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-[#FFF9E6] py-3 gap-3 cursor-pointer mt-6">
      <Icon
        icon="mdi:stars"
        width="20"
        height="20"
        className="text-[#FE6963]"
      />
      <p className="text-gray-700">AI Summary Guy Coming Soon...</p>
    </div>
  );
}
