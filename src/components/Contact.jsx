import React from "react";
import "../styles/Hero.css";
const Contact = () => {
  return (
    <>
      <main id="contact" className="p-4">
        <section className="container mb-5">
          <p className="text-center get-in-touch">Get In Touch</p>
          <h1 className="text-center  contact-me">Contact Me</h1>
          <p className=" text-center contact-text">
            If you like my work or want to hire me, please feel free to send me
            an email on{" "}
            <span className="text-decoration-underline">
              samuelchidera126@gmail.com 
            </span>{" "}
            by pressing the button below.
          </p>
          <div className="text-center ">
            <div className="btn">
              <a
                href="mailto:samuelchidera126@gmail.com"
                className=" btn  email-btn text-white  "
              >
                Send me an email!
              </a>
            </div>
            <div className="">
              <p>
                or contact me through{" "}
                <a
                  href="https://www.tiktok.com/@samuecuezo8?_t=8ojDoP8Imd4&_r=1"
                  className="underline text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tiktok
                </a>{" "}
                or{" "}
                <a
                  href="https://x.com/SamuelObiekwugo?t=X_pEGESnXtWspQN0jcsuGg&s=08 "
                  className="underline text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
