import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

test('Page', async () => {
  render(await Page({ params: { locale: 'en' } }));
  expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  expect(screen.getByRole('link', { name: 'About Us' })).toBeDefined();
});
