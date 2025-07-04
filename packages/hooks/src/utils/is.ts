export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export const isFunction = (value: unknown): value is (...args: unknown[]) => unknown =>
  typeof value === 'function';

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';
