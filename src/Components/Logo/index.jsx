import React from "react";

function Logo({ className }) {
  return (
    <img
      className={className}
      src="assets/PinelabsLogo.png"
      alt="logo"
      style={{ height: "40px" }}
    />
  );
}

export default Logo;
