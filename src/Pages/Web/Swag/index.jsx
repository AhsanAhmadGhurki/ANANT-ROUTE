import React, { useState, useRef, useEffect } from "react";
import Headline from "../../../components/public_components/headline";
import AiComing from "../../../components/public_components/AiComing";
import { Icon } from "@iconify/react";

export default function Swag() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(102);
  const modalRef = useRef(null);

  // Only enable modal logic on large screens
  const isLargeScreen = window.innerWidth >= 1024;

  const showModal = () => {
    if (isLargeScreen) setIsModalOpen(true);
  };

  // Close modal if clicked outside
  useEffect(() => {
    if (!isLargeScreen) return;

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
  }, [isModalOpen, isLargeScreen]);

  // Countdown timer
  useEffect(() => {
    if (!isLargeScreen) return;

    let timer;
    if (timeLeft > 0 && isModalOpen) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isModalOpen, isLargeScreen]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8">
      <Headline />

      {/* ✅ Only visible on lg and above */}
      <div className="hidden lg:block relative w-full h-[65vh] bg-[url('/images/chart_workshop.png')] bg-cover bg-center cursor-pointer">
        <div className="absolute inset-0" onClick={showModal}></div>

        {/* Modal */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xs flex items-center justify-center z-10">
            <div
              ref={modalRef}
              className="bg-white p-6 shadow-lg w-[70%] max-w-lg rounded-xl z-20"
            >
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-[#FE6963] w-10 h-10">
                  <Icon icon="bi:clock" width="100%" height="100%" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-lg">Results unlock in</div>
                  <div className="text-5xl font-semibold">
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap justify-center">
                  {[
                    { icon: "iwwa:information", text: "Why delayed?" },
                    {
                      icon: "streamline-plump:ringing-bell-notification",
                      text: "Notify me",
                    },
                    { icon: "famicons:arrow-redo-outline", text: "Share poll" },
                  ].map((btn, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center bg-[#EBF1FE] text-[#1452F0] py-2 px-3 rounded-lg gap-2 text-sm"
                    >
                      <Icon icon={btn.icon} width="16" height="16" />
                      <div>{btn.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Other section always visible */}
      <AiComing />
    </div>
  );
}
