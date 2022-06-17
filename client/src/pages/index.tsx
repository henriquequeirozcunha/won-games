import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hilightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
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
