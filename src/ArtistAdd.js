import React from "react";
import { useState } from "react";
import { firedb } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";


function ArtistAdd({ artist, setclose }) {

  const [{user}] = useStateValue();
  const [Singer, setSinger] = useState({user:user.email});

  const close = () => {
    setclose(false);
  };

  const save = () => {
    if (Object.keys(Singer).length < 3) {
      alert("fill all the details");
      return;
    }
    firedb
      .collection(`${artist}artist`)
      .add( Singer )
      .then((doc) => {
        alert(`${artist} artist added `);
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="artist-add" id="artist-add">
      <div className="artist-container">
        <h4>Add {artist} Artist</h4>
        <div>
          <p className="text-muted">{artist} Artist name</p>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={(e) => setSinger({ ...Singer, name: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">{artist} Artist Apple id</p>
          <input
            type="text"
            className="form-control"
            placeholder="apple id"
            onChange={(e) => setSinger({ ...Singer, appleId: e.target.value })}
          />
        </div>
        <div>
          <p className="text-muted">{artist} Artist Spotify id</p>
          <input
            type="text"
            className="form-control"
            placeholder="spotify id"
            onChange={(e) =>
              setSinger({ ...Singer, spotifyId: e.target.value })
            }
          />
        </div>
        <div>
          <button className="btn btn-outline-success" onClick={save}>
            save
          </button>
          <button className="btn btn-outline-danger" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtistAdd;
