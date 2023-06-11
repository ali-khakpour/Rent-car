import { useLocation, useParams } from "react-router-dom";
import { useCar } from "../../provider/carProvider";
import { useState } from "react";
import { useEffect } from "react";
import RentButton from "../elements/rentButton";
import Reviews from "../modules/Reviews";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Detaile = () => {
  const [detaile, setDetaile] = useState([]);
  const [indexImge, setIndexImge] = useState(2);
  console.log(detaile);

  const car = useCar();
  const { id } = useParams();

  useEffect(() => {
    const getDetail = () => {
      const filter = car.filter((p) => p.id == id);
      console.log(filter);
      setDetaile(filter);
    };
    getDetail();
  }, [id, car]);

  return (
    <div className="px-4 mb-14">
      <div>
        {detaile &&
          detaile.map((car) => (
            <div key={car.id} className="my-5   ">
              <div className=" flex flex-col md:flex-row gap-x-5  md:mb-10 md:h-[420px] ">
                {/* 1- image gallery */}
                <div className="flex flex-col items-center w-full">
                  <span className="w-full flex justify-center ">
                    <img
                      src={car.image[indexImge]}
                      alt={car.name}
                      className="w-full h-[240px] rounded-md mb-5"
                    />
                  </span>

                  <div className="flex justify-between items-center gap-x-3 w-full">
                    {car.image.map((img, index) => (
                      <img
                        src={img}
                        alt={car.name}
                        key={index}
                        className={`w-[31%] mt-3 rounded-[10px] ${
                          indexImge === index &&
                          "ring ring-primary ring-offset-4"
                        }`}
                        onClick={() => setIndexImge(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* 2- info car section*/}
                <div className="w-full h-[318px] bg-[#ffff] p-4 my-12 md:m-0 md:h-full rounded-md ">
                  {/* title */}
                  <div>
                    <span className="font-[700] text-[20px]  ">{car.name}</span>
                    <span className="flex items-center text-[12px] gap-x-2 mt-1   text-secondary font-[500]">
                      <span className="flex gap-x-1 text-[#fbad39] text-[10px] ">
                        <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                        <BsStarFill /> <BsStarHalf />
                      </span>

                      <span>400 + Reviwe</span>
                    </span>
                  </div>

                  {/* description */}
                  <div className=" text-secondary text-[12px] mt-4 lg:text-[20px] lg:mt-6">
                    {car.description}
                  </div>

                  {/* type and feul ... */}
                  <div className="w-full flex gap-2 mt-4 mb-8 text-[12px] pl-2 lg:text-[20px] md:my-10">
                    <div className="flex-1">
                      <span className="flex justify-between mr-6 mb-4">
                        <p className="font-[400] text-secondary">TypeCar</p>{" "}
                        <p className="font-[500]">{car.model} </p>
                      </span>
                      <span className="flex justify-between mr-6 ">
                        <p className="font-[400] text-secondary">Steering</p>
                        <p className="font-[500]">Manual </p>
                      </span>
                    </div>
                    <div className="flex-1 ">
                      <span className="flex justify-between   mb-4">
                        <p className="font-[400] text-secondary">Capacity</p>
                        <p className="font-[500]">{car.user} </p>
                      </span>
                      <span className="flex justify-between ">
                        <p className="font-[400] text-secondary">Gasoline</p>{" "}
                        <p className="font-[500]">{car.fuel} </p>
                      </span>
                    </div>
                  </div>

                  {/* price and butten  */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="flex gap-x-1 items-center">
                        <p className="font-[700] text-[20px]">
                          $ {car.price}.00 /
                        </p>
                        <p className=" text-secondary text-[12]">days</p>
                      </span>
                      <p className=" text-secondary text-[12px] line-through ">
                        {car.off && ` $ ${car.off}.00`}
                      </p>
                    </div>
                    <div className="w-[130px] h-[50px] font-[700] text-[16px]  ">
                      <RentButton value="Rent Now" />
                    </div>
                  </div>
                </div>
              </div>

              {/* review section */}
              <div className="">
                <Reviews />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Detaile;
