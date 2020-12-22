import React from 'react';
import { POSTS_PREFIX } from '../utils/url.utils';
import { slugify } from '../utils/string.utils';
import { TagProps } from './tag-list.component';
import { LinkContainer } from './custom-element/shared-style.util';

const TagHashTag: React.FC<TagProps> = ({ name, href, last }) => {
  if (href === undefined) href = slugify(name.toLowerCase());
  return (
    <React.Fragment key={name}>
      <LinkContainer to={`/${POSTS_PREFIX}/tags/${href}`}>
        #{name}
      </LinkContainer>
      {last ? '' : <span>, </span>}
    </React.Fragment>
  );
};

export default TagHashTag;
