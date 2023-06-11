import { Link } from "react-router-dom";
import CarCart from "../modules/carCart";

const PopularCar = () => {
    return ( 
        <div className="w-full overflow-hidden -translate-y-16 md:translate-y-10 mb-10 ">
            <div className=" w-full flex justify-between px-2">
                <p className="text-secondary text-[13px] font-[600]">Popular Car</p>
                <Link to="/allPopularCar" className="text-primary   text-[13px] font-[600] ">View All</Link>
            </div>
           <CarCart />

        </div>
     );
}
 
export default PopularCar;