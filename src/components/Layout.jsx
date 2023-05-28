import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav className="nav-bar">
        <button className="login-signup">Login </button>
        <div className="right-side-nav-bar">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="Product">
            Buy
          </Link>
          <img
            id="logo-one"
            src="src/images/876c58ad6db7484fb6441658b3697088.png"
            alt=""
          />
          <Link className="nav-link" to="Favorites">
            Favorites
          </Link>
          <Link className="nav-link" to="Agents">
            Agents
          </Link>
        </div>
        <button className="login-signup">Sign Up</button>
      </nav>
      <Outlet></Outlet>
      <footer id="footer">
        <div className="footer-left-side">
          <a href="http://instagram.com">
            <img id="instagram" src="src/images/icons8-instagram-48.png" />
          </a>
          <a href="http://whatsapp.com">
            <img id="whatsapp" src="src/images/icons8-whatsapp-48.png" />
          </a>
          <a href="http://twitter.com">
            <img id="twitter" src="src/images/icons8-twitter-48.png" />
          </a>
        </div>
        <div className="footer-right-side">
          <Link className="footer-links" to="Contact">
            Contact Us
          </Link>
          <Link className="footer-links" to="Agents">
            Agents
          </Link>
          <Link className="footer-links" to="About">
            About Us
          </Link>
          <div className="contact-us">
            <h3>Cyberpro Ramat Gan, Israel</h3>
            <p> Phone: (972+) 58-6582-461</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
