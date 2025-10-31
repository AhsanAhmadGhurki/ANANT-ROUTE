import React, { useState } from "react";
import StatCards from "../../../components/public_components/StatCards";
import ApprovalsAndFlaggedTables from "../../../components/public_components/ApprovalsAndFlaggedTables";

const index = () => {
  const [tableRows, setTableRows] = useState([
    {
      fullName: "John Doe",
      emailAddress: "john.doe@example.com",
      role: "Creator",
      status: "Active",
      polls: 24,
      lastActive: "15 - 01 - 25",
    },
    {
      fullName: "Jane Smith",
      emailAddress: "jane.smith@example.com",
      role: "User",
      status: "Active",
      polls: 12,
      lastActive: "12 - 01 - 25",
    },
    {
      fullName: "Mike Johnson",
      emailAddress: "mike.johnson@example.com",
      role: "Creator",
      status: "Suspended",
      polls: 8,
      lastActive: "10 - 01 - 25",
    },
    {
      fullName: "Sarah Williams",
      emailAddress: "sarah.williams@example.com",
      role: "User",
      status: "Active",
      polls: 5,
      lastActive: "08 - 01 - 25",
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
        <p className="text-2xl font-medium">Users</p>
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
            icon: "mage:users",
            iconColor: "text-[#8B5CEF]",
          },
          {
            title: "Active Polls",
            value: 89,
            change: "-3% vs last month",
            icon: "tabler:user-check",
            iconColor: "text-[#15CACB]",
          },
          {
            title: "Votes (24h)",
            value: "1,248",
            change: "-15% vs last week",
            icon: "solar:users-group-two-rounded-linear",
            iconColor: "text-[#2C6FFF]",
          },
          {
            title: "Flagged",
            value: 7,
            change: "+5% vs last week",
            icon: "mingcute:user-x-line",
            iconColor: "text-[#FF3B3B]",
          },
          {
            title: "Pending Approvals",
            value: 23,
            change: "+5% vs last week",
            icon: "mingcute:user-add-2-line",
            iconColor: "text-[#00BC7D]",
          },
        ]}
      />

      <ApprovalsAndFlaggedTables
        readonly={true}
        showSearch={false}
        showFilters={false}
        showExport={false}
        approvalsConfig={{
          title: "All Users",
          columns: [
            { key: "fullName", header: "User Name", placeholder: "Jane Doe", readonly: true },
            {
              key: "emailAddress",
              header: "Email",
              placeholder: "user@example.com",
              readonly: true,
            },
            {
              key: "role",
              header: "Role",
              placeholder: "Role",
              readonly: true,
            },
            {
              key: "status",
              header: "Status",
              placeholder: "Status",
              readonly: true,
            },
            {
              key: "polls",
              header: "Polls",
              placeholder: "0",
              readonly: true,
            },
            {
              key: "lastActive",
              header: "Last Active",
              placeholder: "Date",
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

export default index;
