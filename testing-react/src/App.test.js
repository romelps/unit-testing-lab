import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders an h1 tag', () => {
  const app = render(<App />);
  const heading = app.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('Todo List')
});

test('The add item label exists', () => {
  const app = render(<App />);
  const list = app.getByLabelText('New To Do:');
  expect(list).toBeInTheDocument();
})

test('clicking the button displays a new todo item', () => {
  const app = render(<App />);
  const button = app.getByText('Add Todo');

  fireEvent.click(button);

  const listItems = app.getAllByRole('list item');
  expect(listItems).toBeInTheDocument();
});