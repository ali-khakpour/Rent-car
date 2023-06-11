import { BsHeart, BsFillHeartFill, BsFuelPumpFill } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { useCar, useCarAction } from "../../provider/carProvider";
import RentButton from "../elements/rentButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecomendationCart = () => {
  const [cars, setCars] = useState([]);

  const car = useCar();
  const dispatch = useCarAction();

  useEffect(() => {
    const filter = car.filter((p) => p.model !== "Sport");
    console.log(filter);
    setCars(filter);
  }, [car]);

  return (
    <div className="flex flex-wrap justify-center 2xl:justify-between gap-x-8 w-full gap-y-5">
      {cars.length
        ? cars.map((car) => (
            <div
              key={car.id}
              className="bg-[#ffff] flex flex-col p-4 mr-4 mt-5 w-[95%] max-w-[324px]  min-w-[240px] md:w-[285px] h-[286px] rounded-md "
            >
              {/* section for name and like */}
              <div className="flex justify-between items-center min-w-full ">
                <span>
                  <p className="text-txtColor font-[600]">{car.name}</p>
                  <p className="text-secondary font-[500] text-[12px]">{car.model}</p>
                </span>

                <span
                  onClick={() =>
                    dispatch({ type: "LIKE", value: 1, id: car.id })
                  }
                  className="text-secondary flex flex-col items-center justify-center text-[12px]"
                >
                  {car.status ? (
                    <i className="text-[red]">
                      <BsFillHeartFill />
                    </i>
                  ) : (
                    <i>{<BsHeart />}</i>
                  )}

                  {car.like}
                </span>
              </div>

              {/* image section */}

              <Link to={`/detaile/${car.id}`} className="w-auto h-[140px]">
              <img
                src={car.image[2]}
                alt="car.title"
                className="h-full w-full "
              />
              </Link>
              {/* fuel and  section */}
              <div className="flex justify-between text-secondary text-[12px] font-[500] mb-5">
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

              {/* section for price and rental button */}
              <div className="flex  justify-between items-center">
                <div className="flex">
                  <span>
                  <p className="font-[700]">${car.price}.00/</p>
                  {car.off && <p className="text-secondary line-through text-[12px]">${car.off}.00</p>}
                  

                  </span>
                  <p className="text-secondary ml-2">day</p>
                </div>
                <div className="w-[100px] h-[36px] relative">
                  <RentButton value="Rental Now" />
                </div>
              </div>
            </div>
          ))
        : "loading..."}
    </div>
  );
};

export default RecomendationCart;
