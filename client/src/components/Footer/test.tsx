import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = render(<Footer />)

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
