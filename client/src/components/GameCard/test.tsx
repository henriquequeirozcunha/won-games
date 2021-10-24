import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  img: '/image',
  title: 'Game Title',
  developer: 'Game Developer',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
    expect(
      screen.getByRole('heading', { name: 'Game Title' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Game Developer' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should render GameCard without promotional price', () => {
    renderWithTheme(<GameCard {...props} />)

    const priceElement = screen.getByText('R$ 235,00')

    expect(priceElement).toBeInTheDocument()
    expect(priceElement).not.toHaveStyle({
      textDecoration: 'line-through',
      color: '#8F8F8F'
    })
    expect(priceElement).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })
  it('should render GameCard with promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)

    const priceElement = screen.getByText('R$ 235,00')
    const promotionalPriceElement = screen.getByText('R$ 200,00')

    expect(promotionalPriceElement).toBeInTheDocument()
    expect(promotionalPriceElement).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      color: theme.colors.white
    })
    expect(priceElement).toBeInTheDocument()
    expect(priceElement).toHaveStyle({
      textDecoration: 'line-through',
      color: theme.colors.gray
    })
  })

  it('should render GameCard with filled FavIcon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render GameCard with filled FavIcon when favorite is false', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    const buttonFavElement = screen.getAllByRole('button')[0]

    fireEvent.click(buttonFavElement)

    expect(onFav).toBeCalled()
  })

  it('should render GameCard with Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="normal"
        ribbonColor="secondary"
      />
    )

    const ribbonElement = screen.getByText(/My Ribbon/i)

    expect(ribbonElement).toBeInTheDocument()
    expect(ribbonElement).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
      backgroundColor: '#3CD3C1'
    })
  })
})
