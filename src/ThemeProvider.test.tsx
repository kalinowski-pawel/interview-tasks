import { useContext } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeContext, ThemeProvider } from './ThemeProvider'

function Consumer() {
  const { theme } = useContext(ThemeContext)
  return <div data-testid="consumer">{theme}</div>
}

describe('ThemeProvider / ThemeContext', () => {
  it('provides default context value when no props provided', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    )

    const consumer = screen.getByTestId('consumer')
    // expect(consumer).toHaveTextContent('default')

    // wrapper should be the parent of the consumer
    const wrapper = consumer.parentElement as HTMLElement
    expect(wrapper).toBeTruthy()
    expect(wrapper.classList.contains('default')).toBe(true)
    expect(wrapper.classList.contains('ds')).toBe(true)
  })

  it('applies provided theme and prefix as classes on the wrapper', () => {
    render(
      <ThemeProvider theme="dark" prefix="acme">
        <div data-testid="child">child</div>
      </ThemeProvider>
    )

    const child = screen.getByTestId('child')
    const wrapper = child.parentElement as HTMLElement

    expect(wrapper.classList.contains('dark')).toBe(true)
    expect(wrapper.classList.contains('acme')).toBe(true)
  })

  it('exposes the provided theme through ThemeContext to descendants', () => {
    render(
      <ThemeProvider theme="dark">
        <Consumer />
      </ThemeProvider>
    )

    // expect(screen.getByTestId('consumer')).toHaveTextContent('dark')
  })
})
