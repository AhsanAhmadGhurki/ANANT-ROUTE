import React, { useState } from "react";
import StatCards from "../../../components/public_components/StatCards";
import ApprovalsAndFlaggedTables from "../../../components/public_components/ApprovalsAndFlaggedTables";

const Moderation = () => {
  const [tableRows, setTableRows] = useState([
    {
      poll: "Climate Change Solutions",
      reporter: "John Doe",
      reason: "Spam",
      reports: 12,
      firstReported: "15 - 01 - 25",
      status: "Open",
    },
    {
      poll: "Technology Trends 2024",
      reporter: "Jane Smith",
      reason: "Inappropriate Content",
      reports: 5,
      firstReported: "12 - 01 - 25",
      status: "Under Review",
    },
    {
      poll: "Best Programming Languages",
      reporter: "Mike Johnson",
      reason: "Harassment",
      reports: 8,
      firstReported: "10 - 01 - 25",
      status: "Resolved",
    },
    {
      poll: "Social Media Impact",
      reporter: "Sarah Williams",
      reason: "False Information",
      reports: 3,
      firstReported: "08 - 01 - 25",
      status: "Open",
    },
  ]);

  const handleApprove = (row, index) => {
    setTableRows((prev) => prev.filter((_, i) => i !== index));
    console.log("Approved:", row);
  };

  const handleDelete = (row, index) => {
    setTableRows((prev) => prev.filter((_, i) => i !== index));
    console.log("Deleted:", row);
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-2xl font-medium">Moderation</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={4} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Total Reports",
            value: "1,247",
            change: "+12% vs last month",
            icon: "famicons:flag-outline",
            iconColor: "text-[#FB2C36]",
          },
          {
            title: "Open Reports",
            value: 89,
            change: "-3% vs last month",
            icon: "icon-park-outline:caution",
            iconColor: "text-[#FFB400]",
          },
          {
            title: "Avg Resolution Time",
            value: "1,128",
            change: "-15% vs last week",
            icon: "fluent:clock-20-regular",
            iconColor: "text-[#D5332C]",
          },
          {
            title: "Resolved Today",
            value: 7,
            change: "+5% vs last week",
            icon: "cuida:calendar-outline",
            iconColor: "text-[#F89000]",
          }
        ]}
      />

      <ApprovalsAndFlaggedTables
        readonly={true}
        approvalsConfig={{
          title: "Reported Content",
          columns: [
            { key: "poll", header: "Poll", placeholder: "Poll title", readonly: true },
            {
              key: "reporter",
              header: "Reporter",
              placeholder: "Reporter name",
              readonly: true,
            },
            {
              key: "reason",
              header: "Reason",
              placeholder: "Reason for report",
              readonly: true,
            },
            {
              key: "reports",
              header: "Reports",
              placeholder: "0",
              readonly: true,
            },
            {
              key: "firstReported",
              header: "First Reported",
              placeholder: "Date",
              readonly: true,
            },
            {
              key: "status",
              header: "Status",
              placeholder: "Status",
              readonly: true,
            },
          ],
          initialRows: tableRows,
        }}
        onRowsChange={(rows) => {
          setTableRows(rows);
        }}
        onApprove={handleApprove}
        onDelete={handleDelete}
        approveIcon="mi:check"
        deleteIcon="si:bin-line"
      />

    </div>
  );
};

export default Moderation