import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DroneWarsData = () => {
  const [tableauWidthState, setTableauWidth] = useState({
    tableauWidth: "100%"
  });

  const { tableauWidth } = tableauWidthState;

  useEffect(() => {
    let containerDiv = document.getElementById("vizContainer"),
      url = "https://public.tableau.com/views/DroneWars/Overview",
      options = {
        hideTabs: false,
        width: "100vw",
        height: "90vh",
        onFirstInteractive: function() {
          console.log("Run this code when the viz has finished loading.");
        }
      };

    new window.tableau.Viz(containerDiv, url, options);
  }, []);

  const maxWidth = window.matchMedia("(max-width: 767px)");
  const minWidth = window.matchMedia("(min-width: 1024px)");

  // setTimeout(
  //   (window.onload = () => {
  //     if (maxWidth.matches) {
  //       // SMALL SCREENS
  //       setTableauWidth({ tableauWidth: "10%" });
  //     } else {
  //       // MEDIUM SCREENS
  //       setTableauWidth({ tableauWidth: "100vw" });
  //     }

  //     if (minWidth.matches) {
  //       // LARGE SCREENS
  //       setTableauWidth({ tableauWidth: "70%" });
  //     }
  //   }),
  //   5000
  // );
  // window.onresize = () => {
  //   if (maxWidth.matches) {
  //     // SMALL SCREENS
  //     setTableauWidth({ tableauWidth: "10%" });
  //   } else {
  //     // MEDIUM SCREENS
  //     setTableauWidth({ tableauWidth: "100vw" });
  //   }

  //   if (minWidth.matches) {
  //     // LARGE SCREENS
  //     setTableauWidth({ tableauWidth: "70%" });
  //   }
  // };

  // Styling
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #ffd700;

    .message-container {
      display: none;
      text-align: center;
    }
    #vizContainer {
      overflow: scroll;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
    }

    @media (max-width: 767px) {
      .message-container {
        display: block;
        margin: 3rem 4rem;
        margin-bottom: 65%;
      }
      #vizContainer {
        display: none;
      }
    }

    @media (min-width: 1024px) {
      #vizContainer {
        margin-top: 6rem;
        overflow: hidden;
      }
    }
  `;

  return (
    <Div>
      <div className='message-container'>
        <h3>
          This dashboard is in the final stages of development and can currently
          only be viewed on larger screens
        </h3>
      </div>
      <div id='vizContainer' />
    </Div>

    // <TableauReport url='https://public.tableau.com/profile/afraz.ahmad#!/vizhome/DroneWars/Overview' />
  );
};

export default DroneWarsData;
