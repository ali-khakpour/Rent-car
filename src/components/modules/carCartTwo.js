import { useCar, useCarAction } from "../../provider/carProvider";
import { BsFillHeartFill, BsHeart, BsFuelPumpFill } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import RentButton from "../elements/rentButton";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CarCartTwo = ({ value }) => {
  const [cars, setCars] = useState([]);

  const car = useCar();
  const dispatch = useCarAction();

  useEffect(() => {
    if (value) {
      const filter = car.filter((p) => p.model === value);
      setCars(filter);
    } else {
      setCars(car);
    }
  }, [car, value]);

  return (
    <div className="w-full flex flex-wrap justify-center md:justify-around">
      {cars.length ? (
        cars.map((car) => (
          <div
            key={car.id}
            className="bg-[#ffff] flex flex-col justify-between p-4 md:mr-4 mt-5 w-[317px]  max-w-[317px] h-[286px] rounded-md "
          >
            {/* section of top => name and like  */}

            <div className="flex justify-between items-center min-w-full ">
              <span>
                <p className="text-txtColor font-[600]">{car.name}</p>
                <p className="text-secondary font-[500] text-[12px]">
                  {car.model}
                </p>
              </span>

              <span
                onClick={() => dispatch({ type: "LIKE", value: 1, id: car.id })}
                className="text-secondary flex flex-col items-center justify-center text-[12px] cursor-pointer"
              >
                {car.status ? (
                  <i className="text-[red]">
                    <BsFillHeartFill />{" "}
                  </i>
                ) : (
                  <i>{<BsHeart />}</i>
                )}

                {car.like}
              </span>
            </div>

            {/* section of image and feul */}
            <div className="w-full flex  items-center gap-x-3 md:flex-col h-[105px] md:justify-center  mt-4 ">
              <Link to={`/detaile/${car.id}`} className="w-[100%] h-[100%] flex-1 flex justify-center items-center ">
                <img
                  src={car.image[2]}
                  alt={car.name}
                  className="h-full w-auto "
                />
              </Link>

              <div className="flex flex-col  gap-y-1 items-start md:flex-row md:justify-between gap-x-6  text-secondary text-[12px] font-[500]">
                <span className="flex gap-x-[6px] justify-center items-center">
                  <p>
                    <BsFuelPumpFill />
                  </p>
                  <p>{car.fuel}</p>
                </span>

                <span className="flex gap-x-[6px] justify-center items-center">
                  <p>
                    <IoMdHelpBuoy />
                  </p>
                  <p>Manual</p>
                </span>

                <span className="flex gap-x-[6px] justify-center items-center">
                  <p>
                    <TbUsers />
                  </p>
                  <p>{car.user}</p>
                </span>
              </div>
            </div>

            {/* section of button and price */}
            <div className="flex  justify-between items-center ">
              <div className="flex">
                <p className="font-[700]">${car.price}.00/</p>
                <p className="text-secondary ml-2">day</p>
              </div>
              <div className="w-[90px] h-[34px] relative text-[14px]">
                <RentButton value="Rental Now" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-[25px] flex justify-center items-start mt-20 ">
          Not Found this product
        </div>
      )}
    </div>
  );
};

export default CarCartTwo;
