function TopHeader({ heading }) {
  return (
    <div className="topheader" id="topheader">
      <nav className="navbar navbar-expand navbar-dark bg-light justify-content-start text-dark topheader-text">
        <h2 className="fs-1">{heading}</h2>
      </nav>
    </div>
  );
}

export default TopHeader;
