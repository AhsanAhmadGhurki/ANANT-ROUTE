import React, { useState, useRef, useEffect } from "react";
import Headline from "../../../../components/public_components/headline";
import AiComing from "../../../../components/public_components/AiComing";

// iconify
import { Icon } from "@iconify/react";

export default function Swag() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(102); // Set initial countdown (1:42 = 102 seconds)
  const modalRef = useRef(null);

  // Show modal function
  const showModal = () => setIsModalOpen(true);

  // Close modal function
  // const handleClose = () => setIsModalOpen(false);

  // Close modal if click is outside modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  // Countdown timer logic
  useEffect(() => {
    let timer;
    if (timeLeft > 0 && isModalOpen) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft, isModalOpen]);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="relative">
      <Headline />

      {/* Section with background image */}
      <div className="relative w-full h-[65vh] bg-[url('/images/chart_workshop.png')] bg-cover bg-center cursor-pointer">
        <div className="absolute inset-0" onClick={showModal}></div>

        {/* Section blur + modal */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xs flex items-center justify-center z-10">
            <div
              ref={modalRef}
              className="bg-white p-5 shadow-lg w-[80%] max-w-lg z-20 rounded-xl"
            >
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-[#FE6963]">
                  <Icon icon="bi:clock" width="42" height="42" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[20px]">Results unlock in</div>
                  <div className="text-[48px]">
                    <span>{String(minutes).padStart(2, "0")}</span>:
                    <span>{String(seconds).padStart(2, "0")}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center justify-center bg-[#EBF1FE] text-[#1452F0] py-2 px-3 rounded-lg gap-2">
                    <div>
                      <Icon icon="iwwa:information" width="16" height="16" />
                    </div>
                    <div>Why delayed?</div>
                  </div>
                  <div className="flex items-center justify-center bg-[#EBF1FE] text-[#1452F0] py-2 px-3 rounded-lg gap-2">
                    <div>
                      <Icon
                        icon="streamline-plump:ringing-bell-notification"
                        width="16"
                        height="16"
                      />{" "}
                    </div>
                    <div>Notify me</div>
                  </div>
                  <div className="flex items-center justify-center bg-[#EBF1FE] text-[#1452F0] py-2 px-3 rounded-lg gap-2">
                    <div>
                      <Icon
                        icon="famicons:arrow-redo-outline"
                        width="16"
                        height="16"
                      />
                    </div>
                    <div>Share poll</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <AiComing />
    </div>
  );
}
