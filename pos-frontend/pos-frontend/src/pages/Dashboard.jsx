import React, { useState, useEffect } from "react";
import { MdTableBar, MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";

import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import Modal from "../components/dashboard/Modal";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders"];

const Dashboard = () => {

  useEffect(() => {
    document.title = "POS | Admin Dashboard";
  }, []);

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Metrics");

  const handleOpenModal = (action) => {

    if (action === "table") {
      setIsTableModalOpen(true);
    }

    if (action === "category") {
      setIsCategoryModalOpen(true);
      alert("Add Category feature coming soon");
    }

    if (action === "dishes") {
      setIsDishModalOpen(true);
      alert("Add Dish feature coming soon");
    }
  };

  return (
    <div className="relative bg-[#1f1f1f] min-h-screen overflow-hidden">

      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">

        {/* LEFT BUTTONS */}
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => {
            return (
              <button
                key={label}
                onClick={() => handleOpenModal(action)}
                className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
              >
                {label} {icon}
              </button>
            );
          })}
        </div>

        {/* RIGHT TABS */}
        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            return (
              <button
                key={tab}
                className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-[#262626]"
                    : "bg-[#1a1a1a] hover:bg-[#262626]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}
      {activeTab === "Payments" && (
        <div className="text-white p-6 container mx-auto">
          Payment Component Coming Soon
        </div>
      )}

      {/* MODALS */}
      {isTableModalOpen && (
        <Modal setIsTableModalOpen={setIsTableModalOpen} />
      )}

      {/* Decorative Spline */}
      <iframe
        src="https://my.spline.design/japanesestreetrestaurantnobackground-QdawHqDU8xOZehWVHuA0RL8q/"
        className="absolute bottom-10 right-10 w-[300px] h-[300px] opacity-70 pointer-events-none z-50"
        frameBorder="0"
        title="Restaurant 3D"
      />

    </div>
  );
};

export default Dashboard;