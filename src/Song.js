import React, { useState } from "react";
import SongDetails from "./SongDetails";

function Song() {
  const [showSongdetails, setshowSongdetails] = useState(false);

  return (
    <div className="col m-2 p-2 text-center">
      {showSongdetails ? <SongDetails close={setshowSongdetails} /> : null}

      <label className="text-muted" htmlFor="song">
        select audio asset
      </label>
      <div className="container border p-4  ">
        <input
          type="file"
          className=" m-2 border form-control"
          placeholder="upload song mp3"
        />
        <button className="btn btn-dark"> upload </button>
        <button
          className=" btn btn-outline-dark"
          onClick={(e) => setshowSongdetails(true)}
        >
          Edit Song Detail
        </button>
      </div>
    </div>
  );
}

export default Song;
