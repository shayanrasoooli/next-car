import carsData from "../../data/carsdata"
import CarList from "../../components/templates/carsList";

export default function Sport(){
   const sport = carsData.filter((car) => car.category === "sport");
   console.log(sport);
    return(
        <CarList data={sport} /> 
        ) 
}