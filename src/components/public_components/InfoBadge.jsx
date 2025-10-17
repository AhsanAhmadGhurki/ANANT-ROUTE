import { Icon } from "@iconify/react";

export default function InfoBadge({ icon, title, desc }) {
  return (
    <div className="flex items-start ">
      {/* Icon wrapper */}
      <div className="bg-[#FFF3F3] text-[#FE6963] p-3 rounded-lg flex items-center justify-center mr-4 shrink-0">
        {typeof icon === "string" ? (
          <Icon icon={icon} className="text-2xl" />
        ) : (
          icon
        )}
      </div>

      {/* Text content */}
      <div>
        <h3 className="font-medium mb-1 text-black text-base">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
