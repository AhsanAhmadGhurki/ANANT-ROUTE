import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mb-12">
        <p className="text-2xl font-medium">Profile Information</p>
        <p className="text-sm">
          Update your information and account preferences
        </p>
        <p className="text-sm text-emerald-600 p-2 bg-[#F2FBF5] border border-[#D1F9E5] rounded-lg">
          Your identity stays separate from your votes. We never store names or
          contact info on vote records. Results appear only as anonymous group
          statistics—and demographic views unlock only when enough people have
          answered to protect privacy.
          <span className="text-md font-bold ">
            No one will ever know how YOU voted on our Polls.
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-5 mb-12">
        <div className="w-[60px] h-[60px]">
          <img
            className="w-full h-full object-cover"
            src="/public/images/ant.png"
            alt=""
          />
        </div>
        <div className="flex gap-5">
          <div className="w-[50%] flex flex-col gap-2">
            <p className="text-sm text-gray-600">Full Name</p>
            <input
              type="text"
              placeholder="Leslie Alexander"
              className="text-gray-600 text-base font-medium placeholder-[#272827] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <p className="text-sm text-gray-600">Email Address</p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="text-gray-600 text-base font-medium placeholder-[#272827] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex gap-5 font-atkinson">
          {/* User Name Input */}
          <div className="w-[50%] flex flex-col gap-2">
            <p className="text-sm text-gray-600">User Name</p>
            <input
              type="text"
              placeholder="Eastern Time (ET)"
              className="text-gray-600 text-base font-medium placeholder-[#272827] border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Time Zone Dropdown with Custom Arrow */}
          <div className="w-[50%] flex flex-col gap-2 relative">
            <p className="text-sm text-gray-600">Time Zone</p>

            {/* Wrap select in a full-width relative container */}
            <div className="relative w-full">
              <select
                className="appearance-none w-full text-gray-600 text-base font-medium border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 bg-white pr-10"
                defaultValue=""
              >
                <option value="" disabled>
                  Select time zone
                </option>
                <option value="est">Eastern Time (ET)</option>
                <option value="cst">Central Time (CT)</option>
                <option value="mst">Mountain Time (MT)</option>
                <option value="pst">Pacific Time (PT)</option>
              </select>

              {/* Custom Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-5 font-atkinson">
          {/* Language Dropdown */}
          <div className="w-[50%] flex flex-col gap-2">
            <p className="text-sm text-gray-600">Language</p>

            <div className="relative w-full">
              <select
                className="appearance-none w-full text-gray-600 text-base font-medium border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 bg-white pr-12"
                defaultValue=""
              >
                <option value="" disabled>
                  Select language
                </option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>

              {/* Custom Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </div>
          </div>

          {/* Phone Number Dropdown */}
          <div className="w-[50%] flex flex-col gap-2">
            <p className="text-sm text-gray-600">Phone Number</p>

            <div className="relative w-full">
              <select
                className="appearance-none w-full text-gray-600 text-base font-medium border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 bg-white pr-12"
                defaultValue=""
              >
                <option value="" disabled>
                  Select country code
                </option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
              </select>

              {/* Custom Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="text-white bg-[#FE6963] px-6 py-3 rounded-lg">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Profile;
