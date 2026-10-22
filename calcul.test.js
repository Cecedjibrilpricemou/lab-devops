import { test, expect } from 'vitest';
import { calculerTTC } from './calcul.js';

test('Calcule correctement la TVA à 20%', () => {
  expect(calculerTTC(100)).toBe(120);
});

test('Renvoie 0 si le prix HT est négatif', () => {
  expect(calculerTTC(-50)).toBe(0);
});
