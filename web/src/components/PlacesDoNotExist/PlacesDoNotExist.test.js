import { render, cleanup } from '@testing-library/react'

import PlacesDoNotExist from './PlacesDoNotExist'

describe('PlacesDoNotExist', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PlacesDoNotExist />)
    }).not.toThrow()
  })
})
