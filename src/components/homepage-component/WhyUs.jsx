import "./WhyUs.css";
import complete from "../../assets/img/icon_complete.png";
import hours from "../../assets/img/icon_24hrs.png";
import price from "../../assets/img/icon_price.png";
import professional from "../../assets/img/icon_professional.png";

export default function WhyUs() {
  return (
    <section id="why-us" class="why-us">
      <div class="container-lg" data-aos="fade-up">
        <div class="section-title">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>

        <div class="row">
          <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div class="box rounded-3 ">
              <img src={complete} alt="icon_complete" />
              <h1>Mobil Lengkap</h1>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="box rounded-3">
              <img src={price} alt="icon_complete" />
              <h1>Harga Murah</h1>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="box rounded-3">
              <img src={hours} alt="icon_complete" />
              <h1>Layanan 24 Jam</h1>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="box rounded-3">
              <img src={professional} alt="icon_complete" />
              <h1>Sopir Profesional</h1>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
