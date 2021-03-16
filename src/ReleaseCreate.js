import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Song from "./Song";
import { firedb, firestorage } from "./firebaseConfig";
import { useState } from "react";

function ReleaseCreate() {
  const [SongDetail, setSongDetail] = useState(null);

  const imageupload = (e) => {
    var image = e.target.files[0];
    if (!image) return;

    var storageRef = firestorage.ref();
    storageRef
      .child(`thumbnail/${image.name + Date.now()}`)
      .put(image)
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then(function (downloadURL) {
            setSongDetail({ ...SongDetail, thumbnail: downloadURL });
            console.log("File available at", downloadURL);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };
  console.log(SongDetail);
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
              {SongDetail.thumbnail ? (
                <img src={SongDetail.thumbnail} width="150px" alt="thumbnail" />
              ) : (
                <input
                  type="file"
                  className="btn file-input custom-file-input"
                  onChange={(e) => imageupload(e)}
                />
              )}
              <p>Artwork guidelines</p>
            </div>
            <div className="col">
              <div>
                <p className="text-muted ">
                  Release Type <span className="required-span">*</span>
                </p>
                <div className="d-flex align-items-center justify-content-around release-type">
                  <label>
                    <input
                      type="radio"
                      name="release-type"
                      id=""
                      value="EP"
                      onChange={(e) =>
                        setSongDetail({
                          ...SongDetail,
                          releaseType: e.target.value,
                        })
                      }
                    />
                    Ep
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="release-type"
                      id=""
                      value="Single"
                      onChange={(e) =>
                        setSongDetail({
                          ...SongDetail,
                          releaseType: e.target.value,
                        })
                      }
                    />
                    Single
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="release-type"
                      id=""
                      value="Album"
                      onChange={(e) =>
                        setSongDetail({
                          ...SongDetail,
                          releaseType: e.target.value,
                        })
                      }
                    />
                    Album
                  </label>
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
                    onChange={(e) =>
                      setSongDetail({
                        ...SongDetail,
                        releaseTitle: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div>
                <p className="text-muted">
                  Primary Artist<span className="required-span">*</span>
                </p>
                <div className="d-flex">
                  <select
                    name="primaryArtist"
                    id=""
                    className="form-control"
                    onChange={(e) =>
                      setSongDetail({
                        ...SongDetail,
                        primaryArtist: e.target.value,
                      })
                    }
                  >
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
                  <select
                    name="featuringArtist"
                    id=""
                    className="form-control"
                    onChange={(e) =>
                      setSongDetail({
                        ...SongDetail,
                        featuringArtist: e.target.value,
                      })
                    }
                  >
                    <option value="default">Default</option>
                  </select>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
              <div>
                <p className="text-muted">
                  Genre<span className="required-span">*</span>
                </p>
                <select
                  name="featuringArtist"
                  id=""
                  className="form-control"
                  onChange={(e) =>
                    setSongDetail({
                      ...SongDetail,
                      genre: e.target.value,
                    })
                  }
                >
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
                  onChange={(e) =>
                    setSongDetail({
                      ...SongDetail,
                      subGenre: e.target.value,
                    })
                  }
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
                onChange={(e) =>
                  setSongDetail({
                    ...SongDetail,
                    labelName: e.target.value,
                  })
                }
              />
              <p className="text-muted">
                Release Date<span className="required-span">*</span> <br />
              </p>
              <input
                type="date"
                placeholder="Release Date"
                className="form-control"
                onChange={(e) =>
                  setSongDetail({
                    ...SongDetail,
                    releaseDate: e.target.value,
                  })
                }
              />
              <p className="text-muted">
                pLine<span className="required-span">*</span> <br />
              </p>
              <input
                type="text"
                placeholder="Line"
                className="form-control"
                onChange={(e) =>
                  setSongDetail({
                    ...SongDetail,
                    pLine: e.target.value,
                  })
                }
              />
              <p className="text-muted">
                <CopyrightIcon />
                Line <span className="required-span">*</span>
              </p>
              <input
                type="text"
                placeholder="Line"
                className="form-control"
                onChange={(e) =>
                  setSongDetail({
                    ...SongDetail,
                    cLine: e.target.value,
                  })
                }
              />
              <p className="text-muted">
                UPC/EAN <span className="required-span">*</span>
              </p>
              <input
                type="text"
                placeholder="UPC/EAN"
                className="form-control"
                onChange={(e) =>
                  setSongDetail({
                    ...SongDetail,
                    upcEan: e.target.value,
                  })
                }
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
