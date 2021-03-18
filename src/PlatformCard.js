import React from "react";

function PlatformCard({ linkimg, name }) {
  return (
    <div className="platform-icon">
      <input type="checkbox" value={name} />
      <img src={linkimg} alt="" height="100px" width="100px" />
    </div>
  );
}

export default PlatformCard;
