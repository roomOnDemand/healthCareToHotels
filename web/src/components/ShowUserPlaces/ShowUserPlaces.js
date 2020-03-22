import { useState, useEffect } from 'react'
import { usePosition } from 'use-position'
import PlacesExist from 'src/components/PlacesExist'
import PlacesDoNotExist from 'src/components/PlacesDoNotExist'

//import { Link, routes } from '@redwoodjs/router'

const ShowUserPlaces = () => {
  const { latitude, longitude, error } = usePosition()

  const [placesExist, setPlaces] = useState(false)
  const [didMount, setDidMount] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [comp, renderComp] = useState(null)

  useEffect(() => {
    //didMount working correctly
    //let's try a single link

    if (didMount) {
      renderComp(
        placesExist ? (
          <PlacesExist position={{ latitude, longitude }} />
        ) : (
          <PlacesDoNotExist />
        )
      )
    }

    setDidMount(true)
  }, [trigger])
  //break this problem up further

  return (
    <>
      <button onClick={() => setTrigger(true)}>Search For Places</button>
      {comp}
    </>
  )
}

export default ShowUserPlaces

// Problem statement
// targeting
// relationship w/ lofty space
// demo
