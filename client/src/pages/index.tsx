import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/mock'
import hilightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/tests/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonlink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon?.text,
          ribbonColor: banner.ribbon?.color,
          ribbonSize: banner.ribbon?.size
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: hilightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHilight: hilightMock,
      upcomingMoreGames: gamesMock,
      freeGameHighlight: hilightMock,
      freeGames: gamesMock
    }
  }
}
