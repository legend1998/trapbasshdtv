import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { firedb } from "./firebaseConfig";
import PlatformCard from "./PlatformCard";

function Platform({ allow, toggle }) {
  const [platforms, setplatforms] = useState([]);
  useEffect(() => {
    firedb.collection("platforms").onSnapshot((snapshot) => {
      setplatforms(snapshot.docs);
    });
  }, []);
  return (
    <div className="container">
      <p>select audio platform</p>
      <div className="d-flex flex-wrap">
        {platforms.map((platform, index) => {
          return (
            <PlatformCard
              linkimg={platform.linkimg}
              name={platform.name}
              key={index}
            />
          );
        })}
        <PlatformCard
          linkimg="https://img.icons8.com/color/452/shazam.png"
          name="shazam"
        />
      </div>
      <div className="container text-center">
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            allow([1, 2, 3, 4]);
            toggle(3);
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Platform;
