import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import ReactImageAppear from "react-image-appear";
import "../../../bootstrap/bootstrap-4.3.1-dist/css/bootstrap.css";

const ChinaArticle = () => {
  return (
    <div id='ChinaArticle'>
      <div id='article-container'>
        <Carousel interval={0}>
          <Carousel.Item>
            <div id='page'>
              <h3>Introduction</h3>
              China’s ascension over the last decade has raised significant
              questions for international security. Argued through a realist
              prism, China’s economic, military and cultural power marks the end
              of the United States’ unparalleled hegemonic global position after
              the end of the Cold War. Indeed, China is increasingly being
              viewed as a contending pole of attraction offering an alternative
              to the political and economic governance model of the West . The
              global balance of power is shifting, with this bringing an acute
              focus on whether the future will be characterized by conflict or
              cooperation between the US and China. There are compelling reasons
              to view the two countries as competing powers in the East and
              West; one diminishing, another rising. The Thucydides’ Trap,
              proposed by Graham Allison, states that the two key drivers that
              makes war inevitable allegedly being ‘the rising power’s growing
              entitlement, sense of its importance, and demand for greater say
              and sway, on the one hand, and the fear, insecurity, and
              determination to defend the status quo which engenders in the
              established power, on the other’ . Considering this all, through
              an analysis of Artificial Intelligence, the Belt & Road Initiative
              and Trade & Cyber conflict, this policy proposal will assess the
              pitfalls and problems of the current outlook prescribed by the US
              - seeking to develop understanding of why the macro position
              subscribed to by US at present isn’t sustainable, and what
              measures should be taken to alleviate the current breakdown in
              relations between the two nations.
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id='page'>
              <h3>China & Artificial Intelligence</h3>
              Data will not necessarily translate to power in a world awash in
              data; the true value lays in the actionable insights that can be
              acquired through analytics. One of the major challenges companies
              and nation states face alike is the ability to share and collate
              data sets among systems in an automated way . Brands, owners,
              operators and distribution partners are often cautious with the
              level of data they share among each other. In addition, it takes a
              specialised skill set to turn large sets of data into actionable
              insights, or analytics. Knowledge, economic strength and security
              will flow disproportionately to nations that are most effectively
              able to engage with data , which is evidenced in the creation of
              the BAT triumvirate of technology, media and e-commerce by the
              Chinese government: Baidu, Alibaba and Tencent.
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ChinaArticle;
