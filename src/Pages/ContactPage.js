import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import emailme from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <div>
      <div className="contact-title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63174.661456270274!2d-117.82890910803472!3d33.67764824194961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1615403356835!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-section">
          <ContactItem
            title={"Phone"}
            icon={phone}
            text1={"+19095551234"}
            text2={"+033 678 1111"}
          />
          <ContactItem
            title={"Email"}
            icon={emailme}
            text1={"loremipsum@gmail.com"}
            text2={"loremipsum3@gmail.com"}
          />
          <ContactItem
            title={"Address"}
            icon={location}
            text1={"Costa Mesa"}
            text2={"California"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
