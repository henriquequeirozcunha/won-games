import Cart, { CartTemplateProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      items: itemsMock,
      total: 'R$ 430,00',
      cards: cardsMock
    }
  }
}
