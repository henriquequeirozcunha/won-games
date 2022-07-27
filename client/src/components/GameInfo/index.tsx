import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'
import { FavoriteBorder } from 'styled-icons/material-outlined'
import * as S from './styles'
import CartButton from 'components/CartButton'

export type GameInfoProps = {
  id: string
  title: string
  price: number
  description: string
}

const GameInfo = ({ id, title, price, description }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large" icon={<FavoriteBorder />} minimal>
        Wishlist
      </Button>
      <CartButton id={id} size="large" hasText />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
