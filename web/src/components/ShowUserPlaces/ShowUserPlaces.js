import { useState } from 'react'
import { usePosition } from 'use-position'
import PlacesExist from 'src/components/PlacesExist'
import PlacesDoNotExist from 'src/components/PlacesDoNotExist'

const DoPlacesExist = () => {
  const { latitude, longitude, error } = usePosition()
  const [placesExist, setPlacesExist] = useState(false)

  return placesExist ? (
    <PlacesExist position={{ latitude, longitude }} /> //may want to switch to links
  ) : (
    <PlacesDoNotExist />
  )
  //if no user location
  //display zipcode form
}

const ShowUserPlaces = () => {
  return <button onClick={DoPlacesExist}>Find Places</button>
  //<DoPlacesExist />
}

export default ShowUserPlaces
