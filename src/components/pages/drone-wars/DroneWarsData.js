import React, { useEffect } from "react";
import styled from "styled-components";

const DroneWarsData = () => {
  useEffect(() => {
    let containerDiv = document.getElementById("vizContainer"),
      url = "https://public.tableau.com/views/DroneWars/Overview",
      options = {
        hideTabs: false,
        width: "70%",
        height: "91vh",
        onFirstInteractive: function() {
          console.log("Run this code when the viz has finished loading.");
        }
      };

    new window.tableau.Viz(containerDiv, url, options);
  }, []);

  // Styling
  const Div = styled.div`
    #vizContainer {
      display: flex;
      justify-content: center;
    }
  `;

  return (
    <Div>
      <div id='vizContainer' />
    </Div>

    // <TableauReport url='https://public.tableau.com/profile/afraz.ahmad#!/vizhome/DroneWars/Overview' />
  );
};

export default DroneWarsData;
