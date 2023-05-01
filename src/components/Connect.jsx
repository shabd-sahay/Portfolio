import React from "react";
import img from "../assets/contact-img.svg";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact bg-gradient">
        <div className="wrapper d-flex justify-content-center py-16 gap-5 gap-lg-5">
          <div className="imgbox d-none d-lg-block">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold fs-4">Get In Touch</h1>
            <form action="" className="d-flex flex-column">
              <div className="d-flex gap-4 py-2">
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="d-flex gap-4 py-4">
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white flex-grow-1"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="form-control bg-transparent text-white border-white border-1 rounded-2xl px-4 placeholder-white h-36"
                rows={6}
                cols={35}
                placeholder="Message"
              ></textarea>
              <button className="btn btn-primary rounded-lg py-2 px-4 my-4 fw-bold">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
