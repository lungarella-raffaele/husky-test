import { twoPlusTwo } from './typescript';
import { test, expect } from 'vitest';

test('testdiprova', () => {
  const result = 3;
  expect(twoPlusTwo()).toEqual(result);
})
