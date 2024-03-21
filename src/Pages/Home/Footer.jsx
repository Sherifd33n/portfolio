import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="top-container">
        <div className="logo">
          <p>
            Sherif<span>d33n</span>
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">SKills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/jamiu-sherif">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sherifd33n">
            <FaGithub />
          </a>
          <a href="https://twitter.com/sherifd33n">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="footer-bottom">&copy; Sherifd33n</div>
    </footer>
  );
}
