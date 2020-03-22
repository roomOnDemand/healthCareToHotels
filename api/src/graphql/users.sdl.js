export const schema = gql`
  type User {
    id: Int!
    email: String!
    lat: Float!
    long: Float!
  }

  type Query {
    users: [User]
  }

  input UserInput {
    email: String
    lat: Float
    long: Float
  }

  type Mutation {
    createUser(input: UserInput!): User
  }
`
