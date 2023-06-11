
import {BsStarFill,BsStarHalf} from 'react-icons/bs'


import boy from "../../data/images/boy.jfif";
import girl from "../../data/images/girl.jfif";


const Reviews = () => {
  return (
    <div className="w-full h-[388px] bg-[#fff] rounded-md p-4  ">
      {/* title */}
      <div className="flex gap-x-3 items-center mb-6 ">
        <p className="font-[600] text-[20px]">Reviews</p>
        <p className=" bg-primary w-[44px] h-[28px] text-[14px] text-[#fff] font-[700] flex items-center justify-center rounded-md">
          13
        </p>
      </div>

      {/* user section */}

      <div className="my-5">
        <div className="flex items-center justify-between mb-4 ">
          <div className="flex gap-x-2 ">
            <span className="w-11 h-11 rounded-full overflow-hidden ">
              <img src={boy} alt="user" className="w-full h-full" />
            </span>
            <span>
              <p className="font-[600] text-[16px]">Ali Khakpour</p>
              <p className="font-[500] text-[12px] text-secondary ">
                FrontEnd developer
              </p>
            </span>
          </div>
          <div>
            <p className='font-[500] text-secondary text-[12px] mb-2'>26 july 2023</p>
            <p className='flex gap-x-1 text-[#fbad39] text-[10px]'><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /></p>
          </div>
        </div>

        <div className=" text-secondary text-[12px] font-[400] pl-5">
          We are very happy with the service from the MORENT App. Morent has a
          low price . . .
        </div>
      </div>

      <div className="my-5">
        <div className="flex  justify-between mb-4 ">
          <div className="flex gap-x-2 ">
            <span className="w-11 h-11 rounded-full overflow-hidden">
              <img src={girl} alt="user" className="w-full h-full" />
            </span>
            <span>
              <p className="font-[600] text-[16px]">Ali Khakpour</p>
              <p className="font-[500] text-[12px] text-secondary ">
                FrontEnd developer
              </p>
            </span>
          </div>
          <div>
            <p className='font-[500] text-secondary text-[12px] mb-2'>26 july 2023</p>
            <p className='flex gap-x-1 text-[#fbad39] text-[10px]'><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /></p>
          </div>
        </div>

        <div className=" text-secondary text-[12px] font-[400] pl-5">
          We are very happy with the service from the MORENT App. Morent has a
          low price . . .
        </div>
      </div>

      <button className="w-full py-3  text-secondary font-[500] text-[14px] mt-4 ">
        Show All
      </button>
    </div>
  );
};

export default Reviews;
