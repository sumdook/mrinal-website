import React from 'react';
import { Link } from 'gatsby';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import logo from '../img/logoi.jpg';

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" style={{ padding: 20 }}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ margin: '0 20px' }} />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              {/*<Link className="navbar-item" to="/products">
                Products
              </Link>*/}

              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://twitter.com/mrinalsur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={twitter} className="social" alt="Twitter" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.facebook.com/mrinal.sur.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" style={{ margin: '0 10px' }}>
                  <img src={facebook} className="social" alt="Facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/mrinal-sur-7905ab16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} className="social" alt="Linkedin" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
