const crypto = require("crypto");
const Payment = require("../models/paymentModel");
const createHttpError = require("http-errors");

// ========================
// Mock Create Order
// ========================
const createOrder = async (req, res, next) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return next(createHttpError(400, "Amount is required"));
    }

    const fakeOrder = {
      id: "order_mock_" + Date.now(),
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      status: "created",
    };

    res.status(200).json({
      success: true,
      order: fakeOrder,
    });
  } catch (error) {
    next(error);
  }
};

// ========================
// Mock Verify Payment
// ========================
const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id) {
      return next(createHttpError(400, "Invalid payment data"));
    }

    // Simulate successful payment
    const newPayment = new Payment({
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      amount: 500, // You can adjust
      currency: "INR",
      status: "captured",
      method: "mock",
      email: "demo@test.com",
      contact: "9999999999",
      createdAt: new Date(),
    });

    await newPayment.save();

    res.json({
      success: true,
      message: "Mock Payment verified successfully!",
    });
  } catch (error) {
    next(error);
  }
};

// ========================
// Mock Webhook (Optional)
// ========================
const webHookVerification = async (req, res, next) => {
  res.json({ success: true, message: "Mock webhook received" });
};

module.exports = {
  createOrder,
  verifyPayment,
  webHookVerification,
};