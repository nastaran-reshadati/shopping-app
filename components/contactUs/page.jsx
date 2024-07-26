import React from "react";
import ContactForm from "./contactForm/page";

const Contacts = () => {
  return (
    <section className="container">
      <div className="flex justify-center items-center gap-4 ">
        <div className="indicator-title"></div>
        <h3 className="font-MorabaBold text-3xl text-center">تماس با ما</h3>
        <div className="indicator-title"></div>{" "}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
        <ContactForm />

        <div className="map">map</div>
      </div>
    </section>
  );
};

export default Contacts;
