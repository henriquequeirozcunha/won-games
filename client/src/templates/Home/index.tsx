import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import Showcase from 'components/Showcase'
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
  <section>
    <Container>
      <Menu />
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

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
