import React, { useReducer } from "react";
import { useContext } from "react";
import Data from '../data/db'
import carReducer from "./carReduser";


const CarContext = React.createContext();
const CarContextDispatch = React.createContext();


const Provider = ({children}) => {
    const [car , dispatch] = useReducer(carReducer, Data)

    return ( 
        <CarContext.Provider value={car}>
            <CarContextDispatch.Provider value={dispatch}>
                {children}
            </CarContextDispatch.Provider>
        </CarContext.Provider>

     );
}
 
export default Provider;



export  const  useCar = ()=> useContext(CarContext);
export const useCarAction = ()=> useContext(CarContextDispatch)