import React from "react";

function ReleaseInfo({ album }) {
  console.log(album);
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
    <div className="container m-3">
      {Object.keys(album).map((key, index) => {
        if (
          key === "releaseTitle" ||
          key === "thumbnail" ||
          key === "musicUrl" ||
          key === "earnings" ||
          key === "status"
        )
          return null;
        return (
          <label key={index} style={style.para} className="fs-5">
            <p style={style.span} className="text-muted mr-3">
              {key}
            </p>
            {album[key]}
          </label>
        );
      })}
    </div>
  );
}

export default ReleaseInfo;
