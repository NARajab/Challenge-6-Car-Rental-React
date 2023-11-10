import "./Footer.css";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/icon_facebook.png";
import instagram from "../assets/img/icon_instagram.png";
import twitch from "../assets/img/icon_twitch.png";
import twitter from "../assets/img/icon_twitter.png";
import mail from "../assets/img/icon_mail.png";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <p>
                  Jalan Suroyo No. 161 Mayangan Kota <br />
                  Probolinggo 672000 <br />
                </p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <ul>
                  <li>
                    <a href="#our-services">Our Services</a>
                  </li>
                  <li>
                    <a href="#why-us">Why Us</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Connect with us</h4>
                <div className="social-links mt-3">
                  <a href="#" className="facebook me-1">
                    <i>
                      <img src={facebook} alt="logo facebook" />
                    </i>
                  </a>
                  <a href="#" className="instagram me-1">
                    <img src={instagram} alt="logo instagram" />
                  </a>
                  <a href="#" className="twitter me-1">
                    <img src={twitter} alt="logo twitter" />
                  </a>
                  <a href="#" className="mail me-1">
                    <img src={mail} alt="logo mail" />
                  </a>
                  <a href="#" className="twitch">
                    <img src={twitch} alt="logo twitch" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Copyright Binar 2022</h4>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="preloader"></div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
