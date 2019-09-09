import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Link as SmoothLink, Element } from 'react-scroll';
import smoothscroll from "smoothscroll-polyfill";


import fig1 from "../../../images/droneWarfare/drone-figures/fig1.png";
import fig2 from "../../../images/droneWarfare/drone-figures/fig2.png";
import fig3 from "../../../images/droneWarfare/drone-figures/fig3.png";
import fig4 from "../../../images/droneWarfare/drone-figures/fig4.png";
import poster from "../../../images/droneWarfare/Hero/drone-full.jpg";
import posterMin from "../../../images/droneWarfare/Hero/drone-full-min.jpg";

// import Image3 from "../../Utilities/Image3";
// import Image2 from "../../Utilities/Image2";
import ReactImageAppear from "react-image-appear";

import FloatingBtn from "../../Utilities/FloatingBtn";




const DroneWarsArticle = () => {


  // States
  const [ShowcaseHeight, setShowcaseHeight] = useState({
    showcaseHeight: "92vh"
  });
  const [ShortcutBtnsToggle, setToggleState] = useState({
    shortcutsClosed: "block",
    shortcutsOpen: "none"
  }); 
  const [ShortcutBtns, setShortcutState] = useState({
    position: "static",
    shortcutBtnsDisplay: "flex",
    shortcutBtnsMinDisplay: "none"
  });
  // const [State, setState] = useState({
  //   pos: function(){
  //     const SubButtons = document.querySelector('#sub-btns-marker')
  
  //     var rect = SubButtons.getBoundingClientRect()
      
  //     return rect
  //   }
  // })

  // const { pos } = State;
  
  // Destructuring
  const {showcaseHeight} = ShowcaseHeight;
  const { shortcutsClosed, shortcutsOpen } = ShortcutBtnsToggle;
  const { position, shortcutBtnsDisplay, shortcutBtnsMinDisplay } = ShortcutBtns;


  smoothscroll.polyfill();

  const maxWidth = window.matchMedia("(max-width: 767px)");
  const minWidth = window.matchMedia("(min-width: 1024px)");

  // window.onresize = () => {
  //   if (maxWidth.matches) {
  //     setShowcaseHeight({ showcaseHeight: "92vh"});
  //   } else {
  //     setShowcaseHeight({ showcaseHeight: "110vh" });
  //   }

  //   if (minWidth.matches){
  //     setShowcaseHeight({ showcaseHeight: "130vh" });
  //   }   
  // };
  

  // window.onload = () => {
  //   if (maxWidth.matches) {
  //     setShowcaseHeight({ showcaseHeight: "92vh"});
  //   } else {
  //     setShowcaseHeight({ showcaseHeight: "130vh" });
  //   }

  //   if (minWidth.matches){
  //     setShowcaseHeight({ showcaseHeight: "150vh" });
  //   }
  // };

  // const scrollEvent = e => {
  //   // console.log("scroll");
  //   e.preventDefault();
    
  //   setShortcutState({
  //     position: "static",
  //     shortcutBtnsDisplay: "none",
  //     shortcutBtnsMinDisplay: "flex"
  //   });
    
  //   setToggleState({
  //     shortcutsClosed: "block",
  //     shortcutsOpen: "none"
  //   }); 
    
  //   const SubButtons = document.querySelector('#sub-btns-marker');

  //   const Div = document.querySelector('#DroneWars');

  //   Div.addEventListener("scroll", scrollEvent);
    
  //   var rect = SubButtons.getBoundingClientRect();

  //   if(
  //           rect.top <= 48 && position === "static"
  //           //  &&
  //           // rect.left >= 0 &&
  //           // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //           // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //       ){
  //         setShortcutState({
  //           position: "fixed", 
  //           shortcutBtnsDisplay: "none",
  //           shortcutBtnsMinDisplay: "flex",
  //           })
  //       }
        
  //       if (rect.top > 48) {
  //         setShortcutState({
  //           position: "static",
  //           shortcutBtnsDisplay: "flex",
  //           shortcutBtnsMinDisplay: "none",
  //       })
  //       }

  //   window.removeEventListener('scroll', scrollEvent);
  // }

  
  // useEffect(()=>{

  //     // const scroll = () => {
  //     //   const SubButtons = document.querySelector('#sub-btns-marker');
  
        
  //     //   SubButtons.addEventListener("scroll", scrollEvent);
  //     // }

  //     window.addEventListener('scroll', scrollEvent);



  //   //   if(
  //   //       rect.top <= 48 && position === "static"
  //   //       //  &&
  //   //       // rect.left >= 0 &&
  //   //       // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //   //       // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   //   ){
  //   //     setShortcutState({
  //   //       position: "fixed", 
  //   //       shortcutBtnsDisplay: "none",
  //   //       shortcutBtnsMinDisplay: "flex",
  //   //       })
  //   //   }
    
  //   //   if (rect.top > 48) {
  //   //     setShortcutState({
  //   //       position: "static",
  //   //       shortcutBtnsDisplay: "flex",
  //   //       shortcutBtnsMinDisplay: "none",
  //   //     })
  //   //   }

  //   // window.removeEventListener('scroll', scrollEvent);


  // },[]);

  const toggleShortcuts = () => {
    if (shortcutBtnsDisplay === "none"){
      setShortcutState({
        position: "fixed",
        shortcutBtnsDisplay: "flex",
        shortcutBtnsMinDisplay: "flex",
      });

      setToggleState({
        shortcutsClosed: "none",
        shortcutsOpen: "block"
      });


    }else{
      setShortcutState({
        shortcutBtnsDisplay: "none",
        shortcutBtnsMinDisplay: "flex",
      });

      setToggleState({
        shortcutsClosed: "block",
        shortcutsOpen: "none"
      });

    }
  }

  const closeShortcutMenu = () => {
    if (shortcutBtnsDisplay === "flex"){
      setShortcutState({
        position: "fixed",
        shortcutBtnsDisplay: "none",
        shortcutBtnsMinDisplay: "flex",
        showcaseHeight
      })
    }
  }

  const Div = styled.div`
    border: solid 2px #000;
    border-top: none;
    border-bottom: none;

    .showcaseContainer{
      height: 110vh;
      width: auto;

      .image-container{
        background: #000;
        width: auto;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;

        img{
          height: 100%;
        }
      }
    }

    #subtitle-btns{
      background: #000;
      width: 100%;

      #subtitle-btns-min{
        display: ${shortcutBtnsMinDisplay};
        position: fixed;
        top: 3rem;
        height: 1rem;
        justify-content: space-around;
        text-align: center;
        padding: 0;
        margin: 0;
        background: #000;
        width: 100%;
        
        #button{
          width: 100%;
          height: 100%;
          
          :hover{
            cursor: auto;
          }

          .shortcuts-open, .shortcuts-closed{
            background: #fff;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
            

            /* Arrow lines */
            :before,
            :after {
              content: "";
              position: absolute;
              z-index: 1;
              top: 0.2rem;
              width: 1.9px;
              height: 0.7rem;
              background: inherit;
            }
          }

          .shortcuts-open{
            display: ${shortcutsOpen};

            :before {
              transform: rotate(45deg) translate(-3px, 2px);
            }

            :after {
              transform: rotate(-45deg) translate(3px, 2px);
            }
          }

          .shortcuts-closed{
            display: ${shortcutsClosed};

            :before {
              transform: rotate(45deg) translate(6px, 1px);
              top: -0.2rem;

            }

            :after {
              transform: rotate(-45deg) translate(-6px, 1px);
              top: -0.2rem;

            }
          }
        }
      }
      
      #subtitle-btns-max{
        display: ${shortcutBtnsDisplay};
        padding: 0.8rem 2rem;
        justify-content: space-around;
        position: ${position};
        top: 4rem;
        background: #000;
        width: 100%;

        a{
          color: #fff;
          line-height: 1.5;
          :hover{
            // color: #ffd700;
          }
        }
      }
    }

    .drone-article{
      padding: 3rem 10rem;
      .date{
        display: inline-block;
        margin-bottom: 2.5rem;
        div{
          border-bottom: solid 1.5px #000;
          
          :last-child{
            border-bottom: none;
          }
        }
      }

      .drone-title{
        .section-title{
          font-size: 4rem;
          margin:0;
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .section-title-sub{
          font-size: 2rem;
          margin: 0;
          padding-bottom: 2.4rem;
        }

      }

      .drone-article-body{
        padding: 1rem 5.5rem;

        .drone-article-text{
          font-size: 1.5rem;

          #article-advice{
            color: #bbb;
            font-style: italic;
          }

          .heading{
            border-bottom: 2px solid #000;
            margin-top: 8rem;
            margin-bottom: 1.3rem;
          }

          div{
            p{
              .italic{
                font-style: italic
              }
            }
          }

          .figures{
            margin: 6rem 0;
            img{
              width: 100%;
              height: 100%;
            }

            span{
              font-size: 1rem;
            }
          }
        }

      }
    }

    @media (max-width: 767px){
      .showcaseContainer{
        height: 92vh;
      }
      #subtitle-btns{
        overflow: hidden;
        div{
          flex-direction: column;
          align-items: center;

          a{
            margin: 0.5rem;
            cursor: pointer;
          }
        }
      }

      .drone-article{
        padding: 3rem 3rem;
        .date{
          margin-bottom: 1.5rem;
        }
  
        .drone-title{
          .section-title{
            font-size: 2rem;
            padding-bottom: .8rem;
          }
  
          .section-title-sub{
            font-size: 1.3rem;
            padding-bottom: 1rem;
          }
  
        }
  
        .drone-article-body{
          padding: 1rem 0;
          
          .drone-article-text{
            font-size: 1.15rem;
            #article-advice{
              padding-bottom: 1rem;
              font-size: 1.15rem;
            }
  
            .heading{

            }
  
            .figures{
              img{
                
              }
  
              span{
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }

    @media (min-width: 1024px){
      .showcaseContainer{
        height: auto;
        width: 100%;
      }
  `;

  return (
    <Div id="DroneWars">
      {/* <ScrollBtn onClick={scrollTo}>T</ScrollBtn> */}
      {FloatingBtn()}
      <div className="showcaseContainer">
        <div className="image-container">
          {/* {Image3(poster, posterMin, showcaseHeight, "top")} */}
          {/* <ProgressiveImage image={poster} placeholder={posterMin} height={showcaseHeight} position="top" /> */}
          {/* <Image2
            alt={"Drone Wars"}
            overlaySrc={posterMin}
            src={poster}
            /> */}
            <ReactImageAppear 
                  src={poster}
                  placeholder={posterMin}
                  showLoader={false}
                  animation="blurIn"
                />
        </div>

      </div>
      <span id="sub-btns-marker"></span>
      <section id="subtitle-btns">
        <div id="subtitle-btns-min"> 
          <button id="button" onClick={toggleShortcuts} >
            <div className="shortcuts-open">
            </div>
            <div className="shortcuts-closed">
            </div>
          </button>
        </div>
        <div id="subtitle-btns-max">
          <SmoothLink to="history-of-drones" smooth={true} offset={-100} duration={500} className="shortcut-btn" onClick={closeShortcutMenu}>History of Drones</SmoothLink>
          <SmoothLink to="military-capacity" smooth={true} offset={-100} duration={500} className="shortcut-btn" onClick={closeShortcutMenu}>Military Capacity</SmoothLink>
          <SmoothLink to="us-drone-policy" smooth={true} offset={-100} duration={500} className="shortcut-btn" onClick={closeShortcutMenu}>U.S. Drone Policy</SmoothLink>
          <SmoothLink to="legal-ramifications" smooth={true} offset={-100} duration={500} className="shortcut-btn" onClick={closeShortcutMenu}>Legal Ramifications</SmoothLink>
          <SmoothLink to="obama" smooth={true} offset={-100} duration={500} className="shortcut-btn" onClick={closeShortcutMenu}>Obama And Trump</SmoothLink>
          <SmoothLink to="conclusion" smooth={true} offset={-100} duration={500} className="shortcut-btn" onClick={closeShortcutMenu}>Conclusion</SmoothLink>
        </div>
      </section>
      <article className="container drone-article">
        <div className="date">
          <div>
            16
          </div>
          <div>
            04
          </div>
          <div>
            19
          </div>
        </div>
        <div className="drone-title my-2">
          <p className="section-title">Drone warfare: A PPG analysis</p>
          <p className="section-title-sub">
            Analysis of Presidential Policy Guideline
          </p>
        </div>
        <div className="container drone-article-body">
          <div className="drone-article-text">
            <div>
              <div id="article-advice">
                For full, interactive panels of our data, refer to the associated <Link to="/dronewars/data">dashboard</Link>. The following piece is an objective
                analysis from said data. We strongly advise you to form your
                conclusions based on both the investigation below and the original
                datasets.
              </div>
              <h3 id="introduction">Introduction</h3>
              <div>
                <p>
                  Drones have become synonymous with U.S. counterterrorism and
                  domestic security policy writ large. Under the Obama
                  administration, the use of armed drones became popularized,
                  which in turn increased interest in the purchasing of unmanned
                  systems as well as increasing the public discourse in assessing
                  the legalities and efficacy of drone campaigns in order to
                  strengthen U.S. strategic missions. Whilst remaining a
                  contentious topic, many of the details encompassing the U.S.
                  drone policy remain shrouded in ambiguity – with concerns
                  regarding U.S. drone policy ascending to greater heights under
                  the Trump administration.
                </p>
                <p>
                  During the first year of the Trump administration, President
                  Trump pontificated an unwavering commitment to the U.S.
                  utilizing armed drones in military and counterterrorism
                  excursions throughout the world. There have been numerous
                  changes to the U.S. drone program, which include the augmenting
                  of strikes and geographic areas of drone operations, even in
                  areas the U.S. government officially consider ‘outside of areas
                  of active interests’. In lowering the prerequisites necessary to
                  take fatal action against terrorism suspects outside of areas of
                  engagement, and enlarging the influence of the CIA in
                  ascertaining and conducting strikes, the general trend suggests
                  a drone program and policy diametrically opposing the policy
                  position of the latter years of the Obama administration.
                </p>
                <p>
                  The Trump administration’s position on drone warfare has made
                  apparent an inclination to negate some, if not all, of the
                  principles, procedures and guidelines (PPG) that was created and
                  implemented under the Obama regime. These measures, created to
                  increase accountability of the government, were also seeking to
                  balance public concerns regarding the use of fatal drone strikes
                  – increasing the degrees of transparency and accountability at
                  every level within the chain of command. The Trump
                  administration was forthright with this policy, which culminated
                  in the introduction of principles, standards and procedures
                  (PSP), in direct countenance of the PPG.
                </p>
                <p>
                  Indeed, the U.S. drone policy under the Trump administration, to
                  date, has been immersed in uncertainty and punctuated with a
                  reduction in oversight and transparency. With this considered,
                  combined with a visualisation of the clear and present impact of
                  the U.S. drone warfare, Aviskr seeks to share an analysis of
                  what is arguably the most lethal facet of U.S. foreign policy.
                </p>
              </div>
            </div>
            <div>
              <Element name="history-of-drones" className="heading">History Of Drones</Element>
              <div>
                <p>
                  In both a military and technological sense, a drone is an
                  unmanned aircraft that can be controlled or has the capacity to
                  fly autonomously through predetermined software-controlled
                  flight plans in their embedded systems, usually with
                  supplementary support from onboard sensors and Global
                  Positioning System (GPS). In formal military parlance, drones
                  are referred to as Unmanned Aerial Vehicles (UAVs) or Unmanned
                  Aircraft Systems (UASes).
                </p>
                <p>
                  Prior to the rise in commercial and personal use of drones, UAVs
                  were almost exclusively used by military, where they played
                  pivotal roles in anti-aircraft target practice, intelligence
                  gathering both domestically and on an international scale
                  before, arguably most pertinently, as platforms to engage in
                  warfare. Despite the commonly perceived destructive nature of
                  the use of drones in the most latter form, there have been, and
                  remains, a substantial arsenal in the catalogue conveying a
                  beneficial net impact in society – drones should not be
                  <span className="italic">inherently</span> interpreted as negative.
                  They have been prominent in a wide range of civilian uses,
                  playing a crucial role in search and rescue missions, traffic
                  monitoring, weather monitoring and firefighting. Personal drones
                  are necessary in creating new and bountiful economic markets for
                  drone-based photography and videography, with business-based
                  drones being active in both agriculture and even ushering in a
                  new era of modernity and efficiency in delivery services.
                </p>
              </div>
            </div>
            <div>
              <Element name="military-capacity" className="heading">Military Capacity</Element>
              <div>
                <p>
                  Sixteen years after the Wright brothers’ profound breakthrough
                  in aviation with the Kitty Hawk flight in 1901, the first
                  pilotless winged aircraft took to the skies. The Ruston Proctor
                  Aerial Target (RPAT) was based on radio-controlled technology
                  from revered inventor Nikola Tesla in 1917, with the aim of
                  acting as a piloted bomb that could be successfully navigated to
                  enemies. The RPAT was never used in combat, however, it
                  facilitated the creation of the first evolutionary stage of
                  drone research and warfare – the Kettering Bug – which in turn
                  paved the way for modern drones as we know them.
                </p>
                <p>
                  In 1918, the Kettering Bug was created by Dr. Henry W. Walden.
                  Possessing a strike range of 121km from its launch point and a
                  top speed of 80km/h, it was truly technology never seen before.
                  The 4-cylinder, 40 horsepower engines which were mass produced
                  by the Ford Motor Company, powered the drones which had a total
                  cost of $400 to produce at the time – adjusted for inflation -
                  translates to a cost of $7335 in 2019.
                </p>
              </div>
            </div>
            <div>
              <Element name="us-drone-policy" className="heading">U.S Drone Policy</Element>
              <div>
                <p>
                  U.S. drone legislation currently in place is somewhat guided by
                  frameworks established under the Obama administration, following
                  on from the substantial expansion of the U.S. drone program
                  between 2009 and 2016. Under the Obama administration, the U.S.
                  forged a reliance upon drone warfare and lethal strikes – some
                  conducted by fixed-wing aircraft in missile strikes. This formed
                  a fundamental component of counterterrorism operations in
                  countries of interest and around the world. Indeed, from January
                  2009 to January 2017, President Obama oversaw more than 500
                  strikes in Pakistan, Yemen and Somalia amongst other sovereign
                  states that the United States was not officially engaged in war
                  against.
                </p>
                <div className="figures">
                  <img src={fig1} alt="Figure 1" />
                  <span className="caption">
                      Figure 1 shows the total people killed (combatant and
                      civilian) by drone strikes and the quantity of strikes
                      carried out at any given month
                  </span>
                </div>
                <p>
                  In comparison, President Bush had authorised strikes between
                  2001 and 2009 in Pakistan and Yemen. Although it must be noted
                  that President Bush did not have to contend with the new and
                  profound threat of ISIL or other insurgent groups that were
                  formed as a by-product of al-Qaida.
                </p>
                <p>
                  President Trump authorised at least 80 strikes in his first year
                  in office in Pakistan, Somalia and Yemen, if continued at the
                  same rate for the duration of his term in office will see him
                  surpass both of his predecessors, which irrefutably demonstrates
                  an openness to engage in this type of warfare.
                </p>
              </div>
            </div>
            <div>
              <Element name="legal-ramifications" className="heading">Legal Ramifications</Element>
              <div>
                <p>
                  With respect to legalities, drones are governed under the same
                  legal restrictions as other conventional weapons – although this
                  has not stopped the U.S. repeatedly utilising them in a manner
                  that has brought into question as to whether they are in
                  compliance with international law. When used in a manner for
                  armed warfare, drones are governed by the law of armed conflict,
                  more commonly known as international humanitarian law. However,
                  there remain profound discrepancies in how the U.S. interprets
                  the very notion of armed conflict. The official stance of the
                  U.S. government maintains an ongoing armed conflict with
                  al-Qaida and affiliated groups, namely ISIL - which by
                  definition dictates that the law of armed conflict is active.
                  This dictates the amount of force, drone strikes inclusive,
                  against combatants of al-Qaida, ISIL and affiliated
                  groups/people of interest in multiple countries. The U.S.
                  government also presents the argument that the concerted
                  killings of members of such group are permissible under
                  international law, provided that such missions are made in an
                  act of self defense. However, the fundamental nature of the U.S.
                  operations against aforementioned actors are clear and present
                  challenges against the established parameters of international
                  law, as it applies to the utilization of force that has
                  discernibly shifted the public discourse regarding the legality
                  and legitimacy of operations carried out.
                </p>
                <p>
                  Although in common parlance, it is accepted that the regulations
                  affixed within the law of armed conflict applies to all U.S.
                  excursions in Afghanistan, Iraq and Syria, discussions as to
                  whether the law of armed conflict is all-encompassing and
                  proficient legal framework for U.S. operations remain. In these
                  instances, the Obama administration professed to be abiding in
                  lawful engagement in warfare against ‘associated actors’ of
                  groups that ‘constitute the greatest non-domestic threat to the
                  sovereignty of the U.S.’
                </p>
                <p>
                  The U.S. government’s refusal to release information pertaining
                  to the targets of the drone campaigns, and difficulties in
                  ascertaining the locations of where said strikes have occurred
                  have made it difficult for third parties to verify the
                  legalities of each singular attack. However, the strike ID and
                  longitudinal and latitudinal values allows for the strikes to be
                  mapped out to make apparent regions where the U.S. evidently
                  believe insurgents to operate within. Critics of U.S. policy
                  argue that drone strikes to conduct a targeted killing outside
                  of Afghanistan, Iraq and Syria should not be governed by the law
                  of armed conflict, but by the much more demanding requirements
                  of international human rights law – which states that killings
                  are only permissible in prevention of an imminent threat to
                  life.
                </p>
                <p>
                  The Obama administration’s introduction of PPG was curated to
                  bring policy restraints on lethal action and to form the
                  framework for the prerequisite conditions for using drones in
                  regions outside of traditional battlefields and more aligned
                  with the conditions required under an international human rights
                  law – even considering the assertions by the Obama
                  administration that the law of armed conflict applied. Through
                  the requirement of some connection between an imminent threat, a
                  ‘near certainty’ of the presence of the combatant targeted, and
                  any perceived risk to civilians to nil, it’s clear to understand
                  that the implementation of PPG was to reduce civilian harm.
                  However, some aspects of PPG – the requirement that a threat be
                  both continuing and imminent being exemplar – seem to be
                  inherently acting as a juxtaposition of the position of PPG as a
                  greater policy prescription, which has led questions from the
                  plethora of critics of drone warfare as to whether activities
                  outside of areas of active hostilities are indeed complying with
                  the law. Evident through the figures of the casualties in
                  Pakistan, Somalia and Yemen, there is clearly a lack in
                  concurrence between the overarching necessitates of compliance
                  with international law.
                </p>
              </div>
            </div>
            <div>
              <Element name="obama" className="heading">Obama And Trump</Element>
              <div>
                <div className="figures">
                  <img src={fig2} alt="Figure 2" />
                  <span className="caption">
                    Figure 2 shows the amount and composition of strikes carried
                    out by Obama and Trump
                  </span>
                </div>
                <p>
                  Obama mounted both "personality strikes" - aimed at named
                  suspected terrorists - and "signature strikes" - in which all
                  military-age men in an area of suspicious activity could be
                  killed. Signature strikes are often called "crowd killings"
                  because those perpetrating the attacks don't even know whom they
                  are killing. Trump has presumably continued these two types of
                  strikes, following on from his removal of PPG. The PPG required
                  that the target pose a continuous, imminent threat to U.S.
                  persons. There is no indication that Trump's new rules have
                  changed this requirement, going by the empirical metrics
                  available for his first year of governance. Moreover, even under
                  Obama, a 2011 Department of Justice white paper dictated that a
                  US citizen could be killed even when there was no "clear
                  evidence that a specific attack on U.S. persons and interests
                  will take place in the immediate future." Trump has presumably
                  reduced the prerequisites in killing non-citizens, which the
                  numbers would corroborate that it is indeed the case.
                </p>
                <p>
                  Obama's policy also mandated near certainty that an identified
                  "high-value terrorist" or other lawful terrorist target was
                  present before taking a strike. Signature strikes don't target
                  named individuals. During the Obama administration, targeting
                  decisions were made at the highest levels of government and the
                  president reportedly had the final say about who would be
                  assassinated. Under the PSP, however, these determinations would
                  not require vetting by top administration officials, and could
                  be made in a holistic manner by military commanders in the
                  field, in real time.
                </p>
                <p>
                  In spite of the PPG, the Obama administration killed many
                  civilians, of which children made up a significant proportion of
                  Obama's Office of the Director of National Intelligence (ODNI)
                  reported killing between 64 and 116 non-combatants "outside
                  areas of active hostilities" from January 2009 to December 2015.
                </p>
                <div className="figures">
                  <img src={fig3} alt="Figure 3" />
                  <span className="caption">
                    Figure 3 shows both presidents strike patterns from the
                    start of their respective “guidelines of drone procedure”,
                    with civilians killed as a measure and line weight as
                    frequency of strikes
                  </span>          
                </div>
                <p>
                  An aggressive surge of lethal drone strikes and clandestine
                  missions led by the military’s elite Joint Special Operations
                  Command (JSOC) and a reinvigorated CIA, in regions of the world
                  outside of America’s declared battlefields, confirmed a shift of
                  Trump’s ostensible isolationism. This surge signals,
                  paradoxically perhaps, an embrace of both Obama’s drone warfare
                  presidency and a more naked militarization of US foreign policy.
                </p>
                <p>
                  In both tempo and geography, Trump’s drone policy is on track to
                  surpass, by many metrics, that of President Obama. Trump
                  authorized 75 drone strikes in his first 74 days in office,
                  approximately one strike a day on average, which represents a
                  five-fold increase over Obama’s rate. Thus, despite Trump’s
                  rhetoric of isolationism and alleged break with the past,
                  current US operations resemble a marriage of George W. Bush-era
                  “world battlefield” global militarisation with Obama-era tools
                  of remote warfare, with its “minimal footprint” and aversion to
                  ground operations—a transactional neo-conservatism for the
                  post-imperial era.
                </p>
                <p>
                  Outside of America’s official battlefields, Yemen has been a
                  central target of Trump’s drone campaign. The first three drone
                  strikes conducted under Trump targeted al-Qaida in the Arabian
                  Peninsula (AQAP) in central Yemen, followed a few days later by
                  the deadly and compromised JSOC raid in Yemen. Since then, the
                  United States has conducted over 100 airstrikes and raids
                  against an emergent ISIL branch in Yemen, a figure that
                  surpasses any previous year of strikes under Obama. Somalia has
                  also been a major target of renewed drone strikes and
                  clandestine operations by JSOC against both the
                  al-Qaida-affiliated al-Shabaab and a small local branch of ISIL
                  that has emerged in the north. In all, over 30 airstrikes have
                  been launched against Somalia in 2017, in conjunction with a
                  number of US military Special Operations Forces raids. That
                  figure already eclipses the 14 strikes carried out in 2016.
                  There has been a marked increase in US drone strikes in the
                  Afghanistan-Pakistan border region in the second half of 2017
                  following the roll out of President Trump’s Afghanistan
                  strategy, in which he vowed to “no longer be silent about
                  Pakistan’s safe havens for terrorist organizations.” After a
                  September campaign of drone strikes in Pakistan, the CIA
                  declined to comment when asked if they had carried out a strike,
                  suggesting that in fact they had although we must consider that
                  an absence of confirmation is not indicative of the fact. Trump
                  has returned authority to conduct drone strikes to the CIA,
                  which the Obama administration had limited in its second term.
                  Although largely responsible for the expansion and consolidation
                  of this form of war, President Obama took some steps towards
                  establishing a more benevolent authoritative figure at the apex
                  of his second term.
                </p>
                <p>
                  Under Trump, there is an increasing distance from political and
                  ultimately, human controls. The rapid evolution of this modern
                  means of engaging in war has largely escaped public scrutiny due
                  to its secretive nature and origins as a deeply clandestine
                  counterterrorism program. Public criticism, to the extent it has
                  been aired, has largely focused on concerns about civilian
                  casualties and the dangerous automation of warfare possible
                  through these technologies, but not the form of warfare itself.
                  War is taking the form of a globally expanded and increasingly
                  autonomous policing operation intended to regulate and
                  discipline, often out of sight of American public awareness.
                </p>
                <p>
                  Trump’s array of generals have another kindred characteristic,
                  which most likely drew them to Trump but also runs counter to a
                  neo-isolationist foreign policy. Nearly all of them have
                  expressed public opposition to aspects of Obama’s second-term
                  foreign policy that included an alleged hesitancy to use force
                  or commit troops, which many allies perceived as a retreat from
                  traditional U.S. commitments in the world. For example, they
                  publicly faulted Obama for setting a deadline for withdrawing
                  troops from Afghanistan, blamed his decision to pull all U.S.
                  troops out of Iraq in 2011 for the rise of the ISIL, and have
                  been critical of the White House’s sensitivity to “boots on the
                  ground” in the anti-ISIL campaign.
                </p>
              </div>
            </div>
            <div>
              <Element name="conclusion" className="heading">Conclusion</Element>
              <div>
                <p>
                  The first year of the Trump administration demonstrated
                  President Trump’s willingness to continue to rely on armed
                  drones to conduct U.S. military and counterterrorism operations
                  around the world. While drone use is expanding under the Trump
                  administration, transparency and oversight of the U.S. drone
                  program appear to be diminishing. Such retreat of clarity by the
                  United States is occurring alongside international efforts to
                  advance global standards for the responsible transfer and use of
                  armed drones. Questions remain about the efficacy of drone
                  operations in achieving broader security objectives, and
                  concerns abound about the negative consequences that could arise
                  from continued use without the development of appropriate
                  international standards to guide drone transfers and subsequent
                  use. Despite these concerns, the United States has yet to
                  develop a comprehensive U.S. drone policy that is transparent,
                  accountable, and sustainable at a time when lethal drone
                  technology continues to proliferate around the world.
                </p>
                <p>
                  In short, the Trump administration’s approach to U.S. drone
                  policy shows worrying signs of potential actions that are
                  designed to dismantle the nascent policy structure and
                  safeguards established under the Obama administration. Indeed,
                  the Trump administration’s drone policy appears to be less
                  restrained, less transparent, and less accountable.
                </p>
                <div className="figures">
                  <img src={fig4} alt="Figure 4" />
                  <span className="caption">
                    Figure 4 shows the running sum of strike types, with the
                    width of each line representing the number of civilians
                    killed by the strike
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

    </Div>
  );
};
export default DroneWarsArticle