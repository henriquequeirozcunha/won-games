import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Game Title',
    developer: 'Game Developer',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
