import { Story, Meta } from '@storybook/react'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => (
  <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
    <ProfileMenu {...args} />
  </div>
)
