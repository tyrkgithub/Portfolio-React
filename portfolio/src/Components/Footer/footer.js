import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "../Footer/footer.css";

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav justify-content-center footerLinks">
          <li className="nav-item">
            <a className="footerLinks" href="#">
              <FaGithub />
            </a>
          </li>

          <li className="nav-item">
            <a className="footerLinks" href="#">
              <FaLinkedin />
            </a>
          </li>
          <li className="nav-item">
            <a className="footerLinks" href="#">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <div className="footer col-lg-6 col-md-12 mb-4 mb-md-0">
<ul className="footerLinks">
  <li>
    <a className="footerLinks" href="#">
      <FaGithub />
    </a>
  </li>
  <li>
    <a className="footerLinks" href="#">
      <FaLinkedin />
    </a>
  </li>
  <li>
    <a className="footerLinks" href="#">
      <FaEnvelope />
    </a>
  </li>
</ul>
</div> */
}
