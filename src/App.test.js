import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('displays header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Covid-19 Confirmed Cases By County/i);
  expect(header).toBeInTheDocument();
});

test('last updated appears', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Updated/i);
  expect(header).toBeInTheDocument();
});