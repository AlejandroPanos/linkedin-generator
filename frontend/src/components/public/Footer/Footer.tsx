import "./Footer.css";
import logo from "../../../images/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full mt-0 md:-mt-24">
        <div className="footer-wrapper">
          <div className="footer-left">
            <a href="#hero">
              <img className="w-32" src={logo} alt="ScribbleAI company logo" />
            </a>
            <p>
              Made with ❤️ by{" "}
              <a target="_blank" href="https://www.linkedin.com/in/alejandropanosjimenez/">
                Alejandro Paños
              </a>
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-right-col">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="mailto:panosjimenezalejandro@gmail.com">Support</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/alejandropanosjimenez/">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div className="footer-right-col">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="footer-right-col">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="https://youtube.com">Demo Video</a>
                </li>
                <li>
                  <a href="https://youtube.com">Why ScribbleAI?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
