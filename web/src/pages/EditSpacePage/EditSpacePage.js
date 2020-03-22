import SpacesLayout from 'src/layouts/SpacesLayout'
import EditSpaceCell from 'src/components/EditSpaceCell'

const EditSpacePage = ({ id }) => {
  return (
    <SpacesLayout>
      <EditSpaceCell id={id} />
    </SpacesLayout>
  )
}

export default EditSpacePage
