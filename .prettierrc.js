import config from '@itaober/prettier-config';

export default {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
};
