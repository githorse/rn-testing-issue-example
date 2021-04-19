/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/* import { cleanup } from '@testing-library/react-native'; */

jest.useFakeTimers();

/* afterEach(cleanup); */

console.log("I'm a test");

it('renders correctly', () => {
  const ans = renderer.create(<App />);
  console.log(ans.toJSON());
});

test('bad math', () => {
  /* expect(2 + 2).toBe(5); */
  expect(2 + 2).toBe(4);
});
