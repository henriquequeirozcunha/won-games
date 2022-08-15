import { WishlistContextDefaultValues } from 'hooks/use-wishlist'
import { act } from 'react-dom/test-utils'
import { render, screen, fireEvent, waitFor } from 'utils/test-utils'
import WishlistButton from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const data = { jwt: '123', user: { email: 'lorem@ipsum.com' } }

useSession.mockImplementation(() => {
  return { data }
})

describe('<WishlistButton />', () => {
  it('should render button to add to wishlist if item is not in cart', () => {
    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" />, { wishListProviderProps })

    expect(screen.getByLabelText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should render button to remove from wishlist if item is in cart', () => {
    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" />, { wishListProviderProps })

    expect(screen.getByLabelText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render button with text to add to wishlist if item is not in wishlist', () => {
    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, { wishListProviderProps })

    expect(screen.getByText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should render button with text to remove from wishlist if item is in wishlist', () => {
    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishListProviderProps })

    expect(screen.getByText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    useSession.mockImplementationOnce(() => {
      return { data: null }
    })

    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishListProviderProps })

    expect(screen.queryByText(/Remove from wishlist/i)).not.toBeInTheDocument()
  })

  it('should add to wishlist', () => {
    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishListProviderProps })

    act(() => {
      fireEvent.click(screen.getByText(/Add to wishlist/i))
    })

    waitFor(() => {
      expect(wishListProviderProps.addToWishlist).toHaveBeenCalled()
      expect(wishListProviderProps.addToWishlist).toHaveBeenCalledWith('1')
    })
  })

  it('should remove from wishlist', () => {
    const wishListProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton id="1" hasText />, { wishListProviderProps })

    act(() => {
      fireEvent.click(screen.getByText(/Remove from wishlist/i))
    })

    waitFor(() => {
      expect(wishListProviderProps.removeFromWishlist).toHaveBeenCalled()
      expect(wishListProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
    })
  })
})
