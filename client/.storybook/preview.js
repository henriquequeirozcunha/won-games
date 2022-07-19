import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { CartContext, CartContextDefaultValues } from '../src/hooks/use-cart'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartValueContext || {}),
          ...context.args
        }}
      >
        <GlobalStyles />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]
