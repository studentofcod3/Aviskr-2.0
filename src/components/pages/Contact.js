import React from "react";
import "../../App.scss";
import styled from "styled-components";

const Contact = () => {
  const Contact = styled.div`
    // Contact page - Form styling
    .container {
      .text-fields {
        .text-input,
        button,
        h3 {
          display: block;
          margin: 2rem auto;
          width: 70%;
          border-radius: 4px;
        }

        textarea {
          height: 5rem;
        }

        button {
          background: #555;
          border: none;
          height: 2.2rem;
        }
      }

      h3 {
        font-weight: 200;
      }
    }
  `;
  return (
    // <!-- Contact Form -->
    <Contact>
      <div class='container'>
        <form method='POST' data-netlify='true' data-netlify-recaptcha='true'>
          {/* <!-- data-netlify-recaptcha filters spam. Need to add it into the form below --> */}
          <div class='text-fields'>
            <h3>Get in touch with us here:</h3>
            <input
              type='text'
              class='text-input name-input'
              placeholder='Name'
              name='name'
            />

            <input
              type='text'
              class='text-input company-input'
              placeholder='Organization/Institution/Company'
              name='company'
            />

            <input
              type='text'
              class='text-input email-input'
              placeholder='Email Address'
              name='email'
            />

            <input
              type='text'
              class='text-input subject-input'
              placeholder='Subject of Enquiry'
              name='subject'
            />

            <textarea
              class='text-input enquiry-input'
              placeholder='Type your enquiry here'
              name='enquiry'
            />
            <div class='my-2'>
              {/* <!-- Recaptcha --> */}
              <div data-netlify-recaptcha='true' />
            </div>
            <button type='submit' class='btn-contact'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Contact>
  );
};

export default Contact;
