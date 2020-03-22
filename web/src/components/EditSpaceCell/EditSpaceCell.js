import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SpaceForm from 'src/components/SpaceForm'

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
const UPDATE_POST_MUTATION = gql`
  mutation UpdateSpaceMutation($id: Int!, $input: SpaceInput!) {
    updateSpace(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ space }) => {
  const [updateSpace, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.spaces())
    },
  })

  const onSave = (input, id) => {
    updateSpace({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Space {space.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SpaceForm space={space} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
