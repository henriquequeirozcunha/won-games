import { Story, Meta } from '@storybook/react'
import Auth from '.'

export default {
  title: 'Auth',
  component: Auth
} as Meta

export const Default: Story = () => <Auth />
