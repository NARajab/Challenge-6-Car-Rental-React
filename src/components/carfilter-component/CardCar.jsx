import "./CardCar.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import user from "../../assets/img/users.png";
import setting from "../../assets/img/settings.png";
import calender from "../../assets/img/calendar.png";
import { useEffect, useState } from "react";

export default function CardCar({ card }) {
  return (
    <section id="Card">
      <div className="container ">
        <div className="row row-cols-3 mx-auto gy-4">
          {card.map((car, i) => (
            <div key={i}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={car.image} />
                <Card.Body>
                  <Card.Title>
                    {car.manufacture}/{car.type}
                  </Card.Title>
                  <Card.Text>Rp. {car.rentPerDay} /hari</Card.Text>
                  <Card.Text>{car.description}</Card.Text>
                  <div className="d-flex align-items-center">
                    <img src={user} alt="user icon" />
                    <p className="ml-3 mt-2">{car.capacity} orang</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={setting} alt="setting icon" />
                    <p className="ml-3 mt-2">{car.transmission}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={calender} alt="calendar icon" />
                    <p className="ml-3 mt-2">{car.availableAt}</p>
                  </div>
                  <Button variant="success">Pilih Mobil</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
