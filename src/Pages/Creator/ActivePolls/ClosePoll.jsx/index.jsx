import React, { useState } from "react";
import { Breadcrumb, Card, Radio, Checkbox, Button, DatePicker } from "antd";
import dayjs from "dayjs";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import StatCards from "../../../../components/public_components/StatCards";

const ClosePoll = ({
  status = "Live",
  category = "Technology",
  question = "What's your favorite programming language for 2024?",
  statCardsData = [
    {
      title: "Total Votes",
      value: "12,450",
      icon: "system-uicons:graph-bar",
      iconColor: "text-[#8B5CEF]",
    },
    {
      title: "Total Views",
      value: "45,230",
      icon: "bi:eye",
      iconColor: "text-[#38C6FF]",
    },
    {
      title: "Engagement",
      value: "27.5%",
      icon: "gravity-ui:persons",
      iconColor: "text-[#16A249]",
    },
    {
      title: "Active Duration",
      value: "3 days",
      icon: "cuida:calendar-outline",
      iconColor: "text-[#F59F0A]",
    },
  ],
}) => {
  const [closeMethod, setCloseMethod] = useState("immediately");
  const [understandChecked, setUnderstandChecked] = useState(true);
  const [reviewedChecked, setReviewedChecked] = useState(true);
  const [scheduledDate, setScheduledDate] = useState(null);
  const navigate = useNavigate();

  const handleClosePoll = () => {
    // Handle poll closing logic here
    console.log("Closing poll with method:", closeMethod);
    // Navigate back or show success message
    // navigate('/creator/ActivePolls');
  };

  const handleCancel = () => {
    navigate("/creator/ActivePolls");
  };

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb
        className="mb-1 text-sm"
        items={[{ title: "Dashboard" }, { title: "Close Poll" }]}
      />

      {/* Header Section */}
      <div className="mb-7">
        <h1 className="text-2xl font-medium text-gray-900">Close Poll</h1>
        <p className="text-gray-600 text-sm">
          End voting and finalize results for your poll
        </p>
      </div>

      {/* Poll Information Card */}
      <Card className="!mb-7 rounded-xl border border-gray-200">
        <div className="flex flex-col gap-6">
          {/* Status and Category */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium border border-red-100">
              <Icon
                icon="ic:baseline-circle"
                width="10"
                height="10"
                className="fill-current"
              />
              <span>{status}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
              <span>{category}</span>
            </div>
          </div>

          {/* Poll Question */}
          <h2 className="text-xl font-semibold text-gray-900">{question}</h2>

          {/* Metrics using StatCards */}
          <StatCards data={statCardsData} />
        </div>
      </Card>

      {/* Choose how to close Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Choose how to close
        </h3>
        <Radio.Group
          value={closeMethod}
          onChange={(e) => setCloseMethod(e.target.value)}
          className="w-full custom-radio"
        >
          <div className="w-full flex flex-col gap-4">
            <Radio
              value="immediately"
              className={`w-full !p-4 text-red-500 rounded-lg border-1 ${
                closeMethod === "immediately"
                  ? "border-[#FFD3D1] bg-[#FFF5F5]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="ml-2">
                <div className="font-medium text-gray-900">
                  Close Immediately
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Stop accepting votes right now and finalize results instantly.
                </div>
              </div>
            </Radio>
            <Radio
              value="schedule"
              className={`w-full !p-4 rounded-lg border-1 ${
                closeMethod === "schedule"
                  ? "border-[#FFD3D1] bg-[#FFF5F5]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="ml-2 w-full">
                <div className="font-medium text-gray-900">
                  Schedule Close Time
                </div>
                <div className="text-sm text-gray-600 mt-1 mb-3">
                  Set a specific date and time when the poll should
                  automatically close.
                </div>
                {closeMethod === "schedule" && (
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm"
                    value={scheduledDate}
                    onChange={(date) => setScheduledDate(date)}
                    placeholder="Select date and time"
                    disabledDate={(current) =>
                      current && current < dayjs().startOf("day")
                    }
                    className="w-full"
                    size="large"
                  />
                )}
              </div>
            </Radio>
          </div>
        </Radio.Group>
      </div>

      {/* Please confirm you understand Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Please confirm you understand
        </h3>
        <div className="w-full custom-checkbox flex flex-col gap-2">
          <Checkbox
            checked={understandChecked}
            onChange={(e) => setUnderstandChecked(e.target.checked)}
            className="text-gray-700"
          >
            I understand that closing will stop all new votes
          </Checkbox>
          <Checkbox
            checked={reviewedChecked}
            onChange={(e) => setReviewedChecked(e.target.checked)}
            className="text-gray-700"
          >
            I have reviewed the current results and vote count
          </Checkbox>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <Button
          size="large"
          onClick={handleCancel}
          className="px-6 h-10 text-black !border-none !shadow-none !bg-slate-100 hover:!bg-gray-400 hover:!text-white focus:!shadow-none focus:!outline-none active:!bg-gray-800 transition-colors duration-200"
        >
          Cancel
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={handleClosePoll}
          disabled={
            !understandChecked ||
            !reviewedChecked ||
            (closeMethod === "schedule" && !scheduledDate)
          }
          className="px-6 h-10 bg-[#FE6963] text-white border-none rounded-lg hover:bg-[#e55a54] disabled:opacity-50 disabled:cursor-not-allowed custom-button-primary"
        >
          Close Poll
        </Button>
      </div>
    </div>
  );
};

export default ClosePoll;
