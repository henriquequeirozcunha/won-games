import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="/image"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', '/image')
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Play the new/i)).toBeInTheDocument()
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/games/defy-death'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
