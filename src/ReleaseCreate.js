import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Song from "./Song";

function ReleaseCreate() {
  const toggler = (e) => {
    var nav = document.getElementById("release-nav").childNodes;
    nav.forEach((element) => {
      element.classList.remove("tabactive");
    });
    e.currentTarget.classList.add("tabactive");
    var tabs = document.getElementById("releasetab-container").childNodes;

    switch (e.currentTarget.getAttribute("name")) {
      case "1": {
        tabs.forEach((element) => {
          element.style.display = "none";
        });
        document.getElementById("release-tab1").style.display = "flex";

        break;
      }
      case "2": {
        tabs.forEach((element) => {
          element.style.display = "none";
        });
        document.getElementById("release-tab2").style.display = "block";
        break;
      }
      case "3": {
        tabs.forEach((element) => {
          element.style.display = "none";
        });
        document.getElementById("release-tab3").style.display = "block";
        break;
      }
      case "4": {
        tabs.forEach((element) => {
          element.style.display = "none";
        });
        document.getElementById("release-tab4").style.display = "block";
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="release-create col-sm p-0">
      <div className="top-header-container ">
        <TopHeader heading="Create Release" />
      </div>
      <div className="container-fluid">
        <div className="container-fluid">
          <ul
            className="navbar-nav release d-flex flex-row align-items-center justify-content-end"
            id="release-nav"
          >
            <li
              className="nav-item tabactive"
              onClick={(e) => toggler(e)}
              name="1"
            >
              <Link>Release Info</Link>
            </li>
            <li
              className="nav-item disabled"
              onClick={(e) => toggler(e)}
              name="2"
            >
              <Link>Song Info</Link>
            </li>
            <li
              className="nav-item disabled"
              onClick={(e) => toggler(e)}
              name="3"
            >
              <Link>Platform</Link>
            </li>
            <li
              className="nav-item disabled"
              onClick={(e) => toggler(e)}
              name="4"
            >
              <Link>Submission</Link>
            </li>
          </ul>
        </div>

        <div className="" id="releasetab-container">
          <div className=" row  mt-4 " id="release-tab1">
            <div className="col d-flex align-items-center justify-content-center flex-column">
              <input type="file" className="btn file-input custom-file-input" />
              <p>Artwork guidelines</p>
            </div>
            <div className="col">
              <div>
                <p className="text-muted ">
                  Release Type <span className="required-span">*</span>
                </p>
                <div className="d-flex align-items-center justify-content-around release-type">
                  <p>EP</p>
                  <p>Single</p>
                  <p>Album</p>
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="releaseTitle"
                  required
                  className="d-flex flex-column"
                >
                  <p className="text-muted">
                    Release Title<span className="required-span">*</span>
                  </p>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="release Title"
                    name="releaseTitle"
                  />
                </label>
              </div>
              <div>
                <p className="text-muted">
                  Primary Artist<span className="required-span">*</span>
                </p>
                <div className="d-flex">
                  <select name="primaryArtist" id="" className="form-control">
                    <option value="default">Default</option>
                  </select>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
              <div>
                <p className="text-muted">
                  featuring Artist<span className="required-span">*</span>
                </p>
                <div className="d-flex">
                  <select name="featuringArtist" id="" className="form-control">
                    <option value="default">Default</option>
                  </select>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
              <div>
                <p className="text-muted">
                  Genre<span className="required-span">*</span>
                </p>
                <select name="featuringArtist" id="" className="form-control">
                  <option value="default">Default</option>
                </select>
              </div>
              <div>
                <p className="text-muted">
                  Sub Genre<span className="required-span">*</span>
                </p>
                <input
                  type="text "
                  placeholder="Sub genre"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <p className="text-muted">
                Label Name <span className="required-span">*</span>
              </p>
              <input
                type="text"
                placeholder="Label Name"
                className="form-control"
              />
              <p className="text-muted">
                Release Date<span className="required-span">*</span> <br />
              </p>
              <input
                type="date"
                placeholder="Release Date"
                className="form-control"
              />
              <p className="text-muted">
                pLine<span className="required-span">*</span> <br />
              </p>
              <input type="text" placeholder="Line" className="form-control" />
              <p className="text-muted">
                <CopyrightIcon />
                Line <span className="required-span">*</span>
              </p>
              <input type="text" placeholder="Line" className="form-control" />
              <p className="text-muted">
                UPC/EAN <span className="required-span">*</span>
              </p>
              <input
                type="text"
                placeholder="UPC/EAN"
                className="form-control"
              />
              <br />
              <button className="btn btn-dark form-control">save</button>
            </div>
          </div>
          <div className=" release-tabs" id="release-tab2">
            <Song />
            <Song />
          </div>
          <div className="release-tabs" id="release-tab3">
            <div className="container">
              <p>select audio platform</p>
              <div className="d-flex flex-wrap">
                <div className="platform-icon">
                  <input type="checkbox" />
                  <img
                    src="https://img.icons8.com/color/452/shazam.png"
                    alt=""
                    height="100px"
                    width="100px"
                  />
                </div>
                <div className="platform-icon">
                  <input type="checkbox" />
                  <img
                    src="https://img.icons8.com/color/452/shazam.png"
                    alt=""
                    height="100px"
                    width="100px"
                  />
                </div>
                <div className="platform-icon">
                  <input type="checkbox" />
                  <img
                    src="https://img.icons8.com/color/452/shazam.png"
                    alt=""
                    height="100px"
                    width="100px"
                  />
                </div>
                <div className="platform-icon">
                  <input type="checkbox" />
                  <img
                    src="https://img.icons8.com/color/452/shazam.png"
                    alt=""
                    height="100px"
                    width="100px"
                  />
                </div>
              </div>
              <div className="container text-center">
                <button className="btn btn-outline-dark">submit</button>
              </div>
            </div>
          </div>
          <div className="release-tabs" id="release-tab4">
            <div className="col ">
              <p>song info</p>
              <button className="btn btn-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseCreate;
