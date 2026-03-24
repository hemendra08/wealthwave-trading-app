import React from "react";

function OpenAccount() {
  const handleSignUp = () => {
    // Get dashboard URL from environment variable or default to localhost
    const dashboardURL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
    window.location.href = dashboardURL;
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a WealthWave account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignUp}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;