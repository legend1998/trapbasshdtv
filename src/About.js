import React from "react";
function About() {
  return (
    <div className="" id="about">
      <div className="container">
        <h1 className="text-center m-5  text-dark font-weight-bold text-capitalize">
          Diffrent plans for all purpose
        </h1>
        <div className="row">
          <div className="col-sm m-2">
            <div className="card card-bg text-light">
              <div className="card-head">
                <h1 className="text-center m-3">Bronze</h1>
              </div>
              <div className="card-body">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
                <div className="text-center m-3">
                  <button className="btn btn-light">Get it now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm m-2">
            <div className="card card-bg text-light">
              <div className="card-head">
                <h1 className="text-center m-3">Silver</h1>
              </div>
              <div className="card-body">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
                <div className="text-center m-3">
                  <button className="btn btn-light">Get it now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm m-2">
            <div className="card card-bg text-light">
              <div className="card-head">
                <h1 className="text-center m-3">Gold</h1>
              </div>
              <div className="card-body">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
                <div className="text-center m-3">
                  <button className="btn btn-light">Get it now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <h1 className="text-center m-5 fs-1"> What we provide ? </h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div className="text-center">
                <i className="fas fa-cloud fa-5x"></i>
                <h4 className="text-center mt-4">
                  Digital Music Distributions
                </h4>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <i className="fas fa-headphones-alt fa-5x"></i>
                <h4 className="text-center mt-4">Playlist Pitching</h4>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="text-center">
                <i className="fas fa-phone-alt fa-5x"></i>
                <h4 className="text-center mt-4">Caller Tunes</h4>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <i className="fas fa-video fa-5x"></i>
                <h4 className="text-center mt-4">Video Distributions</h4>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="text-center">
                <i className="fab fa-youtube fa-5x"></i>
                <h4 className="text-center mt-4">Youtube Content Id</h4>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <i className="fas fa-user-check fa-5x"></i>
                <h4 className="text-center mt-4">Artist Management</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="footer-area d-flex align-items-center justify-content-center"
        style={{ height: 80 + "vh" }}
      >
        <div className="row">
          <div className="col-md text-center text-light">
            <h2>Want to know more ? </h2>
          </div>
          <div className="col-md text-center">
            <button className="btn btn-lg btn-outline-light">Contact</button>
          </div>
        </div>
      </section>
      <section className="footer text-center" style={{ height: 50 + "vh" }}>
        <h1>footer area</h1>
      </section>
    </div>
  );
}

export default About;
