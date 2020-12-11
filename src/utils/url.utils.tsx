import { slugify } from './string.utils';

export const USER_PAGE_URL = (name: string): string =>
  name ? `https://github.com/${slugify(name)}` : ``;

export const USER_IMG_URL = (name: string): string =>
  name ? `https://github.com/${slugify(name)}.png` : ``;
