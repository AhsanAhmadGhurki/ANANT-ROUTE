import React, { useMemo } from "react";
import DataTable from "./DataTable";

const ApprovalsAndFlaggedTables = ({
  approvalsConfig = {},
  onRowsChange,
  onApprove,
  onDelete,
  approveIcon,
  deleteIcon,
  readonly = false,
  showSearch = true,
  showFilters = true,
  showExport = true,
}) => {
  const config = useMemo(
    () => ({
      title: "Pending Creator Approvals",
      columns: [
        { key: "name", header: "User Name", placeholder: "John Doe" },
        { key: "email", header: "Email", placeholder: "user@example.com" },
        { key: "portfolio", header: "Portfolio", placeholder: "https://portfolio-link.com" },
        { key: "time", header: "Time", placeholder: "1 day ago" },
      ],
      initialRows: [
        { name: "Cody Fisher", email: "debbie.baker@gmail.com", portfolio: "portfolio-link.com", time: "1 day ago" },
      ],
      ...approvalsConfig,
    }),
    [approvalsConfig]
  );

  return (
    <div className="mt-8 grid grid-cols-1 gap-6">
      <DataTable
        title={config.title}
        columns={config.columns}
        initialRows={config.initialRows}
        onChange={onRowsChange}
        onApprove={onApprove}
        onDelete={onDelete}
        approveIcon={approveIcon}
        deleteIcon={deleteIcon}
        readonly={readonly}
        showSearch={showSearch}
        showFilters={showFilters}
        showExport={showExport}
      />
    </div>
  );
};

export default ApprovalsAndFlaggedTables;
