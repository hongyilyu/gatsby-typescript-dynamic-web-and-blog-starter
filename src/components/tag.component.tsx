import { Chip } from '@material-ui/core';
import React from 'react';
import { slugify } from '../utils/string.utils';

interface TagProps {
  name: string;
  href?: string;
}

const Tag: React.FC<TagProps> = ({ name, href }) => {
  if (href === undefined) href = slugify(name.toLowerCase());
  return (
    <Chip label={name} onClick={() => (location.href = `wiki/tags/${href}`)} />
  );
};

export default Tag;
