import React, { useState } from "react";
import { firedb, firestorage } from "./firebaseConfig";
import SongDetails from "./SongDetails";

function Song({ id }) {
  const [showSongdetails, setshowSongdetails] = useState(false);
  const [progress, setprogress] = useState(0);
  const [songid, setSongid] = useState(null);
  const [musicFile, setmusicFile] = useState(false);

  const songupload = (e) => {
    if (!musicFile) return;
    var storageref = firestorage.ref();
    var uploadTask = storageref
      .child(`music/${musicFile.name + Date.now()}`)
      .put(musicFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any tim the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(Math.ceil(progress));
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          firedb
            .collection("album")
            .doc(id)
            .collection("song")
            .add({
              musicUrl: downloadURL,
            })
            .then((doc) => {
              setSongid(doc.id);
            })
            .catch((e) => {
              console.log(e);
            });
        });
      }
    );
  };

  console.log(songid);

  return (
    <div className="col m-2 p-2 text-center">
      {showSongdetails ? (
        <SongDetails albumId={id} close={setshowSongdetails} songId={songid} />
      ) : null}
      <div>{progress === 0 || progress === 100 ? null : progress}</div>
      <label className="text-muted" htmlFor="song">
        select audio asset
      </label>
      <div className="container border p-4  ">
        <input
          type="file"
          accept=".mp3"
          onChange={(e) => setmusicFile(e.target.files[0])}
          className=" m-2 border form-control"
          placeholder="upload song mp3"
        />
        <button className="btn btn-dark" onClick={songupload}>
          upload
        </button>
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
