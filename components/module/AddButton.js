import Link from "next/link"
import styles from "./AddButton.module.css"

export default function AddButton() {
    return(
        <div className={styles.container}>
            <Link href='/cars'>see all cars</Link>
        </div>
    )
}