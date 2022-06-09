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
  upCommingGames: GameCardProps[]
  upCommingHilight: HighlightProps
  upCommingMoreGames: GameCardProps[]
  freeGameHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upCommingGames,
  upCommingHilight,
  upCommingMoreGames,
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
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcmming" games={upCommingGames} />
      <Showcase highlight={upCommingHilight} games={upCommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase
      title="Free Games"
      highlight={freeGameHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
