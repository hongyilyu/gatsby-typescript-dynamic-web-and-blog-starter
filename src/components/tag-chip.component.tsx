import { Chip } from '@material-ui/core';
import React from 'react';
import { POSTS_URL_PREFIX } from '../utils/url.utils';
import { slugify } from '../utils/string.utils';
import { TagProps } from './tag-list.component';
import { Link } from 'gatsby';

const TagChip: React.FC<TagProps> = ({ name, href }) => {
  if (href === undefined) href = slugify(name.toLowerCase());
  return (
    <Link to={`${POSTS_URL_PREFIX}/tags/${href}`}>
      <Chip label={name} />
    </Link>
  );
};

export default TagChip;
