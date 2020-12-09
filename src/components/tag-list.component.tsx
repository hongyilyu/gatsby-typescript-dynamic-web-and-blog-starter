import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const TagsContainer = styled.span`
  vertical-align: middle;
  margin: 0 0.5em 0 0;
  display: inline-block;

  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    vertical-align: text-bottom;
  }
`;

const TagsSeparator = styled.span`
  vertical-align: text-bottom;
`;

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => (
  <Typography>
    <TagsContainer>
      <LoyaltyIcon style={{ margin: '0 0.25em 0 0' }} />
      {tags.map((tag, i) => {
        return (
          <Fragment key={tag}>
            <Link to={`/wiki/tag/${slugify(tag)}`}>#{tag}</Link>
            {i < tags.length - 1 ? <TagsSeparator>, </TagsSeparator> : ''}
          </Fragment>
        );
      })}
    </TagsContainer>
  </Typography>
);

export default TagList;
