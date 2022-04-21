import { render, screen } from '@testing-library/react'
import App from '../pages/index'
import '@testing-library/jest-dom'

describe('Index', () => {
  it('renders a heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      name: /hello world!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
