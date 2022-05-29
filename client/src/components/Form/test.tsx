import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper, FormLink } from '.'

describe('<FormWrapper />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">linnk</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchSnapshot()
  })
})
