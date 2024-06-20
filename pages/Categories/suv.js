import carsData from "../../data/carsdata"
import CarList from "../../components/templates/carsList";

export default function Suv(){
   const suv = carsData.filter((car) => car.category === "suv");
   console.log(suv);
    return(
        <CarList data={suv} /> 
        ) 
}