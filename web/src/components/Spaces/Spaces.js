import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteSpaceMutation($id: Int!) {
    deleteSpace(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const SpacesList = ({ spaces }) => {
  const [deleteSpace] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete space ' + id + '?')) {
      deleteSpace({ variables: { id } })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">address</th>
            <th className="font-semibold text-left p-3">state</th>
            <th className="font-semibold text-left p-3">zipcode</th>
            <th className="font-semibold text-left p-3">type</th>
            <th className="font-semibold text-left p-3">size</th>
            <th className="font-semibold text-left p-3">price</th>
            <th className="font-semibold text-left p-3">availability</th>
            <th className="font-semibold text-left p-3">listingUrl</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {spaces.map((space) => (
            <tr
              key={space.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(space.id)}</td>
              <td className="p-3">{truncate(space.address)}</td>
              <td className="p-3">{truncate(space.state)}</td>
              <td className="p-3">{truncate(space.zipcode)}</td>
              <td className="p-3">{truncate(space.type)}</td>
              <td className="p-3">{truncate(space.size)}</td>
              <td className="p-3">{truncate(space.price)}</td>
              <td className="p-3">{truncate(space.availability)}</td>
              <td className="p-3">{truncate(space.listingUrl)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.space({ id: space.id })}
                        title={'Show space ' + space.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editSpace({ id: space.id })}
                        title={'Edit space ' + space.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete space ' + space.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(space.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpacesList
