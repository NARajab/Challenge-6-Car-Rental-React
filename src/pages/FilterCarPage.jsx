import BannerFilter from "../components/carfilter-component/BannerFilter/BannerFilter";
import HeroCarFilter from "../components/carfilter-component/HeroCar/HeroCarFilter";
import CardCar from "../components/carfilter-component/CardCar/CardCar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useEffect, useState } from "react";

export default function FilterCarPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [card, setCard] = useState([]);
  const [filterCard, setFilterCard] = useState([]);
  const [available, setAvailable] = useState(true);
  const [capacity, setCapacity] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const getCarList = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        const data = await response.json();
        setCard(data);
        setFilterCard(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCarList();
  }, [available, capacity, date, time]);

  const filteredCard = (available, capacity, date, time, card) => {
    return card.filter((car) => {
      const carDateTime = new Date(car.availableAt).getTime();
      const filterDateTime = new Date(`${date}T${time}:00.000Z`).getTime();

      return (
        car.available === JSON.parse(available) &&
        car.capacity === parseInt(capacity) &&
        filterDateTime <= carDateTime
      );
    });
  };

  function handleChangeDriver(available) {
    setAvailable(available);
  }
  function handleChangeCapacity(capacity) {
    setCapacity(capacity);
  }
  function handleChangeDate(date) {
    setDate(date);
  }
  function handleChangeTime(time) {
    setTime(time);
  }
  const handleSearch = () => {
    const filteredData = filteredCard(available, capacity, date, time, card);
    setFilterCard(filteredData);
    if (filteredData.length === 0) {
      setError("Mobil tidak tersedia");
    }
  };

  return (
    <>
      <HeroCarFilter />
      {isLoading && <Loading />}
      <BannerFilter
        handleChangeDriver={handleChangeDriver}
        handleChangeCapacity={handleChangeCapacity}
        handleChangeDate={handleChangeDate}
        handleChangeTime={handleChangeTime}
        handleSearch={handleSearch}
      />
      {!error && <CardCar card={filterCard} />}
      {/* <CardCar card={filterCard} /> */}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
