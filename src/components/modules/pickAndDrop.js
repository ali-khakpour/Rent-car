import { useState } from "react";
import { GrFormDown } from "react-icons/gr";
import { BsArrowLeftRight} from "react-icons/bs";
import { useLocation } from "react-router-dom";

const PickAndDrop = () => {
  const [value, setValue] = useState({
    pickLocation: "",
    pickDate: "",
    pickTime: "",
    dropLocation: "",
    dropDate: "",
    dropTime: "",
  });

  const {pathname} = useLocation()


  const changeHandler = (e) => {
    const name = e.target.value;

    setValue({ ...value, [e.target.name]: name });
  };

  return (
    <div className={pathname === '/category' ? "w-full flex flex-col  lg:flex-row  lg:justify-between items-center md:mt-9 md:gap-x-6 " : "w-full flex flex-col  md:flex-row  md:justify-between items-center -translate-y-24 md:translate-y-0 md:mt-9 md:gap-x-6 "}>
      <div className=" w-full lg:w-[50%] h-[128px] bg-[#ffff] rounded-md  px-2 py-[18px] overflow-hidden">
        {/* title pick up */}
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-full bg-information flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-primary "></div>
          </div>
          <p className="font-[600] text-txtColor">Pick - Up</p>
        </div>

        {/* information data */}
        <div className="mt-5 flex justify-between">
          <div className=" border-r-[1px] pr-2 flex-1 flex flex-col items-center">
            <p className="text-[17px] font-[700]">Location</p>
            <div className="flex items-center gap-x-1 mt-3">
              <p>Semarng</p>
              <i>
                <GrFormDown />
              </i>
            </div>
          </div>

          <div className=" border-r-[1px] px-2 flex-1 flex flex-col items-center ">
            <p className="font-[700]">Date</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="date"
                name="pickDate"
                className="w-[90px] h-5  text-[12px]  pl-2"
                value={value.pickDate}
                onChange={changeHandler}
              />

              {/* <i><GrFormDown /></i> */}
            </div>
          </div>

          <div className="  flex-1 flex   pl-2 flex-col items-center ">
            <p className="font-[700]">Time</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="time"
                name="pickTime"
                className="w-[77px] h-5  text-[12px] pl-1"
                value={value.pickTime}
                onChange={changeHandler}
              />
              {/* <i><GrFormDown /></i> */}
            </div>
          </div>

        </div>
      </div>

      {/* change data  */}
      <div className=" w-16 h-16 rounded-md bg-primary  z-10 text-[#ffffff] text-[26px] flex justify-center items-center rotate-90 ">
        <BsArrowLeftRight />
      </div>

      <div className=" w-full lg:w-[50%] h-[128px] bg-[#ffff] rounded-md  px-2 py-[18px] overflow-hidden ">
        {/* title Drop off */}
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-full bg-information flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-primary "></div>
          </div>
          <p className="font-[600] text-txtColor">Drop - Off</p>
        </div>

        {/* information data */}
        <div className="mt-5 flex justify-between">
          <div className=" border-r-[1px]  flex-1 pr-2 flex flex-col items-center">
            <p className="text-[17px] font-[700]">Location</p>
            <div className="flex items-center gap-x-1 mt-3">
              <p>Semarng</p>
              <i>
                <GrFormDown />
              </i>
            </div>
          </div>
          <div className=" border-r-[1px]  flex-1 px-2 flex flex-col items-center">
            <p className="text-[17px] font-[700]">Date</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="date"
                name="dropDate"
                className="w-[90px] h-5  text-[12px]  pl-2"
                value={value.dropDate}
                onChange={changeHandler}
              />

              {/* <i><GrFormDown /></i> */}
            </div>
          </div>
          <div className="  flex-1  flex    flex-col pl-2 items-center">
            <p className="text-[17px] font-[700]">Time</p>
            <div className="flex items-center gap-x-1 mt-3">
              <input
                type="time"
                name="dropTime"
                className="w-[77px] h-5  text-[12px] pl-1"
                value={value.dropTime}
                onChange={changeHandler}
              />
              {/* <i><GrFormDown /></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickAndDrop;
