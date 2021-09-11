import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.main`
  position: relative;

  ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;
      &::before {
        display: none;
      }
    }
  `}

  ${media.greaterThan('medium')`
  box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
`}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    background-color: rgba(${theme.colors.lightGray});
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 23rem;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;

    ${media.greaterThan('medium')`
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    margin-bottom: ${theme.spacings.xsmall};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
