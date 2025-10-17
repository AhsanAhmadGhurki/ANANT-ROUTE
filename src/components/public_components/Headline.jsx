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
    <div className="flex items-start justify-between w-full">
      {/* Left: Flag + Question */}
      <div className="flex items-start gap-4 w-[75%]">
        {/* Use a scalable vector flag instead of emoji for better sizing */}
        <Icon
          icon="emojione-v1:flag-for-flag-united-states"
          width="52"
          height="52"
          className="shrink-0"
        />
        <p className="text-2xl leading-snug text-gray-800">
          Do you support the Supreme Court’s move allowing immigration agents in
          L.A. to consider language, location, job type, and apparent
          race/ethnicity when making brief immigration stops?
        </p>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-start justify-end gap-3 w-[25%]">
        {/* View Source */}
        <button
          className="flex items-center bg-[#EBF1FE] text-[#1452F0] text-sm px-[14px] py-[10px] gap-1 rounded-lg font-medium hover:bg-[#ffe6e2] transition"
          onClick={showModal}
        >
          <Icon icon="mage:link" width="20" height="20" />
          View Source
        </button>

        {/* Arrow */}
        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition">
          <Icon icon="famicons:arrow-redo-outline" width="20" height="20" />
        </button>

        {/* Tag */}
        <button className="flex items-center justify-center p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition">
          <Icon icon="ep:collection-tag" width="20" height="20" />
        </button>
      </div>

      <Modal
        centered
        title={
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-semibold">Share Poll</h2>

            {/* View Source button (left of close icon) */}
            <div
              className="flex items-center text-[#FE6963] text-sm px-[14px] gap-1 mr-4 cursor-pointer"
              onClick={showModal}
            >
              <Icon icon="mage:link" width="18" height="18" />
              View Source
            </div>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        // custom close icon — styled using Tailwind only
        closeIcon={
          <span className="text-[38px] text-gray-600 bg-white ">×</span>
        }
      >
        {/* Modal content */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-xl font-medium">Scan QR code</p>
            <p className="text-sm">Scan this code to get the poll.</p>
          </div>
          <div className="flex w-[200px] h-[200px]">
            <img src="/images/qrcode.png" alt="QR Code" />
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-gray-500 text-sm whitespace-nowrap">
              or share this link via
            </p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center p-3 rounded-full bg-gray-200">
              <Icon icon="hugeicons:facebook-02" width="24" height="24" />
            </div>
            <div className="flex items-center p-3 rounded-full bg-gray-200">
              <Icon icon="proicons:x-twitter" width="24" height="24" />{" "}
            </div>
            <div className="flex items-center p-3 rounded-full bg-gray-200">
              <Icon icon="basil:youtube-outline" width="24" height="24" />{" "}
            </div>
            <div className="flex items-center p-3 rounded-full bg-gray-200">
              <Icon icon="basil:instagram-outline" width="24" height="24" />{" "}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
