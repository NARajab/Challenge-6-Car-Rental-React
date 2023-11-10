import "./Banner.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="CTA-Banner">
      <div className="container-lg" data-aos="fade-up">
        <div className="container-CTA text-center">
          <h2>Sewa Mobil di Penajam Sekarang</h2>
          <div className="text-p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="text-center">
            <Button className="btn btn-success" as={Link} to={"/filter"}>
              Mulai Sewa Mobil
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
