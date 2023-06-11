import RecomendationCart from "../modules/RecomendationCart";

const RecomendationCar = () => {
  return (
    <div className="w-full flex flex-col my-8 -translate-y-20 md:-translate-y-0 ">
      <div className="flex justify-between w-full mb-2 text-secondary">
        <p className="px-4">Recomendation Car</p>
        <p></p>
      </div>

      <RecomendationCart /> 

    </div>
  );
};

export default RecomendationCar;
