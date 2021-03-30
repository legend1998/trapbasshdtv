import React, { useEffect } from "react";
import { useState } from "react";
import { firedb } from "./firebaseConfig";
import ReleaseInfo from "./ReleaseInfo";

function SongCatalog({ id }) {
  const [song, setsong] = useState([]);

  const style = {
    medheight: {
      height: "50vh",
    },
  };

  useEffect(() => {
    firedb
      .collection("album")
      .doc(id)
      .collection("song")
      .onSnapshot((snapshot) => {
        var a = [];
        snapshot.docs.forEach((doc) => {
          var data = doc.data();
          a.unshift(data);
        });
        setsong(a);
      });
  }, [id]);
  return (
    <div className="container m-3">
      {song.length == 0 ? (
        <div
          style={style.medheight}
          className="container d-flex align-items-center justify-content-center "
        >
          <p className="fs-3"> Empty songs </p>
        </div>
      ) : null}
      {song.map((s, index) => (
        <ReleaseInfo album={s} key={index} />
      ))}
    </div>
  );
}

export default SongCatalog;
