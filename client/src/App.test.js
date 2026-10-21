import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders learn react link', async () => {
  axios.get.mockResolvedValue({ data: [] });
  render(<App />);
  expect(await screen.findByText(/learn react/i)).toBeInTheDocument();
});
