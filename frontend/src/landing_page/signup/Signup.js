import React, { useEffect } from 'react';

function Signup() {
  useEffect(() => {
    // Get dashboard URL from environment variable or default to localhost
    const dashboardURL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
    
    // Auto-redirect to dashboard
    window.location.href = dashboardURL;
  }, []);

  return (
    <div className="container mt-5 text-center" style={{ minHeight: "60vh" }}>
      <h2>Redirecting to Dashboard...</h2>
      <p>If you are not redirected, <a href={process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"}>click here</a></p>
    </div>
  );
}

export default Signup;