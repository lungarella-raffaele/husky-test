import { twoPlusTwo } from './typescript';
import { test, expect } from 'vitest';

test('testdiprova', () => {
	const result = 4;
	expect(twoPlusTwo()).toEqual(result);
});
