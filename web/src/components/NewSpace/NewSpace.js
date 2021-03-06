import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SpaceForm from 'src/components/SpaceForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateSpaceMutation($input: SpaceInput!) {
    createSpace(input: $input) {
      id
    }
  }
`

const NewSpace = () => {
  const [createSpace, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.spaces())
    },
  })

  const onSave = (input) => {
    createSpace({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Space</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SpaceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSpace
