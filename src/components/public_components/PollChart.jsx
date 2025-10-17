import { Icon } from "@iconify/react";

export default function PollChart({ flag, question, options, percentage }) {
  const dash = (percentage / 100) * 160; // Arc stroke length

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        {/* Left: Flag + Question */}
        <div className="flex items-start gap-3 pr-4 w-[75%]">
          {flag && (
            <div className="w-9 h-9 mt-1 shrink-0">
              <Icon icon={flag} className="w-full h-full rounded-lg" />
            </div>
          )}
          <h3 className="text-gray-800 font-medium text-[16px] leading-snug">
            {question}
          </h3>
        </div>

        {/* Right: Arc + Arrow */}
        <div className="flex items-center gap-3">
          {/* Half Progress Arc */}
          <div className="relative w-[90px] h-[50px] flex items-center justify-center">
            <svg
              width="90"
              height="50"
              viewBox="0 0 150 80"
              className="block -mt-[2px] scale-[1.02]"
            >
              <path
                d="M10 70 A60 60 0 0 1 130 70"
                stroke="#E5E7EB"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M10 70 A60 60 0 0 1 130 70"
                stroke="url(#blueGradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${dash} 160`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="blueGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>

            <span className="absolute bottom-[6px] text-gray-700 font-semibold text-[13px]">
              {percentage}%
            </span>
          </div>

          <button className="border border-gray-300 hover:border-gray-400 rounded-lg p-2 flex items-center justify-center transition-all hover:scale-105">
            <Icon
              icon="famicons:arrow-redo-outline"
              width="19"
              height="19"
              className="text-gray-700"
            />
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col space-y-2 mb-4">
        {options.map((opt, i) => (
          <button
            key={i}
            className="text-left border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 transition"
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Footer */}
      <button className="bg-[#446C94] hover:bg-[#345879] text-white w-full py-2.5 rounded-xl font-medium transition">
        View Details
      </button>
    </div>
  );
}
