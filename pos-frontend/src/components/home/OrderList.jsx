import React, { useState } from "react";
import OrderCard from "../orders/OrderCard";
import { enqueueSnackbar } from "notistack";

const OrderList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handlePayment = (method) => {
    if (!selectedOrder) return;

    enqueueSnackbar(`Payment successful via ${method}`, {
      variant: "success",
    });

    // Update locally
    selectedOrder.orderStatus = "Completed";
    selectedOrder.paymentMethod = method;

    setSelectedOrder(null);
  };

  return (
    <div className="relative">

      {/* Orders */}
      <div className="flex flex-wrap gap-6">
        {orders &&
          orders.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
              onSelect={setSelectedOrder}
            />
          ))}
      </div>

      {/* Payment Panel */}
      {selectedOrder && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1f1f1f] p-6 border-t border-gray-700 shadow-lg">
          <h2 className="text-white text-lg font-semibold">
            Payment for {selectedOrder.customerDetails.name}
          </h2>

          <p className="text-yellow-400 mt-2 text-lg">
            Total: ₹{selectedOrder.bills.totalWithTax}
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handlePayment("Cash")}
              className="bg-green-600 px-6 py-3 rounded-lg font-semibold"
            >
              Cash
            </button>

            <button
              onClick={() => handlePayment("Online")}
              className="bg-blue-600 px-6 py-3 rounded-lg font-semibold"
            >
              Online
            </button>

            <button
              onClick={() => setSelectedOrder(null)}
              className="bg-gray-600 px-6 py-3 rounded-lg font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;