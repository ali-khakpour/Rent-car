import {RiSearch2Line} from 'react-icons/ri'
import {BsSliders} from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Search = () => {
    return ( 
        <div className="flex items-center justify-between px-3 w-[77%]  max-w-[492px] h-12 border-[1px] border-[#C3D4E966] rounded-lg md:rounded-full relative overflow-hidden ">
           <span className='text-[24px] text-secondary'><RiSearch2Line /></span>
            <input type='text' placeholder='Search something here' className="w-full h-full border-none outline-none px-2 text-[17px] text-[#555] flex-1"  />
            <Link
            to="/category"
            className=" text-[20px] text-secondary hidden md:block  "
          >
            <BsSliders />
          </Link>
        </div>
     );
}
 
export default Search;