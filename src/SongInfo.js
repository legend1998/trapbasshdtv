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
          var a = [];
          snapshot.docs.forEach((doc) => {
            var data = doc.data();
            data = { ...data, id: doc.id };
            a.unshift(data);
          });
          setsongs(a);
        });
    }
  }, [Albumid]);

  console.log(songs);

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
