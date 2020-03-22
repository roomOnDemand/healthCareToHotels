import { Link, routes } from '@redwoodjs/router'

import Spaces from 'src/components/Spaces'

export const QUERY = gql`
  query POSTS {
    spaces {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No spaces yet. '}
      <Link
        to={routes.newSpace()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ spaces }) => {
  return <Spaces spaces={spaces} />
}
