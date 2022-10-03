export const schema = gql`
  type Product {
    id: Int!
    name: String!
    description: String!
    price: Float!
    sizes: [Size]!
    tags: [Tag]!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    name: String!
    description: String!
    price: Float!
  }

  input UpdateProductInput {
    name: String
    description: String
    price: Float
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
