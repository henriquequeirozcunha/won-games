import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  price: number
  description: string
}

const GameInfo = ({ title, price, description }: GameInfoProps) => (
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
      <Button size="large" icon={<AddShoppingCart />}>
        Add to chart
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
