import carsData from "../../data/carsdata"
import CarList from "../../components/templates/carsList";

export default function Sedan(){
   const sedan = carsData.filter((car) => car.category === "sedan");
   console.log(sedan);
    return(
        <CarList data={sedan} /> 
        ) 
}