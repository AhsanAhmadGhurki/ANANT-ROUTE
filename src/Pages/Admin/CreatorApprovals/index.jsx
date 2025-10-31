import React, { useState } from "react";
import StatCards from "../../../components/public_components/StatCards";
import ApprovalsAndFlaggedTables from "../../../components/public_components/ApprovalsAndFlaggedTables";

const CreatorApprovals = () => {
  const [tableRows, setTableRows] = useState([
    {
      applicants: "Cody Fisher",
      emailAddress: "debbie.baker@gmail.com",
      profile: "85%",
      portfolioUrl: "portfolio-link.com",
      submitted: "Jan 12, 04:30 PM",
      status: "Pending",
    },
    {
      applicants: "Emily Johnson",
      emailAddress: "emily.johnson@example.com",
      profile: "92%",
      portfolioUrl: "emilyportfolio.com",
      submitted: "Jan 12, 04:30 PM",
      status: "Pending",
    },
    {
      applicants: "Michael Chen",
      emailAddress: "michael.chen@example.com",
      profile: "78%",
      portfolioUrl: "mchen.dev",
      submitted: "Jan 12, 04:30 PM",
      status: "Pending",
    },
    {
      applicants: "Sarah Martinez",
      emailAddress: "sarah.martinez@example.com",
      profile: "95%",
      portfolioUrl: "sarahdesigns.com",
      submitted: "Jan 12, 04:30 PM",
      status: "Pending",
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
        <p className="text-2xl font-medium">Creator Approvals</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={3} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Pending Reviews",
            value: "1,247",
            status: "Applications awaiting review",
            icon: "fluent:clock-20-regular",
            iconColor: "text-[#D5332C]",
          },
          {
            title: "Approved",
            value: 89,
            status: "This month",
            icon: "mingcute:check-line",
            iconColor: "text-[#008000]",
          },
          {
            title: "Rejected",
            value: "1,248",
            status: "This month",
            icon: "bitcoin-icons:cross-filled",
            iconColor: "text-[#FF0000]",
          },
        ]}
      />

      <ApprovalsAndFlaggedTables
        readonly={true}
        showFilters={false}
        showExport={false}
        approvalsConfig={{
          title: "Pending Creator Approvals",
          columns: [
            { key: "applicants", header: "Applicants", placeholder: "Applicant name", readonly: true },
            {
              key: "emailAddress",
              header: "Email",
              placeholder: "user@example.com",
              readonly: true,
            },
            {
              key: "profile",
              header: "Profile",
              placeholder: "0%",
              readonly: true,
            },
            {
              key: "portfolioUrl",
              header: "Portfolio",
              placeholder: "https://...",
              isLink: true,
              readonly: true,
            },
            {
              key: "submitted",
              header: "Submitted",
              placeholder: "Jan 12, 04:30 PM",
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

export default CreatorApprovals;
