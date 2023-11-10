import Carousel from "react-bootstrap/Carousel";
import "./Testimonial.css";

import star from "../../assets/img/Star 1.png";
import photo1 from "../../assets/img/img_photo.png";
import photo2 from "../../assets/img/img_photo_2.png";

function Testimonial() {
  return (
    <section id="testimonial" className="testimonial">
      <div className="title">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <Carousel data-bs-theme="dark" id="carousel" className="rounded-3">
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-2 pt-3 d-flex justify-content-center">
              <img src={photo1} alt="First slide" />
            </div>
            <div className="col-lg-8 col-md-12">
              <div id="stars">
                <span>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </span>
              </div>
              <h6>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h6>
              <h3 className="fw-bold">John Dee 32, Bromo</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-2 pt-3 d-flex justify-content-center">
              <img src={photo2} alt="First slide" />
            </div>
            <div className="col-lg-8 col-md-12">
              <div id="stars">
                <span>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </span>
              </div>
              <h6>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h6>
              <h3 class="fw-bold">Angel 12, Merapi</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-2 pt-3 d-flex justify-content-center">
              <img src={photo1} alt="First slide" />
            </div>
            <div className="col-lg-8 col-md-12">
              <div id="stars">
                <span>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </span>
              </div>
              <h6>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h6>
              <h3 class="fw-bold">Biden 20, Everest</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonial;
