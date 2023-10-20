import { useState } from "react";

export const Footer = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const email = e.target.value;
    email && email.includes("@")
      ? setIsValidEmail(true)
      : !email?setIsValidEmail(true):setIsValidEmail(false);
  };

  return (
    <footer>
      <div className="footer">
        <div className="footer__images">
          <img src="images/icon-facebook.svg" alt="icon-facebook" />
          <img src="images/icon-youtube.svg" alt="icon-youtube" />
          <img src="images/icon-twitter.svg" alt="icon-twitter" />
          <img src="images/icon-pinterest.svg" alt="icon-pinterest" />
          <img src="images/icon-instagram.svg" alt="icon-instagram" />
        </div>

        <div className="footer__nav">
          <nav>
            <ul className="footer__nav-items">
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </nav>
          <nav>
            <ul className="footer__nav-items">
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </div>
        <div className="footer__form">
          <input
            type="email"
            placeholder="Updates in your inbox…"
            onChange={handleChange}
          />
          <button>Go</button>
          <p
            className={isValidEmail ? "error-message sr-only" : "error-message"}
          >
            Please insert a valid email
          </p>
        </div>
      </div>
      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};
