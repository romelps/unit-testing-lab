import { render } from '@testing-library/react';
import App from './App';

test('renders an h1 tag', () => {
  const app = render(<App />);
  const heading = app.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('Todo List')
});

