import SpacesLayout from 'src/layouts/SpacesLayout'
import SpaceCell from 'src/components/SpaceCell'

const SpacePage = ({ id }) => {
  return (
    <SpacesLayout>
      <SpaceCell id={id} />
    </SpacesLayout>
  )
}

export default SpacePage
