export const schema = gql`
  type Size {
    id: Int!
    velicina: Int!
    Product: Product
    productId: Int
  }

  type Query {
    sizes: [Size!]! @requireAuth
    size(id: Int!): Size @requireAuth
  }

  input CreateSizeInput {
    velicina: Int!
    productId: Int
  }

  input UpdateSizeInput {
    velicina: Int
    productId: Int
  }

  type Mutation {
    createSize(input: CreateSizeInput!): Size! @requireAuth
    updateSize(id: Int!, input: UpdateSizeInput!): Size! @requireAuth
    deleteSize(id: Int!): Size! @requireAuth
  }
`
