const initiatePayment = async (payload: Record<string, unknown>) => {
  const { amount, tran_id, cus_name, cus_email, cus_phone } = payload;

  const paymentData = {
    store_id: "aamarpaytest",
    signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
    tran_id,
    amount,
    currency: "USD",
    desc: "Test Payment",
    cus_name,
    cus_email,
    cus_phone,
    success_url: "https://auto-shine-server.vercel.app/api/v1/payment/success",
    fail_url: "https://auto-shine-server.vercel.app/api/v1/payment/fail",
    cancel_url: "https://auto-shine.vercel.app/",
    type: "json",
  };

  const response = await fetch("https://sandbox.aamarpay.com/jsonpost.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  const data = await response.json();

  return { data };
};

export const paymentServices = {
  initiatePayment,
};
