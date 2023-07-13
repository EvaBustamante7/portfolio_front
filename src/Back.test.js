import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Back from './components/back/Back';

describe('Back Component', () => {
  test('renders Loading... when dataBack is empty', () => {
    render(<Back />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
