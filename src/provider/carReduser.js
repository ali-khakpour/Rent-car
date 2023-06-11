const carReducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
        const index = state.findIndex(i => i.id === action.id)
        const cars = {...state[index]}
        cars.status = !cars.status;
        if (cars.status) {
            cars.like = cars.like + action.value
        }else{
            cars.like = cars.like - action.value
        }
        console.log(cars);
        const updateCars = [...state];
        updateCars[index] = cars
        return updateCars
    default: 
  }
};

export default carReducer;
