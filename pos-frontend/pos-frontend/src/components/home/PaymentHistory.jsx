import React from "react";

const payments = [
  {
    id: 1,
    customer: "Rahul",
    method: "Cash",
    amount: 420,
    time: "7:20 PM",
  },
  {
    id: 2,
    customer: "Anita",
    method: "Online",
    amount: 560,
    time: "7:25 PM",
  },
  {
    id: 3,
    customer: "Kiran",
    method: "UPI",
    amount: 300,
    time: "7:30 PM",
  },
];

const PaymentHistory = () => {
  return (
    <div className="px-8 mt-6">
      <h2 className="text-white text-xl font-semibold mb-3">
        Payment History
      </h2>

      <div className="bg-[#262626] rounded-lg p-4">
        {payments.map((pay) => (
          <div
            key={pay.id}
            className="flex justify-between items-center border-b border-gray-600 py-2"
          >
            <p className="text-gray-300">{pay.customer}</p>

            <p className="text-gray-400">{pay.method}</p>

            <p className="text-green-400 font-semibold">
              ₹{pay.amount}
            </p>

            <p className="text-gray-500 text-sm">{pay.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;