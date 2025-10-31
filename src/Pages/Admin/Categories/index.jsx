import React, { useState } from "react";
import StatCards from "../../../components/public_components/StatCards";
import { Icon } from "@iconify/react";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Politics",
      pollCount: 156,
      visible: true,
    },
    {
      id: 2,
      name: "Health & Wellness",
      pollCount: 156,
      visible: true,
    },
    {
      id: 3,
      name: "Entertainment",
      pollCount: 156,
      visible: true,
    },
    {
      id: 4,
      name: "Sports",
      pollCount: 156,
      visible: false,
    },
    {
      id: 5,
      name: "Technology",
      pollCount: 156,
      visible: true,
    },
    {
      id: 6,
      name: "Politics",
      pollCount: 156,
      visible: true,
    },
  ]);

  const [newCategoryName, setNewCategoryName] = useState("");

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: categories.length + 1,
        name: newCategoryName.trim(),
        pollCount: 0,
        visible: true,
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName("");
    }
  };

  const handleToggleVisibility = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, visible: !cat.visible } : cat
      )
    );
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    const category = categories.find((cat) => cat.id === id);
    const newName = prompt("Edit category name:", category.name);
    if (newName && newName.trim()) {
      setCategories(
        categories.map((cat) =>
          cat.id === id ? { ...cat, name: newName.trim() } : cat
        )
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
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
        cardsPerRow={3} // 👈 Change this to 3, 4, 5, etc.
        data={[
          {
            title: "Total Categories & Tags",
            value: "6",
            status: "5 Visible",
            icon: "heroicons:folder-open",
            iconColor: "text-[#0263D1]",
          },
          {
            title: "Active Tags",
            value: 6,
            status: "2 inactive",
            icon: "fluent:tag-48-regular",
            iconColor: "text-[#39A400]",
          },
          {
            title: "Tag Usage",
            value: "334",
            status: "Total tag applications",
            icon: "material-symbols-light:data-usage",
            iconColor: "text-[#002DDF]",
          },
        ]}
      />

      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg font-medium text-[#272827]">Category Management</p>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="New Category Name...."
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddCategory();
                }
              }}
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
            <button
              onClick={handleAddCategory}
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <Icon icon="material-symbols:add" className="w-5 h-5" />
              Add Category
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg hover:shadow-sm transition-shadow"
            >
              {/* Drag Handle */}
              <div className="cursor-move">
                <Icon
                  icon="material-symbols:drag-handle"
                  className="w-5 h-5 text-slate-400"
                />
              </div>

              {/* Category Info */}
              <div className="flex-1">
                <p className="text-base font-medium text-slate-800">
                  {category.name}
                </p>
                <p className="text-sm text-slate-500">
                  {category.pollCount} polls
                </p>
              </div>

              {/* Visibility Badge */}
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  category.visible
                    ? "bg-blue-500 text-white"
                    : "bg-slate-300 text-white"
                }`}
              >
                {category.visible ? "Visible" : "Hidden"}
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-2">
                {/* Toggle Visibility */}
                <button
                  onClick={() => handleToggleVisibility(category.id)}
                  className="p-2 rounded-md hover:bg-slate-100 transition-colors"
                  title={category.visible ? "Hide" : "Show"}
                >
                  <Icon
                    icon={
                      category.visible
                        ? "lucide:eye-off"
                        : "lucide:eye"
                    }
                    className="w-5 h-5 text-slate-600"
                  />
                </button>

                {/* Edit */}
                <button
                  onClick={() => handleEdit(category.id)}
                  className="p-2 rounded-md hover:bg-slate-100 transition-colors"
                  title="Edit"
                >
                  <Icon
                    icon="lucide:edit"
                    className="w-5 h-5 text-slate-600"
                  />
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2 rounded-md hover:bg-red-50 transition-colors"
                  title="Delete"
                >
                  <Icon
                    icon="si:bin-duotone"
                    className="w-5 h-5 text-red-500"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
