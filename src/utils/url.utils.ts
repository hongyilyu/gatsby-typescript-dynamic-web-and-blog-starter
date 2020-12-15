import { slugify } from './string.utils';

export const USER_PAGE_URL = (name: string): string =>
  name ? `https://github.com/${slugify(name)}` : ``;

export const USER_IMG_URL = (name: string): string =>
  name ? `https://github.com/${slugify(name)}.png` : ``;

export const WEB_PREFIX = `${process.env.GATSBY_WEB_PREFIX}`;

export const POSTS_PREFIX = `${process.env.GATSBY_POSTS_PREFIX}`;

export const POSTS_URL_PREFIX = `${WEB_PREFIX}/${POSTS_PREFIX}`;
