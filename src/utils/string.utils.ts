export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

export const USER_NAME = async (alias: string): Promise<string> => {
  const res = await fetch(`https://api.github.com/users/${alias}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });
  const user = await res.json();
  return user.name;
};

export const USER_INITIAL = (name: string): string => {
  const names = name.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += '.' + names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
};
