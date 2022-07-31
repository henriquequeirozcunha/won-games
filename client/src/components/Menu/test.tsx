import { render, screen, fireEvent } from 'utils/test-utils'

import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
  })

  it('should handle de open/close mobile menu', () => {
    render(<Menu />)

    const menuFullElement = screen.getByRole('navigation', { hidden: true })

    expect(menuFullElement.getAttribute('aria-hidden')).toBe('true')
    expect(menuFullElement).toHaveStyle({ opacity: 0 })

    const openMenuElement = screen.getByLabelText(/open menu/i)

    fireEvent.click(openMenuElement)

    expect(menuFullElement.getAttribute('aria-hidden')).toBe('false')
    expect(menuFullElement).toHaveStyle({ opacity: 1 })

    const closeMenuElement = screen.getByLabelText(/close menu/i)

    fireEvent.click(closeMenuElement)

    expect(menuFullElement.getAttribute('aria-hidden')).toBe('true')
    expect(menuFullElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    render(<Menu />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
  })

  it('should show RegisterBox on user is logged', () => {
    render(<Menu username="henrique" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)

    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument()
  })

  it('should handle show/hide buttons depending on username', () => {
    render(<Menu />)

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2)
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()

    expect(screen.queryByText(/My profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
  })

  it('should not show sign ir or dropdownUser if loading', () => {
    render(<Menu username="will" loading />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
