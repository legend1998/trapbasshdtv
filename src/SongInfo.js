import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { firedb } from "./firebaseConfig";
import SingleSongInfo from "./SingleSongInfo";

function SongInfo({ Albumid }) {
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    if (Albumid) {
      firedb
        .collection("album")
        .doc(Albumid)
        .collection()
        .onSnapshot((snapshot) => {
          setsongs.length(snapshot.docs);
        });
    }
  }, [Albumid]);

  return (
    <div>
      {songs.map((song, index) => {
        return <SingleSongInfo song={song} key={index} />;
      })}
      <button className="btn btn-dark">Submit</button>
    </div>
  );
}

export default SongInfo;
