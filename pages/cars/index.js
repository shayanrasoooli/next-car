import SearchBar from "../../components/module/Searchbar"
import Categories from "../../components/module/categories"
import CarsPage from "../../components/templates/carsPage"
import carsData from "../../data/carsdata"

export default function car() {
    return(
        <div>
            <SearchBar/>
           <Categories />
            <CarsPage data={carsData}/>
        </div>
    )
}