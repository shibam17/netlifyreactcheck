import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join The dehkdgHDGAHFGHDASHDFG sdhfkjsahfkawgrfwqrgf
          wiyfgwhrgfhwrgfhawrkf
        </p>
        <p className="footer-subscription-text">
          wedhakhsgsahgf afgashfgaskfsda
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe now</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
          <div className='footer-link-wrapper'>
              <dv className='footer-link-items'>
                  <h2>About Us</h2>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/sign-up'>How it works</Link>
                  <Link to='/sign-up'>How it works</Link>
              </dv>
          </div>
      </div>
    </div>
  );
}

export default Footer;
