import { render, cleanup } from '@testing-library/react'

import PlacesExist from './PlacesExist'

describe('PlacesExist', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PlacesExist />)
    }).not.toThrow()
  })
})
