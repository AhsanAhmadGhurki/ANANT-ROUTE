import React, { useMemo, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const DataTable = ({
  title,
  columns = [],
  initialRows = [],
  onChange,
  onApprove,
  onDelete,
  approveIcon = "material-symbols:check-circle",
  deleteIcon = "mdi:delete-outline",
  readonly = false,
  showSearch = true,
  showFilters = true,
  showExport = true,
}) => {
  const normalizedCols = useMemo(
    () =>
      columns
        .filter((c) => c && c.visible !== false)
        .map((c) => ({
          placeholder: "",
          visible: true,
          readonly: readonly || c.readonly,
          ...c,
        })),
    [columns, readonly]
  );

  const [rows, setRows] = useState(initialRows || []);

  useEffect(() => {
    setRows(initialRows || []);
  }, [initialRows]);

  const handleCellChange = (idx, key, value) => {
    const next = rows.map((r, i) => (i === idx ? { ...r, [key]: value } : r));
    setRows(next);
    onChange?.(next);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between px-1 py-2 mb-4">
        <p className="text-lg font-medium text-[#272827]">{title}</p>
        {(showSearch || showFilters || showExport) && (
          <div className="flex items-center gap-3">
            {showSearch && (
              <div className="relative w-64">
                <Icon
                  icon="material-symbols:search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
            {showFilters && (
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <Icon icon="material-symbols:filter-list" className="w-5 h-5" />
                <span>Filters</span>
              </button>
            )}
            {showExport && (
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <Icon icon="uil:export" className="w-5 h-5" />
                <span>Export</span>
              </button>
            )}
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-black bg-[#F1F5F9] rounded-xl">
              {normalizedCols.map((c, index) => (
                <th
                  key={c.key}
                  className={`text-left px-4 py-2 font-medium ${
                    index === 0 ? "rounded-tl-xl" : ""
                  } ${c.key === "title" ? "max-w-xs" : ""}`}
                >
                  {c.header}
                </th>
              ))}
              <th className="px-4 py-2 text-right w-[1%] whitespace-nowrap font-medium rounded-tr-xl border-b border-slate-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!rows.length ? (
              <tr>
                <td
                  className="px-4 py-6 text-slate-400 text-center"
                  colSpan={normalizedCols.length + 1}
                >
                  No rows yet. Click "Add row" to get started.
                </td>
              </tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={idx}>
                  {normalizedCols.map((c) => {
                    const value = row?.[c.key] ?? "";
                    const url =
                      c.isLink && value
                        ? value.startsWith("http")
                          ? value
                          : `https://${value}`
                        : null;

                    const getStatusColor = (status) => {
                      const statusLower = status?.toLowerCase() || "";
                      if (statusLower === "live")
                        return { text: "text-green-700", bg: "bg-green-100" };
                      if (statusLower === "closed")
                        return { text: "text-blue-700", bg: "bg-blue-100" };
                      if (statusLower === "flagged")
                        return { text: "text-red-700", bg: "bg-red-100" };
                      if (statusLower === "draft")
                        return { text: "text-gray-700", bg: "bg-gray-100" };
                      if (statusLower === "active")
                        return { text: "text-green-700", bg: "bg-green-100" };
                      if (statusLower === "suspended")
                        return { text: "text-red-700", bg: "bg-red-100" };
                      if (statusLower === "open")
                        return { text: "text-orange-500", bg: "bg-orange-100" };
                      if (statusLower === "under review")
                        return { text: "text-amber-500", bg: "bg-amber-100" };
                      if (statusLower === "resolved")
                        return { text: "text-emerald-500", bg: "bg-emerald-100" };
                      if (statusLower === "pending")
                        return { text: "text-amber-500", bg: "bg-amber-100" };
                      return { text: "text-slate-700", bg: "" };
                    };

                    const statusColor =
                      c.key === "status"
                        ? getStatusColor(value)
                        : { text: "", bg: "" };

                    return (
                      <td
                        key={c.key}
                        className={`px-4 py-2 align-top border-b border-slate-200 ${c.key === "title" ? "max-w-xs" : ""}`}
                      >
                        {c.readonly ? (
                          c.isLink && url ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5"
                            >
                              {c.key === "portfolioUrl" ? (
                                <>
                                  <Icon icon="weui:link-filled" className="w-4 h-4" />
                                  <span>View</span>
                                </>
                              ) : (
                                value
                              )}
                            </a>
                          ) : (
                            <span
                              className={`${c.key === "status" ? "text-xs font-normal" : "text-sm"} ${statusColor.text || "text-slate-700"} ${c.key === "status" && statusColor.bg ? `${statusColor.bg} py-1 px-3 rounded-full inline-block` : ""} ${c.key === "title" ? "block truncate" : ""}`}
                            >
                              {value}
                            </span>
                          )
                        ) : (
                          <input
                            className={`bg-transparent border-0 px-0 py-0 text-sm focus:outline-none focus:ring-0 ${c.key === "title" ? "w-full max-w-xs" : "w-full"}`}
                            placeholder={c.placeholder}
                            value={value}
                            onChange={(e) =>
                              handleCellChange(idx, c.key, e.target.value)
                            }
                          />
                        )}
                      </td>
                    );
                  })}
                  <td className="px-4 py-2 text-right border-b border-slate-200">
                    <div className="flex items-center justify-end gap-1.5">
                      {onApprove && (
                        <button
                          type="button"
                          onClick={() => onApprove(row, idx)}
                          className="p-1 rounded-md flex items-center justify-center bg-emerald-50 text-emerald-500 transition-colors"
                          title="Approve"
                        >
                          <Icon icon={approveIcon} className="w-4 h-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          type="button"
                          onClick={() => onDelete(row, idx)}
                          className="p-1 rounded-md flex items-center justify-center bg-red-50 text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Icon icon={deleteIcon} className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
