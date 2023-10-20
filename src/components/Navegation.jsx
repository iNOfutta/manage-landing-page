import { useState } from "react";

export const Navegation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle)

  return (
    <>
      <nav>
        <div class="main-menu">
          <div>
            <a href="#">
              <img src="images/logo.svg" alt="logo"/>
            </a>
          </div>
            <ul class="main-list nav-item-toggle">
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
            <button className="nav-item-toggle">Get Started</button>
          <a href="#" onClick={handleToggle} className="nav-images">
            {toggle ? (
              <img src="images/icon-close.svg" alt="Close button" />
            ) : (
              <img src="images/icon-hamburger.svg" alt="Hamburger button" />
            )}
          </a>
        </div>
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
