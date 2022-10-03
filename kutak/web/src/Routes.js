// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import TagsLayout from 'src/layouts/TagsLayout'

import SizesLayout from 'src/layouts/SizesLayout'

import ProductsLayout from 'src/layouts/ProductsLayout'
import GeneralLayout from './layouts/GeneralLayout/GeneralLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TagsLayout}>
        <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
        <Route path="/tags/{id:Int}/edit" page={TagEditTagPage} name="editTag" />
        <Route path="/tags/{id:Int}" page={TagTagPage} name="tag" />
        <Route path="/tags" page={TagTagsPage} name="tags" />
      </Set>
      <Set wrap={SizesLayout}>
        <Route path="/sizes/new" page={SizeNewSizePage} name="newSize" />
        <Route path="/sizes/{id:Int}/edit" page={SizeEditSizePage} name="editSize" />
        <Route path="/sizes/{id:Int}" page={SizeSizePage} name="size" />
        <Route path="/sizes" page={SizeSizesPage} name="sizes" />
      </Set>
      <Set wrap={ProductsLayout}>
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={GeneralLayout}>
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
