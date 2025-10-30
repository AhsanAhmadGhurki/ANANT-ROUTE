import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Upload,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  Space,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EyeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
// import dayjs from "dayjs";

const { TextArea } = Input;
const { Option } = Select;

const NewPolls = () => {
  const [options, setOptions] = useState(["", "", ""]);
  const [releaseType, setReleaseType] = useState("time");

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index) =>
    setOptions(options.filter((_, i) => i !== index));

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <>
      <div className="mb-4">
        <p className="text-2xl font-medium">Create Poll</p>
        <p className="text-sm">Generate and share a poll!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left Side - Poll Form */}
        <div className="flex-1 space-y-6 text-gray-900">
          {/* Upload Poll Icon */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Upload Poll Icon
            </p>

            <Upload.Dragger
              multiple={false}
              accept=".png,.jpg,.jpeg"
              showUploadList={false}
              className=" rounded-lg transition-all"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <UploadOutlined className=" text-2xl" />
                <p className=" text-sm font-medium cursor-pointer hover:text-gray-500">
                  Drag your icon or
                  <span className="text-[#3C82F6] ms-1">browse</span>
                </p>
                <p className="text-gray-400 text-xs">
                  Supports: JPG, JPEG, PNG
                </p>
              </div>
            </Upload.Dragger>

            <Button
              className="mt-3 !bg-slate-200 !text-gray-700 text-sm rounded-md 
             hover:!bg-slate-300 hover:!text-gray-800 
             focus:!outline-none focus:!ring-0 
             active:!bg-slate-400 active:!text-gray-800 
             !border-0 !shadow-none"
            >
              Upload
            </Button>
          </div>
          {/* Poll Question */}
          <div>
            <p className="text-sm font-semibold mb-2">Poll Question</p>
            <Input
              placeholder="What would you like to ask your audience?"
              className="bg-transparent rounded-md"
            />
          </div>
          {/* Poll Options */}
          <div>
            <p className="text-sm font-semibold mb-2">Poll Options</p>
            <div className="flex flex-col gap-2">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        i === 0 ? "#7BE0AD" : i === 1 ? "#FFAF87" : "#8BD4F4",
                    }}
                  ></span>

                  <Input
                    value={opt}
                    onChange={(e) => handleOptionChange(e.target.value, i)}
                    placeholder={`Option ${i + 1}`}
                    className="bg-transparent rounded-md"
                  />
                  {options.length > 2 && (
                    <Button
                      type="text"
                      icon={
                        <DeleteOutlined className="text-gray-400 hover:text-gray-500" />
                      }
                      onClick={() => removeOption(i)}
                    />
                  )}
                </div>
              ))}
              <Button
                icon={<PlusOutlined />}
                type="dashed"
                className="w-fit mt-2 text-green-600 border-green-200 hover:border-gray-500 hover:text-gray-500"
                onClick={addOption}
              >
                Add Option
              </Button>
            </div>
          </div>
          {/* Category */}
          <div>
            <p className="text-sm font-semibold mb-2">Category</p>
            <Select
              placeholder="select a category"
              className="w-full bg-transparent rounded-md"
            >
              <Option value="technology">Technology</Option>
              <Option value="design">Design</Option>
              <Option value="politics">Politics</Option>
            </Select>
          </div>
          {/* Tags */}
          <div>
            <p className="text-sm font-semibold mb-2">Tags (Optional)</p>
            <div className="flex gap-2">
              <Input
                placeholder="Add a tag"
                className="bg-transparent rounded-md"
              />
              <Button
                type="text"
                className="text-gray-500 text-lg px-2 hover:text-gray-500"
              >
                +
              </Button>
            </div>
          </div>
          {/* Add Link */}
          <div>
            <p className="text-sm font-semibold mb-2">Add a link</p>
            <Input
              placeholder="Paste original source link here..."
              className="bg-transparent rounded-md"
            />
          </div>
          {/* Delay Results */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">Delay Results</p>
            <p className="text-xs text-gray-500">
              Choose a release time or a minimum vote threshold.
            </p>

            <Radio.Group
              onChange={(e) => setReleaseType(e.target.value)}
              value={releaseType}
              className="flex flex-col gap-3 w-full"
            >
              <div className="w-full mb-3">
                <Radio value="time" className="w-full">
                  <div className="border border-red-200 bg-red-50 rounded-md p-3 space-y-2 w-full hover:border-gray-500">
                    <p className="text-sm font-medium">
                      Release at a Specific Time
                    </p>
                    <p className="text-xs text-gray-500">
                      Results will be automatically unlocked at the scheduled
                      time.
                    </p>
                    <div className="flex gap-2 w-full">
                      <DatePicker
                        placeholder="mm/dd/yyyy"
                        className="flex-1 bg-white"
                      />
                      <TimePicker
                        placeholder="--:-- --"
                        className="flex-1 bg-white"
                      />
                    </div>
                  </div>
                </Radio>
              </div>

              <Radio value="votes" className="w-full">
                <div className="border border-gray-200 rounded-md p-3 space-y-2 w-full hover:border-gray-500">
                  <p className="text-sm font-medium">Release after N votes</p>
                  <p className="text-xs text-gray-500 !w-full">
                    Totals and breakdowns appear once at least N responses are
                    recorded.
                  </p>
                  <Input
                    placeholder="e.g., 100"
                    className="w-full bg-white rounded-md"
                  />
                </div>
              </Radio>
            </Radio.Group>
          </div>
          <div>
            <p className="text-xs text-gray-500">
              Delays prevent bandwagon effects and give us time to filter
              invalid responses.
            </p>
          </div>
          {/* Publish */}
          <div className="flex justify-end">
            {" "}
            <Button
              type="primary"
              className="!bg-[#FF5C4D] text-white px-6 py-2 rounded-md mt-4"
            >
              Publish Poll
            </Button>
          </div>{" "}
        </div>

        {/* Right Side - Preview */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-gray-700 text-base font-semibold mb-3">
            Live Preview
          </h3>

          <div className="bg-transparent border border-gray-200 rounded-lg p-20 flex items-center justify-center hover:border-gray-500 transition-all">
            <div className="flex flex-col items-center text-gray-400">
              <EyeOutlined className="text-2xl mb-2" />
              <p>Your poll will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPolls;
