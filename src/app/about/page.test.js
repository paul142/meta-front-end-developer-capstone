/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Page from './page'

it('App Router: Works with Server Components', () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
  //expect(screen.getByText('main')).toHaveTextContent('Little Lemon')
})

