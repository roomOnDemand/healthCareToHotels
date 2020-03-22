// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
const Routes = () => {
  return (
    <Router>
      <Route path="/spaces" page={SpacesPage} name="spaces" />
      <Route path="/spaces/{id:Int}" page={SpacePage} name="space" />
      <Route path="/spaces/{id:Int}/edit" page={EditSpacePage} name="editSpace" />
      <Route path="/spaces/new" page={NewSpacePage} name="newSpace" />
      <Route
        path="/need-to-find-places"
        page={NeedToFindPlacesPage}
        name="needToFindPlaces"
      />
      <Route
        path="/places-exist/{latlong}"
        page={PlacesExistPage}
        name="placesExist"
      />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
