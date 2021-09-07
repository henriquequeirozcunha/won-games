import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />)

    const contactColumnElement = screen.getByText(/Contact/i)
    const followUsColumnElement = screen.getByText(/Follow us/i)
    const linksColumnElement = screen.getByText(/Links/i)
    const locationColumnElement = screen.getByText(/Location/i)

    expect(contactColumnElement).toBeInTheDocument()
    expect(followUsColumnElement).toBeInTheDocument()
    expect(linksColumnElement).toBeInTheDocument()
    expect(locationColumnElement).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
