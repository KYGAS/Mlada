import { render } from '@redwoodjs/testing/web'

import ProductList from './ProductList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductList />)
    }).not.toThrow()
  })
})
