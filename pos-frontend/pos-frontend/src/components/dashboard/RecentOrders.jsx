import React from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders, updateOrderStatus } from "../../https/index";
import { formatDateAndTime } from "../../utils";

const RecentOrders = () => {
  const queryClient = useQueryClient();

  const handleStatusChange = ({ orderId, orderStatus }) => {
    orderStatusUpdateMutation.mutate({ orderId, orderStatus });
  };

  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({ orderId, orderStatus }) =>
      updateOrderStatus({ orderId, orderStatus }),
    onSuccess: () => {
      enqueueSnackbar("Order status updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["orders"]);
    },
    onError: () => {
      enqueueSnackbar("Failed to update order status!", { variant: "error" });
    },
  });

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  const orders = resData?.data?.data || [];

  /* -------- Cashier Payment Summary -------- */

  const cashPayments = orders
    .filter((o) => o.paymentMethod === "Cash")
    .reduce((sum, o) => sum + o.bills.totalWithTax, 0);

  const onlinePayments = orders
    .filter((o) => o.paymentMethod === "Online")
    .reduce((sum, o) => sum + o.bills.totalWithTax, 0);

  const totalRevenue = cashPayments + onlinePayments;

  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">

      {/* Payment Summary (Cashier Feature) */}

      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-[#1f1f1f] p-4 rounded-lg">
          <p className="text-gray-400">Cash Payments</p>
          <h3 className="text-green-400 text-xl font-bold">
            ₹{cashPayments.toFixed(2)}
          </h3>
        </div>

        <div className="bg-[#1f1f1f] p-4 rounded-lg">
          <p className="text-gray-400">Online Payments</p>
          <h3 className="text-blue-400 text-xl font-bold">
            ₹{onlinePayments.toFixed(2)}
          </h3>
        </div>

        <div className="bg-[#1f1f1f] p-4 rounded-lg">
          <p className="text-gray-400">Total Revenue</p>
          <h3 className="text-yellow-400 text-xl font-bold">
            ₹{totalRevenue.toFixed(2)}
          </h3>
        </div>

      </div>

      {/* Recent Orders Table */}

      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[#f5f5f5]">

          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4">
                  #{Math.floor(new Date(order.orderDate).getTime())}
                </td>

                <td className="p-4">{order.customerDetails.name}</td>

                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] border border-gray-500 p-2 rounded-lg ${
                      order.orderStatus === "Ready"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange({
                        orderId: order._id,
                        orderStatus: e.target.value,
                      })
                    }
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Ready">Ready</option>
                  </select>
                </td>

                <td className="p-4">
                  {formatDateAndTime(order.orderDate)}
                </td>

                <td className="p-4">{order.items.length} Items</td>

                <td className="p-4">Table {order.table.tableNo}</td>

                <td className="p-4">₹{order.bills.totalWithTax}</td>

                <td className="p-4 text-center">
                  {order.paymentMethod || "Pending"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default RecentOrders;