import { useState } from "react";
import CarCartTwo from "../modules/carCartTwo";
import PickAndDrop from "../modules/pickAndDrop";
import SidbarCategory from "../modules/sidbar";

const Category = () => {
  const [selectValue, setSelectValue] = useState('')

  const selectHandler = (value)=>{
    setSelectValue(value)
  }



  return (
    <div className="  pr-3 w-full h-full   md:flex justify-center items-center mb-16  ">
      <div className=" max-w-[1355px] w-full flex gap-x-4 ">
        <div
          className={` hidden  md:block md:min-w-[25vw] lg:min-w-[20%] min-h-full`}
        >
          <SidbarCategory selectHandler={selectHandler} />
        </div>
        <div className=" mt-4 px-4 md:m-0 w-full ">
          <PickAndDrop />
          <CarCartTwo value={selectValue} />
        </div>
      </div>
    </div>
  );
};

export default Category;
