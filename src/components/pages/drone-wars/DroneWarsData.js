import React, { useEffect } from "react";
// import TableauReport from "tableau-react-embed";

const DroneWarsData = () => {
  useEffect(() => {
    console.log("hello");
    const containerDiv = document.getElementById("vizContainer"),
      url =
        "https://public.tableau.com/profile/afraz.ahmad#!/vizhome/DroneWars/Overview",
      options = {
        hideTabs: false,
        onFirstInteractive: function() {
          console.log("Run this code when the viz has finished loading.");
        }
      };
    console.log("byebye");

    new window.tableau.Viz(containerDiv, url, options);

    // const url2 = window.location.url + "&output=embed";
  }, []);

  return (
    <div>
      <div id='vizContainer' />
    </div>

    // <TableauReport url='https://public.tableau.com/profile/afraz.ahmad#!/vizhome/DroneWars/Overview' />
  );
};

export default DroneWarsData;
