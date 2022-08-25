import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    padding-bottom: ${theme.spacings.xsmall};
    overflow-wrap: break-word;
    word-wrap: break-word;
    font-family: ${theme.font.family};
  `}
`

export const ImageBox = styled.a`
  position: relative;
  min-height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.primary};
    right: -1rem;
    cursor: pointer;
    top: 0;

    svg {
      width: 1.6rem;
    }
  `}
`

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    line-height: ${theme.font.sizes.medium};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;
    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
