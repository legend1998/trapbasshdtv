import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Chart from "react-google-charts";

function Stats({ data }) {
  const [Data, setData] = useState([["Platform", "streams"]]);
  const style = {
    medheight: {
      minHeight: "70vh",
    },
  };

  useEffect(() => {
    var a = [];
    data.map(function (d) {
      a.unshift([d.platform, d.stream]);
    });
    setData([...Data, ...a]);
  }, []);

  console.log(Data);
  return (
    <div
      style={style.medheight}
      className="d-flex align-items-center justify-content-center"
    >
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart ...</div>}
        data={Data}
        options={{
          title: "Total Streams",
          // Just add this option
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default Stats;
