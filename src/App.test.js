// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainRay title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainRay/i);
    expect(titleElement).toBeInTheDocument();
});
