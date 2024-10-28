const initiatePayment = async (payload: Record<string, unknown>) => {
  const { amount, tran_id, cus_name, cus_email, cus_phone } = payload;

  const paymentData = {
    store_id: "aamarpaytest",
    signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
    tran_id,
    amount,
    currency: "BDT/USD",
    desc: "Test Payment",
    cus_name,
    cus_email,
    cus_phone,
    success_url: "http://your-server.com/api/payment/success",
    fail_url: "http://your-server.com/api/payment/fail",
    cancel_url: "http://your-server.com/api/payment/cancel",
    type: "json",
  };

  const response = await fetch("https://sandbox.aamarpay.com/payment/init", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  const data = await response.json();

  return { data };
};

const payMentSuccess = async (payload: Record<string, unknown>) => {
  return { data: payload };
};
const payMentFail = async (payload: Record<string, unknown>) => {
  return { data: payload };
};

export const paymentServices = {
  initiatePayment,
  payMentSuccess,
  payMentFail,
};
