import AddButton from "../components/module/AddButton";
import SearchBar from "../components/module/Searchbar"
import Categories from "../components/module/categories"
import CarsPage from "../components/templates/carsPage"
import carsData from "../data/carsdata"

export default function Home() {
  const cars = carsData.slice(0 , 3);
  return (
    <div>
    <SearchBar/>
   <Categories />
   <AddButton/>
    <CarsPage data={cars}/>
    </div>
  )
}
