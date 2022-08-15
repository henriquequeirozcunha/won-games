import 'session.mock'
import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'Game Title',
  price: 100,
  description: 'Game description'
}

describe('<GameInfo />', () => {
  it('should render with Title, Banner and description', () => {
    const { container } = render(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/\$100\.00/)).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button', () => {
    render(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
