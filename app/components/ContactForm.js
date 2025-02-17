"use client";
import React from "react";
import Swal from 'sweetalert2'

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "811b0939-c5db-4bd7-9328-aedfe1c9dd7d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error"
      });
    }
  };

  return (
        <div>
        <section className="contact flex justify-center items-center min-h-screen w-full md:w-auto">
            <form onSubmit={onSubmit} className="max-w-lg w-full  p-6  text-black m-6">
              <h2 className="text-2xl text-center"></h2>
              <div className="input-box mt-5">
                <label>Full Name</label>
                <input
                  type="text"
                  className="mb-5 field w-full h-12 bg-transparent border-2 border-gray-300 outline-none rounded-lg p-4 text-gray-800 mt-2"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              <div className="input-box mb-5">
                <label>Email Address</label>
                <input
                  type="email"
                  className="field w-full h-12 bg-transparent border-2 border-gray-300 outline-none rounded-lg p-4 text-base text-gray-800 mt-2"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea
                  name="message"
                  className="field w-full h-44 bg-transparent border-2 border-gray-300 outline-none rounded-lg p-4 text-base text-gray-800 mt-2 resize-none"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-blue-700 border-0 rounded-md shadow-md cursor-pointer text-base text-white font-medium mt-6 transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
  );
};

export default ContactForm;
