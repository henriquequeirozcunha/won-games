import { WishlistContextDefaultValues } from 'hooks/use-wishlist'
import { render, screen } from 'utils/test-utils'
import WishlistButton from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const data = { jwt: '123', user: { email: 'lorem@ipsum.com' } }

useSession.mockImplementation(() => {
  return { data }
})

describe('<WishlistButton />', () => {
  it('should render button to add to wishlist if item is not in cart', () => {
    const wishlistDefaultValues = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" />, {
      wishListProviderProps: wishlistDefaultValues
    })

    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should render button to remove from wishlist if item is in cart', () => {
    const wishlistDefaultValues = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, {
      wishListProviderProps: wishlistDefaultValues
    })

    expect(screen.getByLabelText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render button with text to add to wishlist if item is not in wishlist', () => {
    const wishlistDefaultValues = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, {
      wishListProviderProps: wishlistDefaultValues
    })

    expect(screen.getByText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should render button with text to remove from wishlist if item is in wishlist', () => {
    const wishlistDefaultValues = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, {
      wishListProviderProps: wishlistDefaultValues
    })

    expect(screen.getByText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    useSession.mockImplementationOnce(() => {
      return { data: null }
    })

    const wishlistDefaultValues = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, {
      wishListProviderProps: wishlistDefaultValues
    })

    expect(screen.queryByText(/Remove from wishlist/i)).not.toBeInTheDocument()
  })
})
