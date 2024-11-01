import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54304.041849068075!2d35.83960017378852!3d31.715823540879846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cacd00bad3bc5%3A0x4d6d5834c1003e2b!2z2YXYo9iv2KjYpw!5e0!3m2!1sar!2sjo!4v1730468171545!5m2!1sar!2sjo";

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Madaba street anas ibn malek </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>alkasabreh14@gmail.com </p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>0772815509 </p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10" placeholder="Create a message here..." required></textarea>
              <button type="submit" className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
