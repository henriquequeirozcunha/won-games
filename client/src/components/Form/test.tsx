import { render } from 'utils/test-utils'

import { FormWrapper, FormLink } from '.'

describe('<FormWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">linnk</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchSnapshot()
  })
})
