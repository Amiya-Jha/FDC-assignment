import Header from "./components/Header";
import Products from "./components/Products";
import Search from "./components/Search"

const page = () => {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Products></Products>
    </div>
  )
}

export default page