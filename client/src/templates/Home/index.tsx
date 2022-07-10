import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHilight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGameHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHilight,
  upcomingMoreGames,
  freeGameHighlight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBannerSlider>
        <BannerSlider items={banners} />
      </S.SectionBannerSlider>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHilight} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase
      title="Free Games"
      highlight={freeGameHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
