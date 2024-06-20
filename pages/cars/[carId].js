import { useRouter } from "next/router"
import carsData from "../../data/carsdata";
import CarsDeatil from "../../components/templates/CarsDetail";

export default function CarsDetail() {
    const router = useRouter();
    const { carId } = router.query;
    const carDetail  =  carsData[carId - 1];
    // console.log(carId );
    // console.log(carDetail);
    return (
        <CarsDeatil  {...carDetail} /> 
    )
}