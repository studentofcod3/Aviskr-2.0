import React from "react";
import "../../App.scss";
import styled from "styled-components";

const About = () => {
  const About = styled.div`
    div {
      margin: 0 12rem;
      margin-bottom: 3rem;
      padding: 6rem 4rem 8rem 4rem;
      font-size: 1.4rem;
      background: #fff;
    }
  `;
  return (
    <About>
      <div>
        <p>
          With a name based on the Sanskrit (आविष्कृत) word meaning ‘to reveal’
          or ‘to make visible’, Aviskr seeks to spot patterns and discrepancies
          within the world of international affairs and foreign policy -
          increasing the transparency and accountability of actors on the global
          stage. Through a data driven, analytical approach combined with
          nuanced investigative analysis, Aviskr aims to embody the successful
          union of data and policy prescription.
        </p>
        <p>
          Work completed under the Aviskr moniker has been lobbied in EU
          Parliament, the UN General Assembly and various Think Tanks in
          Westminster. Aviskr have also lectured at King’s College London,
          alongside consultation with outlets and institutes based in Europe,
          the US and MENA regions.
        </p>
        <p>
          Aviskr was founded in 2018 by three independent analysts united in
          their philanthropic mission to unmask the bureaucratic nature of vital
          information and trends, in order to bring a greater clarity to the
          public in an accessible format.
        </p>
        <p>
          Merging the statistics and written commentary with engaging,
          interactive artistic work allows a greater depth of understanding and,
          most importantly, conveys the message we look to share in its simplest
          form:
        </p>
        <p>Signs and symbols rule the world, not words, nor laws.</p>
      </div>
    </About>
  );
};

export default About;
