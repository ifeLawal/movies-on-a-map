import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom'

const renderApp = () => render(<LocationCardList />)

const testIds = {
  textInputTitle: "text-input-title",
  textInputNeighborhood: "text-input-neighborhood",
}

// const locations =

beforeEach(() => {

});

afterEach(() => {
  cleanup();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

