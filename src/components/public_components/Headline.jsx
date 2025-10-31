import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function Headline() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4 md:gap-0">
      {/* Left: Flag + Question */}
      <div className="flex items-start gap-2 md:gap-4 w-full md:w-[75%]">
        {/* Use a scalable vector flag instead of emoji for better sizing */}
        <div className="shrink-0 w-10 h-10 md:w-[52px] md:h-[52px]">
          <Icon
            icon="emojione-v1:flag-for-flag-united-states"
            width="100%"
            height="100%"
          />
        </div>
        <p className="text-base md:text-lg lg:text-2xl leading-snug text-gray-800">
          Do you support the Supreme Court's move allowing immigration agents in
          L.A. to consider language, location, job type, and apparent
          race/ethnicity when making brief immigration stops?
        </p>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center justify-start md:justify-end gap-2 md:gap-3 w-full md:w-[25%] flex-wrap md:flex-nowrap">
        {/* View Source */}
        <button
          className="flex items-center bg-[#EBF1FE] text-[#1452F0] text-xs md:text-sm px-2 md:px-[14px] py-2 md:py-[10px] gap-1 rounded-lg font-medium hover:bg-[#ffe6e2] transition"
          onClick={showModal}
        >
          <div className="w-4 h-4 md:w-5 md:h-5">
            <Icon icon="mage:link" width="100%" height="100%" />
          </div>
          <span className="hidden sm:inline">View Source</span>
          <span className="sm:hidden">View</span>
        </button>

        {/* Arrow */}
        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition">
          <div className="w-4 h-4 md:w-5 md:h-5">
            <Icon icon="famicons:arrow-redo-outline" width="100%" height="100%" />
          </div>
        </button>

        {/* Tag */}
        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition">
          <div className="w-4 h-4 md:w-5 md:h-5">
            <Icon icon="ep:collection-tag" width="100%" height="100%" />
          </div>
        </button>
      </div>

      <Modal
        centered
        title={
          <div className="flex items-center justify-between w-full">
            <h2 className="text-base md:text-lg font-semibold">Share Poll</h2>

            {/* View Source button (left of close icon) */}
            <div
              className="flex items-center text-[#FE6963] text-xs md:text-sm px-2 md:px-[14px] gap-1 mr-2 md:mr-4 cursor-pointer"
              onClick={showModal}
            >
              <div className="w-4 h-4 md:w-[18px] md:h-[18px]">
                <Icon icon="mage:link" width="100%" height="100%" />
              </div>
              <span className="hidden sm:inline">View Source</span>
            </div>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="90%"
        className="max-w-md"
        // custom close icon — styled using Tailwind only
        closeIcon={
          <span className="text-2xl md:text-[38px] text-gray-600 bg-white">×</span>
        }
      >
        {/* Modal content */}
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 px-2 md:px-0">
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-xl font-medium">Scan QR code</p>
            <p className="text-xs md:text-sm text-center">Scan this code to get the poll.</p>
          </div>
          <div className="flex w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <img src="/images/qrcode.png" alt="QR Code" className="w-full h-full object-contain" />
          </div>
          <div className="w-full flex items-center justify-center gap-2 md:gap-3">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-gray-500 text-xs md:text-sm whitespace-nowrap">
              or share this link via
            </p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <div className="flex gap-2 md:gap-3">
            <div className="flex items-center p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Icon icon="hugeicons:facebook-02" width="100%" height="100%" />
              </div>
            </div>
            <div className="flex items-center p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Icon icon="proicons:x-twitter" width="100%" height="100%" />
              </div>
            </div>
            <div className="flex items-center p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Icon icon="basil:youtube-outline" width="100%" height="100%" />
              </div>
            </div>
            <div className="flex items-center p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Icon icon="basil:instagram-outline" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
