import { Chip } from '@material-ui/core';
import React from 'react';
import { POSTS_URL_PREFIX } from '../utils/url.utils';
import { slugify } from '../utils/string.utils';
import { TagProps } from './tag-list.component';

const TagChip: React.FC<TagProps> = ({ name, href }) => {
  if (href === undefined) href = slugify(name.toLowerCase());
  return (
    <Chip
      label={name}
      onClick={() => (location.href = `${POSTS_URL_PREFIX}/tags/${href}`)}
    />
  );
};

export default TagChip;
