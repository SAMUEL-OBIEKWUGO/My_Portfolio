import React from "react";
import "../styles/Hero.css";
import logo from "../assets/image 1.svg";
import facebook from "../assets/Facebook.svg";
import IG from "../assets/ig.svg";
import gitHub from "../assets/github.png";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import { GrReactjs } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container">
          <div className="d-lg-flex justify-content-between mb-5 ">
            <div className="d-flex justify-content-center mt-5 ">
              <a href="#" className="text-decoration-none">
                <span
                  id="johnDev"
                  className="  text-decoration-none navbar-brand text-dark foot-brand "
                >
                  {" "}
                  Built by Obiekwugo Samuel C {year}
                </span>
              </a>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-5 socials">
              <a href="https://github.com/SAMUEL-OBIEKWUGO">
                <img
                  src={gitHub}
                  alt=""
                  style={{ width: "20px", height: "30px" }}
                />
              </a>

              <a href=" https://x.com/SamuelObiekwugo?t=X_pEGESnXtWspQN0jcsuGg&s=08 ">
                {" "}
                <img src={twitter} alt="" style={{ width: "20px" }} />{" "}
              </a>
              <a href="#">
                {" "}
                <img src={linkedin} alt="" style={{ width: "20px" }} />
              </a>
            </div>
          </div>
          <hr className="opacity-50" />
          <div className="text-center">
            <p className="mt-5 policy-links">
              Made with <GrReactjs />
              (React)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
