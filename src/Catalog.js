import React, { useEffect } from "react";
import { useState } from "react";
import TopHeader from "./TopHeader";
import { firedb } from "./firebaseConfig";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Catalog() {
  const [album, setalbum] = useState([]);
  const [{ user }] = useStateValue();
  const [filter, setfilter] = useState("all");

  useEffect(() => {
    firedb.collection("album").onSnapshot((snapshot) => {
      var a = [];
      snapshot.docs.forEach((doc) => {
        var data = doc.data();

        if (doc.data().email === user.email) {
          data = { ...data, id: doc.id };
          a.unshift(data);
        }
      });
      setalbum(a);
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
            <select
              className="form-control"
              onChange={(e) => setfilter(e.target.value)}
            >
              <option value="all" selected>
                All
              </option>
              <option value="draft" selected>
                Draft
              </option>
              <option value="moderation" selected>
                Moderation
              </option>
              <option value="approved" selected>
                Approved
              </option>
              <option value="live" selected>
                Live
              </option>
            </select>
          </div>
          <div className="col-sm">total Release :{album.length}</div>
        </div>
      </div>
      <br />
      <br />

      <div className="container overflow-scroll">
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
            {album.map((alb, index) => {
              if (filter === "all")
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{alb.releaseTitle}</td>
                    <td>{alb.primaryArtist}</td>
                    <td>{alb.genre}</td>
                    <td>{alb.labelName}</td>
                    <td>0</td>
                    <td>{alb.releaseDate}</td>
                    <td>
                      <Link to={`album/${alb.id}`}>view</Link>
                    </td>
                  </tr>
                );
              else if (filter !== "all" && alb.status === filter)
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{alb.releaseTitle}</td>
                    <td>{alb.primaryArtist}</td>
                    <td>{alb.genre}</td>
                    <td>{alb.labelName}</td>
                    <td>0</td>
                    <td>{alb.releaseDate}</td>
                    <td>
                      <Link to={`album/${alb.id}`}>view</Link>
                    </td>
                  </tr>
                );
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Catalog;
