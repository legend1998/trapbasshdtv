import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { firedb } from "./firebaseConfig";
import ReleaseInfo from "./ReleaseInfo";
import SongCatalog from "./SongCatalog";
import Stats from "./Stats";
import TopHeader from "./TopHeader";

function ViewCatalogItem({ item }) {
  const [Album, setAlbum] = useState({});
  const [Stream, setStream] = useState([]);
  const [tabs, settabs] = useState(1);
  const params = useParams();
  useEffect(() => {
    firedb
      .collection("album")
      .doc(params.id)
      .get()
      .then((doc) => {
        setAlbum(doc.data());
      })
      .catch((e) => {
        console.log(e);
      });

    firedb
      .collection("album")
      .doc(params.id)
      .collection("streams")
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((snap) => {
          var a = [];
          snapshot.docs.forEach((doc) => {
            a.unshift(doc.data());
          });
          setStream(a);
        });
      });
  }, []);

  const style = {
    heading: {
      margin: "20px 0px 20px 20px",
    },
    active: {
      backgroundColor: "#c0c0f8",
      color: "black",
    },
    medheight: {
      height: "50vh",
    },
  };
  return (
    <div className=" col-sm p-0">
      <div className="top-header-container ">
        <TopHeader heading="Catalog" />
      </div>
      <h4 style={style.heading}>
        {Album.releaseTitle}
        <span className="bg-warning border rounded m-4 p-2 text-muted ">
          {Album?.status ? "pending" : "incomplete"}
        </span>
      </h4>
      <div className="">
        <div
          className=" d-flex align-items-center text-center bg-light"
          id="itemTab"
        >
          <span
            className="flex-fill"
            style={tabs === 1 ? style.active : null}
            onClick={() => settabs(1)}
          >
            Release info
          </span>
          <span
            className="flex-fill"
            style={tabs === 2 ? style.active : null}
            onClick={() => settabs(2)}
          >
            Song info
          </span>
          <span
            className="flex-fill"
            style={tabs === 3 ? style.active : null}
            onClick={() => settabs(3)}
          >
            Earnings
          </span>
          <span
            className="flex-fill"
            style={tabs === 4 ? style.active : null}
            onClick={() => settabs(4)}
          >
            Stats
          </span>
        </div>

        {tabs === 1 ? <ReleaseInfo album={Album} /> : null}
        {tabs === 2 ? <SongCatalog id={params.id} /> : null}
        {tabs === 3 ? (
          <div
            className="container border d-flex align-items-center justify-content-center"
            style={style.medheight}
          >
            <h2 className="text-muted fs-2">
              Total Earnings :
              <span className=" text-dark">
                {Album?.earnings}
                <i class="fas fa-rupee-sign fa-sm m-2"></i>
              </span>
            </h2>
          </div>
        ) : null}
        {tabs === 4 ? <Stats data={Stream} /> : null}
      </div>
    </div>
  );
}

export default ViewCatalogItem;
