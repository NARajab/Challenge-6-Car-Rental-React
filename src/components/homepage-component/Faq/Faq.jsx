import "./Faq.css";
import Acordion from "react-bootstrap/Accordion";

export default function Faq() {
  return (
    <section id="faq" class="faq section-bg">
      <div class="container" data-aos="fade-up">
        <div class="container-lg">
          <div class="row">
            <div class="col-lg-5 col-md-12">
              <div class="section-title">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Acordion id="acordion" defaultActiveKey="0">
                    <Acordion.Item eventKey="0">
                      <Acordion.Header>
                        Apa saja syarat yang dibutuhkan?
                      </Acordion.Header>
                      <Acordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi soluta maiores quasi minima vitae,
                        perferendis nostrum temporibus ut facere nesciunt.
                      </Acordion.Body>
                    </Acordion.Item>
                  </Acordion>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Acordion id="acordion" defaultActiveKey="0">
                    <Acordion.Item eventKey="1">
                      <Acordion.Header>
                        Berapa hari minimal sewa mobil lepas kunci?
                      </Acordion.Header>
                      <Acordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi soluta maiores quasi minima vitae,
                        perferendis nostrum temporibus ut facere nesciunt.
                      </Acordion.Body>
                    </Acordion.Item>
                  </Acordion>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Acordion id="acordion" defaultActiveKey="0">
                    <Acordion.Item eventKey="1">
                      <Acordion.Header>
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </Acordion.Header>
                      <Acordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi soluta maiores quasi minima vitae,
                        perferendis nostrum temporibus ut facere nesciunt.
                      </Acordion.Body>
                    </Acordion.Item>
                  </Acordion>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Acordion id="acordion" defaultActiveKey="0">
                    <Acordion.Item eventKey="1">
                      <Acordion.Header>
                        Apakah Ada biaya antar-jemput?
                      </Acordion.Header>
                      <Acordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi soluta maiores quasi minima vitae,
                        perferendis nostrum temporibus ut facere nesciunt.
                      </Acordion.Body>
                    </Acordion.Item>
                  </Acordion>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Acordion id="acordion" defaultActiveKey="0">
                    <Acordion.Item eventKey="1">
                      <Acordion.Header>
                        Bagaimana jika terjadi kecelakaan?
                      </Acordion.Header>
                      <Acordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi soluta maiores quasi minima vitae,
                        perferendis nostrum temporibus ut facere nesciunt.
                      </Acordion.Body>
                    </Acordion.Item>
                  </Acordion>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
