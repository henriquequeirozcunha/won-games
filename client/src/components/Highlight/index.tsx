import Button from 'components/Button'
import Image from 'next/image'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment}>
    <Image src={backgroundImage} alt={title} layout="fill" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} width={400} height={300} />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
