import Filters from "./Filters"
import products from "../mocks/products.json"
const Header = () => {
    return (
        <header>
            <h1>My prototype shop</h1>
            <Filters products={products} />
        </header>
    )
}


export default Header