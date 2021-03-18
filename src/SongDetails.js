import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";
import { firedb } from "./firebaseConfig";

function SongDetails({ close, albumId }) {
  const [Song, setSong] = useState({});

  const closetab = () => {
    close(false);
  };

  const updatesongDetails = () => {
    if (Object.keys(Song).length < 20) {
      alert("fill all the details");
      return;
    }
    firedb
      .collection("album")
      .doc(albumId)
      .collection("song")
      .add(Song)
      .then((doc) => {
        alert("added details.");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="song-detail-container " id="song-detail-container">
      <div className="song-detail text-left">
        <CancelIcon className="cancelbutton" onClick={closetab} />
        <p>Add Details</p>
        <div>
          <p className="text-muted">
            Track version <span className="required-span">*</span>
          </p>
          <div className="d-flex justify-content-around">
            <label htmlFor="">
              <input
                type="radio"
                onChange={(e) =>
                  setSong({ ...Song, trackVersion: e.target.value })
                }
                name="track-version"
                value="original"
              />
              <span>Original</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="track-version"
                value="karaoke"
                onChange={(e) =>
                  setSong({ ...Song, trackVersion: e.target.value })
                }
              />
              <span>karaoke</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="track-version"
                value="medley"
                onChange={(e) =>
                  setSong({ ...Song, trackVersion: e.target.value })
                }
              />
              <span>medley</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="track-version"
                value="Cover"
                onChange={(e) =>
                  setSong({ ...Song, trackVersion: e.target.value })
                }
              />
              <span>Cover</span>
            </label>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Title <span className="required-span">*</span>
          </p>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setSong({ ...Song, title: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">Version/Subtitle</p>
          <input
            type="text"
            placeholder="title "
            onChange={(e) => setSong({ ...Song, version: e.target.value })}
          />
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
                setSong({ ...Song, primaryArtist: e.target.value })
              }
            >
              <option value="default">Default</option>
            </select>
          </div>
        </div>
        <div>
          <p className="text-muted">Featuring Artist</p>
          <div className="d-flex">
            <select
              name="featuringartist"
              id=""
              className="form-control"
              onChange={(e) =>
                setSong({ ...Song, featuringArtist: e.target.value })
              }
            >
              <option value="default">Default</option>
            </select>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Auther <span className="required-span">*</span>
          </p>
          <input
            type="text"
            placeholder="Auther "
            onChange={(e) => setSong({ ...Song, auther: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">
            Composer <span className="required-span">*</span>
          </p>
          <input
            type="text"
            placeholder="composer "
            onChange={(e) => setSong({ ...Song, composer: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">
            Producer <span className="required-span">*</span>
          </p>
          <input
            type="text"
            placeholder="Producer "
            onChange={(e) => setSong({ ...Song, producer: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">
            Line <span className="required-span">*</span>
          </p>
          <input
            type="text"
            placeholder="line "
            onChange={(e) => setSong({ ...Song, pline: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">
            Production year <span className="required-span">*</span>
          </p>
          <input
            type="year"
            placeholder="production year "
            onChange={(e) =>
              setSong({ ...Song, productionYear: e.target.value })
            }
          />
        </div>
        <div>
          <p className="text-muted">
            publisher <span className="required-span">*</span>
          </p>
          <input
            type="text"
            placeholder="publisher"
            onChange={(e) => setSong({ ...Song, publisher: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">
            Have your own ISRC <span className="required-span">*</span>
          </p>
          <div className="d-flex justify-content-around">
            <label htmlFor="">
              <input
                type="radio"
                name="isrc"
                value="yes"
                id=""
                onChange={(e) => setSong({ ...Song, isrc: e.target.value })}
              />
              Yes
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="isrc"
                id=""
                value="no"
                onChange={(e) => setSong({ ...Song, isrc: e.target.value })}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Genre <span className="required-span">*</span>
          </p>
          <select
            name=""
            id=""
            onChange={(e) => setSong({ ...Song, genre: e.target.value })}
          >
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Sub-Genre <span className="required-span">*</span>
          </p>
          <select
            name=""
            id=""
            onChange={(e) => setSong({ ...Song, subGenre: e.target.value })}
          >
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Price-Tier <span className="required-span">*</span>
          </p>
          <select
            name=""
            id=""
            onChange={(e) => setSong({ ...Song, priceTier: e.target.value })}
          >
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Explicit Version <span className="required-span">*</span>
          </p>
          <div className="d-flex justify-content-around">
            <label htmlFor="">
              <input
                type="radio"
                name="explicit-version"
                value="yes"
                onChange={(e) =>
                  setSong({ ...Song, explicitIsrc: e.target.value })
                }
              />
              Yes
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="explicit-version"
                id=""
                value="no"
                onChange={(e) =>
                  setSong({ ...Song, explicitIsrc: e.target.value })
                }
              />
              No
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="expllicit-version"
                id=""
                value="cleaned"
                onChange={(e) =>
                  setSong({ ...Song, explicitIsrc: e.target.value })
                }
              />
              Cleaned
            </label>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Track Title Language <span className="required-span">*</span>
          </p>
          <select
            name=""
            id=""
            onChange={(e) =>
              setSong({ ...Song, trackTitleLanguage: e.target.value })
            }
          >
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Lyric language <span className="required-span">*</span>
          </p>
          <select
            name=""
            id=""
            onChange={(e) =>
              setSong({ ...Song, lyricLanguage: e.target.value })
            }
          >
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Lyrics<span className="required-span">*</span>
          </p>
          <input
            type="file"
            className="form-controrl"
            placeholder="Lyrics"
            onChange={(e) => setSong({ ...Song, lyrics: e.target.files[0] })}
          />
        </div>
        <div>
          <p className="text-muted">
            Caller Tune Timing<span className="required-span">*</span>
          </p>
          <input
            type="time"
            placeholder="HH:MM:SS"
            onChange={(e) =>
              setSong({ ...Song, callerTuneTime: e.target.value })
            }
          />
        </div>
        <br />
        <br />
        <div className="d-flex">
          <button
            onClick={updatesongDetails}
            className="btn btn-outline-success"
          >
            Save
          </button>
          <button onClick={closetab} className="btn btn-outline-danger">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
