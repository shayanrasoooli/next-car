import { useState } from "react"
import styles from "../module/SearchBar.module.css"
import { useRouter } from "next/navigation"


export default function SearchBar() {
    const [min , SetMin] = useState();
    const [max , SetMax] = useState();
    const router = useRouter()


    const clickHandler = () => {
            if(max & min){
                router.push(`/filter/${min}/${max}`);

            }else{
                alert('empty')
            }

    }
    return(
        <div className={styles.container}>
            <div>
                <input value={min} onChange={(e) => SetMin(e.target.value)} placeholder="Inter min-price" />
                <input placeholder="Inter max-price" value={max} onChange={(e) => SetMax(e.target.value)} />
            </div>
        <button onClick={clickHandler}>Search</button>
        </div>
    )
}