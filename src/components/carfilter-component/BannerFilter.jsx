import { useState } from "react";
import "./BannerFilter.css";
import Button from "react-bootstrap/esm/Button";

export default function Banner({
  handleChangeDriver,
  handleChangeCapacity,
  handleChangeavailableAt,
  handleSearch,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  return (
    <section className="Banner-Filter position-absolute">
      <div className="container-lg p-4 shadow-lg">
        <div className="row">
          <div className="col-lg-2 d-flex flex-column justify-content-center align-items-stretch">
            <p>Tipe Driver</p>
            <select onChange={(e) => handleChangeDriver(e.target.value)}>
              <option value={true}>Dengan Sopir</option>
              <option value={false}>Tanpa Sopir</option>
            </select>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-center align-items-stretch">
            <p>Tanggal</p>
            <input
              type="date"
              name="availableAt"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-lg-2 d-flex flex-column justify-content-center align-items-stretch">
            <p>Waktu Jemput</p>
            <input
              type="time"
              name="availableAt"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-center align-items-stretch">
            <p>Jumlah Penumpang</p>
            <select
              name="capacity"
              onChange={(e) => handleChangeCapacity(e.target.value)}
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
            </select>
          </div>
          <div className="col-lg-2 d-flex flex-column align-items-stretch">
            <Button className="btn btn-success" onClick={handleSearch}>
              Cari Mobil
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
