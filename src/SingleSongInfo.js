import React from "react";

function SingleSongInfo({ song }) {
  const style = {
    para: {
      float: "left",
      height: "50px",
      minWidth: "300px",
      alignText: "center",
    },
    span: {
      width: "100px",
      lineHeight: " 0px",
    },
  };
  return (
    <div className="container">
      {Object.keys(song).map((key, index) => {
        return (
          <label key={index} style={style.para} className="fs-5">
            <p style={style.span} className="text-muted mr-3">
              {key}
            </p>
            {song[key]}
          </label>
        );
      })}
    </div>
  );
}

export default SingleSongInfo;
