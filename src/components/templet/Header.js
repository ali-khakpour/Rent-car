import avatar from "../../data/images/ferrari.png";
import { Link, useLocation } from "react-router-dom";
import Search from "../modules/search";
import { BsSliders, BsBell, BsFillHeartFill } from "react-icons/bs";
import { RiSettings3Line } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import SidbarCategory from "../modules/sidbar";

const Header = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  return (
    <header
      className={` bg-[#ffffff] w-full h-[210px] md:h-[124px]  flex justify-center md:items-center mb-16 ${pathname !== "/" && " border-b-[1px] border-[#EEEe] mb-0 "} `
      }
    >
      <section className="w-full  max-w-[1250px] px-4 py-8 md:py-0 ">
        {/*  section for top header */}
        <div className="flex justify-between">
          <div className="w-full">
            {pathname !== "/" ? (
              <i
                onClick={() => setShow(!show)}
                className="text-[#596780] text-[20px] md:hidden"
              >
                {show ? <GrFormClose /> : <BiMenu />}
              </i>
            ) : null}
            <div
              className={`w-full max-w-[450px] min-h-[1024px] shadow-md shadow-secondary z-50 bg-[#fff] absolute top-[75px] left-0 ${
                show ? "block" : "hidden"
              } md:hidden`}
            >
              <SidbarCategory />
            </div>
            <div className="flex  items-center gap-x-8 w-[78%]">
              <p
                className={`${
                  pathname !== "/" && " md:mt-0 mt-7"
                } text-primary font-[700] text-[24px]`}
              >
                MORENT
              </p>

              {/*  section search for md divaice */}
              <div className="hidden md:flex w-full relative ">
                <Search />
              </div>
            </div>
          </div>

          {/* avatars section */}
          <div className="flex gap-x-5 flex-row-reverse">
            <div className="w-10 h-10 rounded-full border-[1px]  flex justify-center items-center ">
              <img src={avatar} alt="avatar" className="w-full h-full" />
            </div>
            <div className="w-10 h-10 rounded-full border-[1px]  md:flex justify-center items-center text-secondary hidden cursor-pointer text-[22px]">
              <RiSettings3Line />
            </div>
            <div className="w-10 h-10 rounded-full border-[1px] md:flex justify-center items-center text-secondary hidden cursor-pointer relative text-[20px]">
              <BsBell />
              <div className="w-3 h-3 rounded-full bg-[#ff4423] absolute -top-[2px] right-0"></div>
            </div>
            <div className="w-10 h-10 rounded-full border-[1px] md:flex justify-center items-center text-secondary hidden cursor-pointer text-[20px]">
              <BsFillHeartFill />
            </div>
          </div>
        </div>

        {/* section for search and category of header */}
        <div className="flex justify-between mt-8 text-[#596780] md:hidden">
          <Search />

          <Link
            to="/category"
            className="w-12 h-12 rounded-md flex justify-center items-center border-[1px] border-[#C3D4E966]"
          >
            <BsSliders />
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
