import { render, cleanup } from '@testing-library/react'

import ShowUserPlaces from './ShowUserPlaces'

describe('ShowUserPlaces', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ShowUserPlaces />)
    }).not.toThrow()
  })
})
