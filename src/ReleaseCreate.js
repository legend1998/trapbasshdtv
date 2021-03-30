import TopHeader from "./TopHeader";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Song from "./Song";
import { firedb, firestorage } from "./firebaseConfig";
import { useEffect, useState } from "react";
import ArtistAdd from "./ArtistAdd";
import Platform from "./Platform";
import SongInfo from "./SongInfo";
import placeholder from "./placeholder.png";
import { useStateValue } from "./StateProvider";

function ReleaseCreate() {
  const [{ user }] = useStateValue();
  const [allow, setallow] = useState([1]);

  const [toggle, settoggle] = useState(1);

  const [SongDetail, setSongDetail] = useState({ email: user.email });
  const [Albumid, setAlbumid] = useState(false);
  const [Songnum, Setsongnum] = useState(1);
  const [artist, setartist] = useState([]);
  const [fartist, setfartist] = useState([]);
  const [genre, setgenre] = useState([]);
  const [showArtist, setShowArtist] = useState({ show: false, name: "" });

  console.log(Albumid);

  const submitReleaseinfo = async () => {
    console.log(SongDetail);
    if (Object.keys(SongDetail).length < 12) {
      alert("please fill complete details.");
      return;
    }
    firedb
      .collection("album")
      .add(SongDetail)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setAlbumid(docRef.id);
        setallow([...allow, 2]);
        settoggle(2);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert(error);
      });
  };
  console.log(toggle, allow);
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

  useEffect(() => {
    firedb.collection("primaryartist").onSnapshot((snapshot) => {
      var a = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        if (data.user === user.email) {
          a.push(data);
        }
      });
      setartist(a);
    });

    firedb.collection("featuringartist").onSnapshot((snapshot) => {
      var a = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        if (data.user === user.email) {
          a.push(data);
        }
      });
      setfartist(a);
    });

    firedb.collection("genre").onSnapshot((snapshot) => {
      var a = [];
      snapshot.forEach((snap) => {
        a.push(snap.data());
      });
      setgenre(a);
    });
  }, [user.email]);

  const style = {
    active: {
      backgroundColor: "#c0c0f8",
      color: "black",
    },
    display: toggle === 1 ? "block" : "hidden",
  };

  return (
    <div className="release-create col-sm p-0">
      <div className="top-header-container ">
        <TopHeader heading="Create Release" />
      </div>
      <div className="container-fluid">
        <div className="container-fluid">
          <ul
            className="navbar-nav d-flex flex-row justify-content-center release"
            id="release-nav"
          >
            <li
              className="nav-item flex-fill"
              style={toggle === 1 ? style.active : null}
              onClick={() => {
                settoggle(1);
              }}
            >
              <span>Release Info</span>
            </li>
            <li
              className="nav-item disabled flex-fill"
              style={toggle === 2 ? style.active : null}
              onClick={(e) => {
                if (2 in allow) settoggle(2);
              }}
            >
              <span>Song Info</span>
            </li>
            <li
              className="nav-item disabled flex-fill"
              style={toggle === 3 ? style.active : null}
              onClick={(e) => {
                if (3 in allow) settoggle(3);
              }}
            >
              <span>Platform</span>
            </li>
            <li
              className="nav-item disabled flex-fill"
              style={toggle === 4 ? style.active : null}
              onClick={(e) => {
                settoggle(4);
              }}
            >
              <span>Submission</span>
            </li>
          </ul>
        </div>
        {showArtist.show ? (
          <ArtistAdd artist={showArtist.name} setclose={setShowArtist} />
        ) : null}
        <div className="" id="releasetab-container">
          {toggle === 1 ? (
            <div className=" row  mt-4 " id="release-tab1">
              <div className="col d-flex align-items-center justify-content-center flex-column">
                {SongDetail?.thumbnail ? (
                  <img
                    src={SongDetail?.thumbnail}
                    width="150px"
                    alt="thumbnail"
                  />
                ) : (
                  <div className="file-body">
                    <label htmlFor="file-for">
                      <div className="file-button">
                        <img src={placeholder} alt="" width="220px" />
                      </div>
                    </label>
                    <input
                      type="file"
                      id="file-for"
                      className="file-for"
                      onChange={(e) => imageupload(e)}
                    />
                  </div>
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
                      {artist.map((art, index) => (
                        <option key={index} value={art.name}>
                          {art.name}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() =>
                        setShowArtist({ show: true, name: "primary" })
                      }
                      className="btn btn-primary"
                    >
                      +
                    </button>
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
                      <option value="default" default>
                        select
                      </option>
                      {fartist.map((art, index) => (
                        <option key={index} value={art.name}>
                          {art.name}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() =>
                        setShowArtist({ show: true, name: "featuring" })
                      }
                      className="btn btn-primary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-muted">
                    Genre<span className="required-span">*</span>
                  </p>
                  <select
                    className="form-control"
                    onChange={(e) =>
                      setSongDetail({
                        ...SongDetail,
                        genre: e.target.value,
                      })
                    }
                  >
                    <option value="default">Default</option>
                    {genre.map((g, index) => (
                      <option key={index}>{g.name}</option>
                    ))}
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
                <button
                  onClick={submitReleaseinfo}
                  className="btn btn-dark form-control"
                >
                  save
                </button>
              </div>
            </div>
          ) : null}
          {toggle === 2 ? (
            <div className=" release-tabs" id="release-tab2">
              {Array.from(Array(Songnum)).map((index) => {
                return <Song id={Albumid} key={index} />;
              })}
              <button
                onClick={() => Setsongnum(Songnum + 1)}
                className="btn btn-outline-dark"
              >
                Add more
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  setallow([...allow, 3]);
                  settoggle(3);
                }}
              >
                Proceed
              </button>
            </div>
          ) : null}
          {toggle === 3 ? (
            <div className="release-tabs" id="release-tab3">
              <Platform allow={setallow} toggle={settoggle} />
            </div>
          ) : null}
          {toggle === 4 ? (
            <div className="release-tabs" id="release-tab4">
              {Albumid ? <SongInfo Albumid={Albumid} /> : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ReleaseCreate;
