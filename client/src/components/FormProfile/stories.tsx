import { Story, Meta } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'form/FormProfile',
  component: FormProfile
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '860', margin: 'auto' }}>
    <FormProfile />
  </div>
)
