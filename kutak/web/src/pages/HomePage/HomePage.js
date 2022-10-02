import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProductList from 'src/components/ProductList/ProductList'

const HomePage = () => {
  return (
    <>
      <ProductList></ProductList>
    </>
  )
}

export default HomePage
