import { useState } from "react";

export const Navegation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <nav class="main-menu">
        <div>
          <a href="#">
            <img src="images/logo.svg" alt="logo" />
          </a>
        </div>
        <div class="main-list nav-button">
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="nav-button">Get Started</button>
        </div>
        <a href="#" onClick={handleToggle}>
          {toggle ? (
            <img src="images/icon-close.svg" alt="Close button" />
          ) : (
            <img src="images/icon-hamburger.svg" alt="Hamburger button" />
          )}
        </a>
      </nav>
      {toggle ? (
        <ul className="mobile-nav">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      ) : null}
    </>
  );
};
