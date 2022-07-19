import { render, screen } from 'utils/test-utils'

import Banner from '.'

const props = {
  img: '/image',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const { container } = render(<Banner {...props} />)

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

  it('should render Banner with Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="normal"
        ribbonColor="secondary"
      />
    )

    const ribbonElement = screen.getByText(/My Ribbon/i)

    expect(screen.getByText(/Play the new/i)).toBeInTheDocument()
    expect(ribbonElement).toBeInTheDocument()
    expect(ribbonElement).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
      backgroundColor: '#3CD3C1'
    })
  })
})
