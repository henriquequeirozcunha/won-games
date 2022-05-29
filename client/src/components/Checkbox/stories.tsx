import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox label="Action" labelFor="action" isChecked {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Adventure" labelFor="adventure" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Strategy" labelFor="strategy" {...args} />
    </div>
  </>
)
