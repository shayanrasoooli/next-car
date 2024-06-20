import { useRouter } from "next/router";
import carsdata from "../../data/carsdata"
import CarsList from "../../components/templates/carsList"

export default function Filtered() {
    const router = useRouter()
    const [min , max] = router.query.slug || [];
    console.log(min , max);

    const filtered = carsdata.filter((item) => item.price > min && item.price < max );
    console.log(filtered);

    if(filtered.length < 1){
        return(
            <h3>not Found</h3>
        )
    }

    return(
        <CarsList data={filtered} />
    )
}