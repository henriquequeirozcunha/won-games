import { render, screen, fireEvent } from 'utils/test-utils'
import theme from 'styles/theme'

import GameCard from '.'

const props = {
  id: '1',
  slug: 'game-title',
  img: '/image',
  title: 'Game Title',
  developer: 'Game Developer',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(
      screen.getByRole('heading', { name: 'Game Title' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Game Developer' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render GameCard without promotional price', () => {
    render(<GameCard {...props} />)

    const priceElement = screen.getByText('$235.00')

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
    render(<GameCard {...props} promotionalPrice={200} />)

    const priceElement = screen.getByText('$235.00')
    const promotionalPriceElement = screen.getByText('$200.00')

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
    render(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render GameCard with filled FavIcon when favorite is false', () => {
    render(<GameCard {...props} />)
    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    render(<GameCard {...props} favorite onFav={onFav} />)

    const buttonFavElement = screen.getAllByRole('button')[0]

    fireEvent.click(buttonFavElement)

    expect(onFav).toBeCalled()
  })

  it('should render GameCard with Ribbon', () => {
    render(
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
