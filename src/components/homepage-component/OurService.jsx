import "./OurService.css";
import service from "../../assets/img/img_service.png";

export default function OurService() {
  return (
    <section id="our-services" className="our-services section-bg">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
          <img
            src={service}
            alt="services-img"
            className="img-fluid animated"
          />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
          <div className="content">
            <h3>Best Car Rental for any kind of trip in Penajam!</h3>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul>
              <li>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
