import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, clearCurrent, updateContact, current } = contactContext;

  // useEffect(() => {
  //   if (current !== null) {
  //     setContact(current);
  //   } else {
  //     setContact({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       type: "personal"
  //     });
  //   }
  // }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    type: "personal"
  });

  const { name, email, subject, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Get in touch with us</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Subject'
        name='subject'
        value={subject}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Message'
        name='message'
        value={message}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactForm;
