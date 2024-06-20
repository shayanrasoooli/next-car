import Link from "next/link"
import styles from "./layout.module.css"

export default function Layout({children}) {
    return(
        <>
        <header className={styles.header}>
            <Link href='/'>
            <h1>Next Cars</h1>
            <p>choose and buy your car</p>
            </Link>
        </header>

        <div className={styles.container}>{children}</div>

        <footer className={styles.footer}>
        <a href="/">
          Next Cars
        </a>
        Next.js | NextCar Project &copy;
      </footer>

        
        
        
        </>
    )
}