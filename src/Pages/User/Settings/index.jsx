import React from "react";
import { Switch, Button } from "antd";

const Settings = () => {
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-12">
        <p className="text-2xl font-medium">Settings</p>
        <p className="text-sm text-gray-500">
          Manage your account preferences and privacy settings
        </p>
      </div>

      {/* Notification Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Notification
        </h2>

        {/* Email Notifications */}
        <div className="flex items-start justify-between py-3">
          <div className="max-w-md">
            <h3 className="text-base font-medium text-gray-800">
              Email Notifications
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              Receive email updates about new polls and results
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        {/* Poll Reminders */}
        <div className="flex items-start justify-between py-3">
          <div className="max-w-md">
            <h3 className="text-base font-medium text-gray-800">
              Poll Reminders
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              Get alerts when saved polls with delayed results go live.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        {/* Delete Account */}
        <div className="flex justify-end mt-10">
          <Button
            type="default"
            className="
      !bg-[#FFC2C5]
      !text-[#B42318]
      !border-none
      !font-medium
      rounded-md
      !py-5
      !px-6
      !shadow-none
      hover:!bg-[#FFADB1]
      focus:!bg-[#FFADB1]
      active:!bg-[#FFADB1]
    "
            onClick={() => console.log("Delete Account Clicked")}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </>
  );
};

export default Settings;
