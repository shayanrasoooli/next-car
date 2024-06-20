import Card from "../module/card"
import styles from "./carsPage.module.css"

export default function CarsPage({data}) {
    return(
        <div className={styles.container} >
        {data.map((car) => 
        <Card key={car.id} {...car}/>
        )}
        </div>
    )
}