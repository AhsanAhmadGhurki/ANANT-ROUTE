import React, { useState } from "react";
import StatCards from "../../../components/public_components/StatCards";
import ChartsRow from "../../../components/public_components/ChartsRow";
import {
  VotesAreaMini,
  NewPollsBarMini,
  FlagVolumeLineMini,
} from "../../../components/public_components/AdminMiniCharts";
import ApprovalsAndFlaggedTables from "../../../components/public_components/ApprovalsAndFlaggedTables";

const AdminDashboard = () => {
  const [statCardsData, setStatCardsData] = useState([
    {
      title: "Total Polls",
      value: "1,247",
      change: "+12% vs last month",
      icon: "system-uicons:graph-bar",
      iconColor: "text-[#8B5CEF]",
    },
    {
      title: "Active Polls",
      value: 89,
      change: "-3% vs last month",
      icon: "simple-line-icons:energy",
      iconColor: "text-[#FFA527]",
    },
    {
      title: "Votes (24h)",
      value: "1,248",
      change: "+8% vs yesterday",
      icon: "formkit:down",
      iconColor: "text-[#002DDF]",
    },
    {
      title: "Flagged",
      value: 7,
      change: "-15% vs last week",
      icon: "famicons:flag-outline",
      iconColor: "text-[#FB2C36]",
    },
    {
      title: "Pending Approvals",
      value: 23,
      change: "+5% vs last week",
      icon: "hugeicons:clock-05",
      iconColor: "text-[#4245FF]",
    },
  ]);
  const [tableRows, setTableRows] = useState([
    {
      fullName: "Cody Fisher",
      emailAddress: "debbie.baker@gmail.com",
      portfolioUrl: "portfolio-link.com",
      submittedAt: "1 day ago",
      submittedBy: "John Doe",
    },
    {
      fullName: "Emily Johnson",
      emailAddress: "emily.johnson@example.com",
      portfolioUrl: "emilyportfolio.com",
      submittedAt: "2 days ago",
      submittedBy: "Admin User",
    },
    {
      fullName: "Michael Chen",
      emailAddress: "michael.chen@example.com",
      portfolioUrl: "mchen.dev",
      submittedAt: "3 days ago",
      submittedBy: "Sarah Wilson",
    },
    {
      fullName: "Sarah Martinez",
      emailAddress: "sarah.martinez@example.com",
      portfolioUrl: "sarahdesigns.com",
      submittedAt: "5 days ago",
      submittedBy: "Admin User",
    },
    {
      fullName: "David Thompson",
      emailAddress: "david.thompson@example.com",
      portfolioUrl: "davidthompson.io",
      submittedAt: "1 week ago",
      submittedBy: "John Doe",
    },
  ]);

  const [secondTableRows, setSecondTableRows] = useState([
    {
      title: "Climate Change Solutions",
      category: "Environment",
      reason: "Spam Content",
      flags: "12",
      time: "1 day ago",
    },
    {
      title: "Technology Trends 2024",
      category: "Technology",
      reason: "Inappropriate",
      flags: "5",
      time: "2 days ago",
    },
    {
      title: "Best Programming Languages",
      category: "Technology",
      reason: "Misleading",
      flags: "8",
      time: "3 days ago",
    },
  ]);

  const handleApprove = (row, index) => {
    // Remove approved row from the table
    setTableRows((prev) => prev.filter((_, i) => i !== index));
    // TODO: Add API call to approve the creator
    console.log("Approved:", row);
  };

  const handleDelete = (row, index) => {
    // Remove deleted row from the table
    setTableRows((prev) => prev.filter((_, i) => i !== index));
    // TODO: Add API call to delete/reject the creator
    console.log("Deleted:", row);
  };

  const handleSecondApprove = (row, index) => {
    setSecondTableRows((prev) => prev.filter((_, i) => i !== index));
    console.log("Approved:", row);
  };

  const handleSecondDelete = (row, index) => {
    setSecondTableRows((prev) => prev.filter((_, i) => i !== index));
    console.log("Deleted:", row);
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-2xl font-medium">Dashboard</p>
        <p className="text-sm text-slate-500">
          Platform overview and key metrics
        </p>
      </div>

      <StatCards
        cardsPerRow={5}
        data={statCardsData}
        onChange={setStatCardsData}
        editable={true}
      />

      <div className="mt-5">
        <ChartsRow
          perRow={3}
          itemHeight={260}
          charts={[
            <VotesAreaMini key="votes-mini" />,
            <NewPollsBarMini key="newpolls-mini" />,
            <FlagVolumeLineMini key="flag-mini" />,
          ]}
        />
      </div>

      <ApprovalsAndFlaggedTables
        readonly={true}
        approvalsConfig={{
          title: "Pending Creator Approvals",
          columns: [
            { key: "fullName", header: "User Name", placeholder: "Jane Doe" },
            {
              key: "emailAddress",
              header: "Email",
              placeholder: "user@example.com",
            },
            {
              key: "portfolioUrl",
              header: "Portfolio",
              placeholder: "https://...",
              isLink: true,
            },
            {
              key: "submittedAt",
              header: "Time",
              placeholder: "Just now",
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

      <ApprovalsAndFlaggedTables
        readonly={true}
        approvalsConfig={{
          title: "Flagged Polls Queue",
          columns: [
            { key: "title", header: "Poll Title", placeholder: "Poll title" },
            {
              key: "category",
              header: "Category",
              placeholder: "Category name",
            },
            {
              key: "reason",
              header: "Reason",
              placeholder: "Reason",
            },
            {
              key: "flags",
              header: "Flags",
              placeholder: "0",
              readonly: true,
            },
            {
              key: "time",
              header: "Time",
              placeholder: "Just now",
              readonly: true,
            },
          ],
          initialRows: secondTableRows,
        }}
        onRowsChange={(rows) => {
          setSecondTableRows(rows);
        }}
        onApprove={handleSecondApprove}
        onDelete={handleSecondDelete}
        approveIcon="mi:check"
        deleteIcon="si:bin-line"
      />
    </div>
  );
};

export default AdminDashboard;
