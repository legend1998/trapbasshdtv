import React from "react";
import TopHeader from "./TopHeader";

function Catalog() {
  return (
    <div className="catalog flex-fill">
      <div className="top-header-container">
        <TopHeader heading="Catalog" />
      </div>
      <div className="container-fluid">this is catalog</div>
    </div>
  );
}

export default Catalog;