import carsData from "../../data/carsdata"
import CarList from "../../components/templates/carsList";

export default function Hatchback(){
   const hatchback = carsData.filter((car) => car.category === "hatchback");
   console.log(hatchback);
    return(
        <CarList data={hatchback} /> 
        ) 
}