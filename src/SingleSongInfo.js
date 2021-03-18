import React from "react";

function SingleSongInfo({ song }) {
  return (
    <div className="container">
      {Object.keys(song).map((key) => {
        return (
          <p>
            {key} : {song.key}
          </p>
        );
      })}
    </div>
  );
}

export default SingleSongInfo;
