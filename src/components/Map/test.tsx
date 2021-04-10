import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('shoud render with without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })
  it('should render with the marker correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao_paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
  })
})
