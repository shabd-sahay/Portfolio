import React, { useState } from "react";
import img from "../assets/contact-img.svg";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <div className="contact bg-gradient">
        <div className="wrapper d-flex justify-content-center py-16 gap-5 gap-lg-5">
          <div className="imgbox d-none d-lg-block">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold fs-4">Get In Touch</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <div className="d-flex gap-4 py-2">
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="d-flex gap-4 py-4">
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <textarea
                className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white h-36"
                name="message"
                rows={6}
                cols={35}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
              <button className="btn btn-primary rounded-lg py-2 px-4 my-4 fw-bold" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
