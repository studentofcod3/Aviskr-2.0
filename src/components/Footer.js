import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.scss";

const Footer = () => {
  const Footer = styled.div`
    box-sizing: border-box;
    text-align: left;
    background: #fff;
    padding-top: 2rem;
    .container {
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: repeat(3, 1fr);
      padding: 1.4rem;
      span {
        font-size: 2.7rem;
      }

      div {
        line-height: 1.6;
        h3 {
          font-size: 1.3rem;
        }
        ul {
          padding: 0;
          li {
            ul {
              padding-left: 0.7rem;

              a {
              }
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      text-align: center;
      .container {
        display: flex;
        flex-direction: column;

        span {
          font-size: 2.7rem;
        }

        .quick-links {
          display: none;
        }

        div {
          padding-top: 0.2rem;
          line-height: 1.6;
          h3 {
            font-size: 1.3rem;
            margin-bottom: 0;
          }

          ul {
            margin: 0;
          }
        }
      }
    }
  `;
  return (
    <Footer>
      <div className='container'>
        <span className='aviskr'>Aviskr</span>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>+44 (0)7123 678 910</li>
            <li>info@aviskr.com</li>
            <li>facebook</li>
            <li>twitter</li>
          </ul>
        </div>
        <div className='quick-links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
