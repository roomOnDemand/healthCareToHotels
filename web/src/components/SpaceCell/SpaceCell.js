import Space from 'src/components/Space'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    space: space(id: $id) {
      id
      address
      state
      zipcode
      type
      size
      price
      availability
      listingUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Space not found</div>

export const Success = ({ space }) => {
  return <Space space={space} />
}
