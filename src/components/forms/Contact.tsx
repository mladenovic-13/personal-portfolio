import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col w-full h-full md:max-w-xl">
      <h2 className="text-3xl text-center font-semibold">Contact me</h2>
      <p className="text-center text-lg font-light">
        I’m interested in freelance opportunities – incredibly ambitious or
        large projects. However, don’t hesitate to use the form if you have
        other requests or questions.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
