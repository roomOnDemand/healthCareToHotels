import { render, cleanup } from '@testing-library/react'

import SiteLayout from './SiteLayout'

describe('SiteLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SiteLayout />)
    }).not.toThrow()
  })
})
