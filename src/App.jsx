import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import products from './mocks/products.json'
import Header from './components/Header'
function App() {
  const [filters, setFilter] = useState({
    category: 'all',
    maxPrice: 999999999,
  })


  //PRIMORDIAL - PRODUCTS FILTERING SYSTEM
  const productsFiltering = (products) => {
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }


  return (
    <>
      <Header />
      <Products products={productsFiltering(products)} />
    </>
  )
}


export default App
