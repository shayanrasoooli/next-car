import styles from "./CarsDetail.module.css"
import Company from "../icons/Company"
import Location from "../icons/Location"
import Model from "../icons/Model"
import Money from "../icons/Money"
import Road from "../icons/Road"
import Calender from "../icons/Calender"

export default function CarsDeatil(props) {
    const { id , name , model , year , distance , location , image , price , description } = props;
     
    return(
        <div className={styles.container}>
            <img src={image} className={styles.image} />
            <h3 className={styles.header}>
                {name} {model}
            </h3>
            <div className={styles.details}>
                <div>
                    <Company />
                    <p>Company</p>
                    <span>{name}</span>
                </div>

                <div>
                    <Model />
                    <p>model</p>
                    <span>{model}</span>
                </div>

                <div>
                    <Calender />
                    <p>first registration </p>
                    <span>{year} </span>
                </div>

                <div>
                    <Road />
                    <p>kms driven </p>
                    <span>{distance}</span>
                </div>

                

            </div>

            <div className={styles.details}>
            <div>
                    <location />
                    <p>location</p>
                    <span>{location}</span>
                </div>
            </div>

            <div className={styles.details}>
            <div>
                    <location />
                    <p className={styles.descriptionTitle}>extra information</p>
                    <p className={styles.descritionText}>{description}</p>
                </div>

                <div className={styles.details}>
                    <div className={styles.price}>
                        <Money />
                        <p>{price}</p>
                    </div>
                </div>
                <button className={styles.button}>Buy</button>      
            </div>



        </div>



        )
}