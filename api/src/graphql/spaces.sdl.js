export const schema = gql`
  type Space {
    id: Int!
    address: String!
    state: String!
    zipcode: String!
    type: String
    size: String
    price: String
    listingUrl: String!
  }

  type Query {
    spaces: [Space]
    space(id: Int!): Space
  }

  input SpaceInput {
    address: String
    state: String
    zipcode: String
    type: String
    size: String
    price: String
    availability: Boolean
    listingUrl: String
  }

  type Mutation {
    createSpace(input: SpaceInput!): Space
    updateSpace(id: Int!, input: SpaceInput!): Space
    deleteSpace(id: Int!): Space
  }
`
