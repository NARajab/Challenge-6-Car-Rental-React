import BannerFilter from "../components/carfilter-component/BannerFilter";
import HeroCarFilter from "../components/carfilter-component/HeroCarFilter";
import CardCar from "../../src/components/carfilter-component/CardCar";
import { useEffect, useState } from "react";

export default function FilterCarPage() {
  const [card, setCard] = useState([]);
  const [filterCard, setFilterCard] = useState([]);
  const [available, setAvailable] = useState(true);
  const [capacity, setCapacity] = useState([]);
  const [availableAt, setAvailableAt] = useState("");
  const [filter, setFilter] = useState({ available, capacity, availableAt });

  useEffect(() => {
    const getCarList = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        const data = await response.json();
        setCard(data);
        setFilterCard(data);
      } catch (err) {
        throw new Error(err.message);
      }
    };
    getCarList();
  }, []);

  const filteredCard = (available, capacity, availableAt, card) => {
    return card.filter(
      (car) =>
        car.available === JSON.parse(available) &&
        car.capacity === parseInt(capacity)
      // availableAt
      //   ? new Date(car.availableAt).toLocaleString().includes(availableAt)
      //   : true
    );
  };

  function handleChangeDriver(available) {
    setAvailable(available);
  }
  function handleChangeCapacity(capacity) {
    setCapacity(capacity);
  }

  // function handleChangeAvailableAt(availableAt) {
  //   console.log(availableAt);
  //   setAvailableAt(availableAt);
  // }

  const handleSearch = () => {
    setFilterCard(filteredCard(available, capacity, availableAt, card));
  };

  return (
    <>
      <HeroCarFilter />
      <BannerFilter
        handleChangeDriver={handleChangeDriver}
        handleChangeCapacity={handleChangeCapacity}
        // handleChangeavailableAt={handleChangeAvailableAt}
        handleSearch={handleSearch}
      />
      <CardCar card={filterCard} />
    </>
  );
}
