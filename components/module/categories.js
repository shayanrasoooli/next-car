import Link from "next/link"
import styles from "./categories.module.css"
import Sedan from "../icons/Sedan"
import Hatchback from "../icons/Hatchback"
import Suv from "../icons/Suv"
import Sport from "../icons/Sport"

export default function Categories() {
    return(
        <div className={styles.container}>
            <Link href="/Categories/sedan">
            <div>
                <p>Sedan</p>
                <Sedan />
            </div>
            </Link>

            <Link href="/Categories/suv">
            <div>
                <p>Suv</p>
                <Suv />
            </div>
            </Link>

            <Link href="/Categories/hatchback">
            <div>
                <p>Hatchback</p>
                <Hatchback />
            </div>
            </Link>

            <Link href="/Categories/sport">
            <div>
                <p>sport</p>
                <Sport />
            </div>
            </Link>
        </div>
        )
}