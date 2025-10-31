import { Icon } from "@iconify/react";

export default function PollChart({ flag, question, options, percentage }) {
  const dash = (percentage / 100) * 160; // Arc stroke length

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 mb-4 sm:mb-5">
        {/* Left: Flag + Question */}
        <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-4 w-full sm:w-[75%]">
          {flag && (
            <div className="w-7 h-7 sm:w-9 sm:h-9 mt-1 shrink-0">
              <Icon icon={flag} className="w-full h-full rounded-lg" />
            </div>
          )}
          <h3 className="text-gray-800 font-medium text-sm sm:text-[16px] leading-snug">
            {question}
          </h3>
        </div>

        {/* Right: Arc + Arrow */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Half Progress Arc */}
          <div className="relative w-[80px] sm:w-[90px] h-[45px] sm:h-[50px] flex items-center justify-center shrink-0">
            <svg
              width="90"
              height="50"
              viewBox="0 0 150 80"
              className="block -mt-[2px] scale-[0.9] sm:scale-[1.02] w-full h-full"
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

            <span className="absolute bottom-[6px] text-gray-700 font-semibold text-xs sm:text-[13px]">
              {percentage}%
            </span>
          </div>

          <button className="border border-gray-300 hover:border-gray-400 rounded-lg p-1.5 sm:p-2 flex items-center justify-center transition-all hover:scale-105 shrink-0">
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
            className="text-left border border-gray-200 rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base hover:bg-gray-50 transition"
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Footer */}
      <button className="bg-[#446C94] hover:bg-[#345879] text-white w-full py-2 sm:py-2.5 rounded-xl font-medium text-sm sm:text-base transition">
        View Details
      </button>
    </div>
  );
}
