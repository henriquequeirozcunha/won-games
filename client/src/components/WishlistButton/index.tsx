import Button, { ButtonProps } from 'components/Button'
import { FavoriteBorder, Favorite } from '@styled-icons/material-outlined'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/react'

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
  const { isInWishlist } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  if (!session) return null

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
