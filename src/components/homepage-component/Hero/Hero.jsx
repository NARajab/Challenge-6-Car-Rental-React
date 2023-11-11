import "./Hero.css";
import car from "../../../assets/img/car.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-lg" id="hero-container">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 d-flex flex-column justify-content-lg-start pt-lg-0 order-2 order-lg-1 text-black"
            data-aos="fade-up"
            id="main-hero"
            data-aos-delay="200"
          >
            <h1>Sewa & Rental Mobil Terbaik di kawasan Penajam</h1>
            <h2>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </h2>
            <Button className="btn btn-success" as={Link} to={"/filter"}>
              Mulai Sewa Mobil
            </Button>
          </div>
          <div
            className="col-lg-6 order-2 order-lg-1 hero-img"
            id="hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={car} id="img-car" alt="car" />
          </div>
        </div>
      </div>
    </section>
  );
}
