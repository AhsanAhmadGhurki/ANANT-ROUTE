import React, { useState } from "react";
import StatCards from "../../../components/public_components/StatCards";
import ApprovalsAndFlaggedTables from "../../../components/public_components/ApprovalsAndFlaggedTables";

const PollManagement = () => {
  const [tableRows, setTableRows] = useState([
    {
      title: "Climate Change Solutions",
      category: "Environment",
      status: "Live",
      created: "15 - 01 - 25",
      votes: "1,245",
    },
    {
      title: "Technology Trends 2024",
      category: "Technology",
      status: "Draft",
      created: "12 - 01 - 25",
      votes: "0",
    },
    {
      title: "Best Programming Languages",
      category: "Technology",
      status: "Closed",
      created: "10 - 01 - 25",
      votes: "3,892",
    },
    {
      title: "Social Media Impact",
      category: "Society",
      status: "Flagged",
      created: "08 - 01 - 25",
      votes: "567",
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
        <p className="text-2xl font-medium">Poll Management</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={5} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Total Polls",
            value: "1,247",
            change: "+12% vs last month",
            icon: "system-uicons:graph-bar",
            iconColor: "text-[#8B5CEF]",
          },
          {
            title: "Live Polls",
            value: 89,
            change: "-3% vs last month",
            icon: "heroicons:signal-solid",
            iconColor: "text-[#EE4D4D]",
          },
          {
            title: "Draft",
            value: "1,248",
            change: "+8% vs yesterday",
            icon: "hugeicons:note-03",
            iconColor: "text-[#7C7C7C]",
          },
          {
            title: "Closed",
            value: 7,
            change: "-15% vs last week",
            icon: "bitcoin-icons:cross-filled",
            iconColor: "text-[#F44336]",
          },
          {
            title: "Flagged",
            value: 23,
            change: "+5% vs last week",
            icon: "famicons:flag-outline",
            iconColor: "text-[#FB2C36]",
          },
        ]}
      />
      
      <ApprovalsAndFlaggedTables
        readonly={true}
        approvalsConfig={{
          title: "Pending Creator Approvals",
          columns: [
            { key: "title", header: "Title", placeholder: "Poll title" },
            {
              key: "category",
              header: "Category",
              placeholder: "Category name",
            },
            {
              key: "status",
              header: "Status",
              placeholder: "Status",
            },
            {
              key: "created",
              header: "Created",
              placeholder: "Date",
              readonly: true,
            },
            {
              key: "votes",
              header: "Votes",
              placeholder: "0",
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

export default PollManagement;
