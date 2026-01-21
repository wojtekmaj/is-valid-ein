import { describe, expect, it } from 'vitest';

import isValidEIN from './index.js';

describe('isValidEIN', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidEIN();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidEIN('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidEIN('12-34567fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidEIN('12-34567FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidEIN('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidEIN('00-0000000');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input', () => {
    const result = isValidEIN(123456789);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidEIN('12-3456789');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidEIN('12 3456789');

    expect(result).toBe(true);
  });

  it('returns true for valid input with dashes', () => {
    const result = isValidEIN('12-3456789');

    expect(result).toBe(true);
  });
});
