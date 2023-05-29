import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Card from './components/Card';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// remove the mock to ensure tests are completely isolated

global.fetch.mockRestore();
