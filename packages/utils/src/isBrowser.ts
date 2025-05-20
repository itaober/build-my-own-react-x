/**
 * Checks whether the current environment is a browser or not.
 *
 * @returns {boolean} `true` if the current environment is a browser, `false` otherwise.
 */
export const isBrowser = () =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);
