import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const PollCard = ({
  status = "Live",
  category = "Technology",
  question = "What's your favorite programming language for 2024?",
  votes = 324,
  date = "14th Sep",
}) => {
  const navigate = useNavigate();

  const handleClosePoll = () => {
    navigate("/creator/ActivePolls/ClosePoll");
  };

  return (
    <div className="border border-gray-300 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-sm transition">
      {/* Live badges row */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center text-red-500 gap-2 bg-red-100 px-4 py-1 rounded-full text-sm font-medium">
          <Icon icon="ic:baseline-circle" width="10" height="10" />
          <p>{status}</p>
        </div>

        <div className="flex items-center text-slate-700 gap-2 bg-slate-100 px-4 py-1 rounded-full text-sm font-medium">
          <p>{category}</p>
        </div>
      </div>

      {/* Poll question + actions */}
      <div className="flex items-center justify-between">
        <div className="text-[#272827] font-medium text-center">{question}</div>

        <div className="flex gap-2">
          <div className="flex justify-center items-center p-1.5 border border-gray-300 rounded-md">
            <Icon icon="famicons:arrow-redo-outline" width="20" height="20" />
          </div>
          <div className="flex justify-center items-center p-1.5 border border-gray-300 rounded-md">
            <Icon icon="bi:eye" width="20" height="20" />
          </div>
          <div className="flex justify-center items-center p-1.5 border border-gray-300 rounded-md">
            <Icon icon="uil:edit" width="20" height="20" />
          </div>
          <button
            onClick={handleClosePoll}
            className="flex justify-center items-center p-1.5 border border-gray-300 rounded-md text-red-500 hover:bg-red-50 cursor-pointer transition"
          >
            <Icon icon="si:bin-duotone" width="20" height="20" />
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-6 text-gray-400 text-sm">
        <div className="flex items-center gap-1">
          <Icon icon="gravity-ui:persons" width="16" height="16" />
          <p>{votes} votes</p>
        </div>
        <div className="flex items-center gap-1">
          <Icon icon="cuida:calendar-outline" width="16" height="16" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
