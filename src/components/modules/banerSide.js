import Circels from "../elements/circels";
import ferrari from "../../data/images/ferrari.png";
import RentButton from "../elements/rentButton";

const rentValue = "Rental Car";
const BanerSite = ({image}) => {
  return (
    <div className="w-full flex justify-between gap-x-10 mb-9 md:-mt-7 ">
      <div className="w-full flex justify-between gap-x-10 ">
        <div className="w-full  h-[232px] md:h-[360px] bg-information translate-y-[-100px] md:translate-y-0 rounded-md overflow-hidden relative p-3 text-[#ffff]">
          <p className="text-[18px] font-[600]">
            The Best Platform for Car Rental
          </p>
          <p className="my-2 md:my-6 text-[17px] w-[190px]">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <div className="w-[116px] h-[44px] md:mt-7 relative">
            <RentButton value={rentValue} />
          </div>
          {/* image  */}
          <div className="absolute -bottom-[65px] left-20 large:left-28   w-[196px] md:left-28 md:w-[220px]  ">
            <img src={ferrari} alt="ferrari" className=" md:w-full" />
          </div>
          <Circels />
        </div>

        <div className="hidden md:block w-full  h-[232px] md:h-[360px] bg-primary translate-y-[-155px] md:translate-y-0 rounded-md overflow-hidden relative p-3 text-[#ffff]">
          <p className="text-[18px] font-[600]">
            Easy way to rent a car at a low price
          </p>
          <p className="my-2 md:my-6  text-[17px] w-[190px]">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <div className="w-[116px] h-[44px] relative md:mt-7 bg-information rounded-md overflow-hidden flex justify-center items-center">
            <p>Rental Car</p>
          </div>
          {/* image  */}
          <div className="absolute -bottom-[65px] left-14 md:left-28 md:top-  md:w-[220px]  ">
            <img src={ferrari} alt="ferrari" className="w-full" />
          </div>
          <Circels />
        </div>
      </div>
    </div>
  );
};

export default BanerSite;
