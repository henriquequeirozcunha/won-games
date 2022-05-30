import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })

  it('should handle de open/close mobile menu', () => {
    renderWithTheme(<Menu />)

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

  it('should show RegisterBox on user is logged', () => {
    renderWithTheme(<Menu username="henrique" />)

    expect(screen.getByText(/My account/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()

    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument()
  })

  it('should handle show/hide buttons depending on username', () => {
    renderWithTheme(<Menu />)

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2)
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()

    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
  })
})
