import Button, { ButtonProps } from 'components/Button'
import { FavoriteBorder, Favorite } from '@styled-icons/material-outlined'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Spinner from 'components/Spinner'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText = false,
  size = 'small'
}: WishlistButtonProps) => {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const inWishlist = isInWishlist(id)
  const ButtonText = inWishlist ? 'Remove from wishlist' : 'Add to wishlist'

  const handleClick = async () => {
    setLoading(true)
    inWishlist ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  if (!session) return null

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : inWishlist ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
      onClick={handleClick}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
