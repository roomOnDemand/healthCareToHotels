import ShowUserPlaces from 'src/components/ShowUserPlaces'
import { Link, routes } from '@redwoodjs/router'
const HomePage = () => (
  //layouts
  <>
    <Link to={routes.needToFindPlaces()}>Link</Link>
    <ShowUserPlaces />
  </>
)

export default HomePage
