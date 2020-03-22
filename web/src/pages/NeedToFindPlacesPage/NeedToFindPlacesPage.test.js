import { render, cleanup } from '@testing-library/react'

import NeedToFindPlacesPage from './NeedToFindPlacesPage'

describe('NeedToFindPlacesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NeedToFindPlacesPage />)
    }).not.toThrow()
  })
})
