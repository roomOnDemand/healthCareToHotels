import { render, cleanup } from '@testing-library/react'

import PlacesExistPage from './PlacesExistPage'

describe('PlacesExistPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PlacesExistPage />)
    }).not.toThrow()
  })
})
