import { render, screen } from '@testing-library/react';
import App, {SocialNetworkApp} from './App';
import ReactDOM, {createRoot} from "react-dom/client";
import React from "react";
import {act} from "react-dom/test-utils";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<SocialNetworkApp/>);
    root.unmount();
  });
});