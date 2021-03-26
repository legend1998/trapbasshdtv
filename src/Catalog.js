import React, { useEffect } from "react";
import { useState } from "react";
import TopHeader from "./TopHeader";
import { firedb } from "./firebaseConfig";
import { Link } from "react-router-dom";

function Catalog() {
  const [album, setalbum] = useState([]);

  useEffect(() => {
    firedb.collection("album").onSnapshot((snapshot) => {
      var a =[]
      snapshot.docs.forEach((doc)=>{
        var data = doc.data();
        data = {...data, id:doc.id};
        a.unshift(data);
      })
      setalbum(a);
      console.log(album);

    });
  }, []);

  return (
    <div className="catalog   col-sm p-0">
      <div className="top-header-container">
        <TopHeader heading="Catalog" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <input
              type="text"
              className="form-control"
              placeholder="search keywords"
            />
          </div>
          <div className="col-sm">
            <select name="" id="" className="form-control">
              <option value="default" defaultValue>
                default
              </option>
            </select>
          </div>
          <div className="col-sm">total Release :</div>
        </div>
      </div>
      <br />
      <br />

      <div className="container">
        <table className="table table-collapse">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Artist Name</th>
              <th>Genre</th>
              <th>Label</th>
              <th># of tracks</th>
              <th>Release date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {album.map((alb, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{alb.releaseTitle}</td>
                <td>{alb.primaryArtist}</td>
                <td>{alb.genre}</td>
                <td>{alb.labelName}</td>
                <td>0</td>
                <td>{alb.releaseDate}</td>
                <td>
                  <Link to={`/album_id:${alb.id}`}>view</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Catalog;
