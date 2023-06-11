
import BanerSite from "../modules/banerSide";
import PickAndDrop from "../modules/pickAndDrop";
import PopularCar from "./PopularCar";
import RecomendationCar from "./Recomendation Car";


const Home = () => {
  return (
    <div className=" px-4 relative flex flex-col items-center max-w-[1250px]">
      {/* baner section */}

      <BanerSite />

      <PickAndDrop />
      <PopularCar />
      <RecomendationCar />


      {/* button for more Car */}
      <div className="w-full flex justify-between items-center my-11 -translate-y-16 md:-translate-y-0 ">
        <p></p>
        <p className="px-5  rounded-md h-[36px] bg-primary text-[#ffff] flex justify-center items-center  font-[600] ">
          Show More Car
        </p>
        <p className=" text-secondary text-[14px] font-[700]">120 Car</p>
      </div>
      
    </div>
  );
};

export default Home;
