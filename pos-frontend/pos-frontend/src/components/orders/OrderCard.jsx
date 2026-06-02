import { useSelector } from "react-redux";
import React, { useState } from "react";
import { FaCheckDouble, FaLongArrowAltRight, FaCircle } from "react-icons/fa";
import { formatDateAndTime, getAvatarName } from "../../utils/index";
import { enqueueSnackbar } from "notistack";

const OrderCard = ({ order }) => {

  const userData = useSelector((state) => state.user);
  const role = userData.role;

  const [showPayment, setShowPayment] = useState(false);
  const [status, setStatus] = useState(order.orderStatus);

  const handlePayment = (method) => {

    enqueueSnackbar(`Payment successful via ${method}`, {
      variant: "success",
    });

    setStatus("Completed");
    setShowPayment(false);
  };

  return (
    <>
      <div className="w-[500px] bg-[#262626] p-4 rounded-lg mb-4">

        <div className="flex items-center gap-5">
          <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
            {getAvatarName(order.customerDetails.name)}
          </button>

          <div className="flex items-center justify-between w-full">

            <div>
              <h1 className="text-white text-lg font-semibold">
                {order.customerDetails.name}
              </h1>

              <p className="text-gray-400 text-sm">
                Table <FaLongArrowAltRight className="inline ml-2" />
                {order.table.tableNo}
              </p>
            </div>

            <div>
              {status === "Ready" ? (
                <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
                  <FaCheckDouble className="inline mr-2" />
                  Ready
                </p>
              ) : status === "Completed" ? (
                <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
                  <FaCheckDouble className="inline mr-2" />
                  Completed
                </p>
              ) : (
                <p className="text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg">
                  <FaCircle className="inline mr-2" />
                  {status}
                </p>
              )}
            </div>

          </div>
        </div>

        <div className="flex justify-between mt-4 text-gray-400">
          <p>{formatDateAndTime(order.orderDate)}</p>
          <p>{order.items.length} Items</p>
        </div>

        <hr className="mt-4 border-gray-600" />

        <div className="flex justify-between mt-4">
          <h1 className="text-white font-semibold">Total</h1>
          <p className="text-white font-semibold">
            ₹{order.bills.totalWithTax.toFixed(2)}
          </p>
        </div>

        {/* PAYMENT BUTTON (ONLY CASHIER) */}
        {role?.toLowerCase() === "cashier" && status !== "Completed" && (
          <button
            onClick={() => setShowPayment(true)}
            className="mt-4 w-full bg-blue-600 py-2 rounded-lg font-semibold"
          >
            Take Payment
          </button>
        )}

      </div>

      {/* PAYMENT POPUP (ONLY CASHIER) */}
      {role?.toLowerCase() === "cashier" && showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">

          <div className="bg-[#1f1f1f] p-6 rounded-lg w-[400px]">

            <h2 className="text-white text-lg font-semibold mb-4">
              Select Payment Method
            </h2>

            <div className="flex gap-4">

              <button
                onClick={() => handlePayment("Cash")}
                className="bg-green-600 px-6 py-3 rounded-lg font-semibold w-full"
              >
                Cash
              </button>

              <button
                onClick={() => handlePayment("Online")}
                className="bg-blue-600 px-6 py-3 rounded-lg font-semibold w-full"
              >
                Online
              </button>

            </div>

            <button
              onClick={() => setShowPayment(false)}
              className="mt-4 w-full bg-gray-600 py-2 rounded-lg"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default OrderCard;