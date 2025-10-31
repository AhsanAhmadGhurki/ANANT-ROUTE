import { Icon } from "@iconify/react";

export default function InfoBadge({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
      {/* Icon wrapper */}
      <div className="bg-[#FFF3F3] text-[#FE6963] p-2 sm:p-2.5 md:p-3 rounded-lg flex items-center justify-center shrink-0">
        {typeof icon === "string" ? (
          <Icon icon={icon} className="text-xl sm:text-2xl" />
        ) : (
          icon
        )}
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium mb-0.5 sm:mb-1 text-black text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
