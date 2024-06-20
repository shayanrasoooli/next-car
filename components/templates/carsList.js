import styles from "../templates/carList.module.css"
import Back from "../icons/Back"
import { useRouter } from "next/router"
import Card from "../module/card"

export default function carList({data}) {
    const router = useRouter();

    const backHandler = () => {
        router.back()
    }
    return(
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back/>
                <p>Back</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map((item) => (
                        <Card key={item.id} {...item} /> 
                    ))
                }
            </div>
        </div>
    )
}