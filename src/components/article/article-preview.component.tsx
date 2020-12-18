import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Grid, Avatar } from '@material-ui/core';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

import { Mdx } from '../../graphql';
import { USER_NAME } from '../../utils/string.utils';
import { USER_IMG_URL } from '../../utils/url.utils';
import { LinkContainer } from '../custom-element/shared-style.util';
import TagList, { TagStyle } from '../tag-list.component';
import useIconSpace from '../../hooks/use-icon-string.hook';
import EventIcon from '@material-ui/icons/Event';
const Post = styled.article`
  margin: 2rem 0 1rem;
  max-width: 820px;

  &:first-of-type {
    margin-top: 20;
  }

  position: relative;
  margin: 4rem 0;
  margin-bottom: 1rem;
  padding-bottom: 4rem;
  border-bottom: #ebf2f6 1px solid;
  word-wrap: break-word;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  &::after {
    display: block;
    content: '';
    width: 7px;
    height: 7px;
    border: #e7eef2 1px solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
    background: #fff;
    border-radius: 100%;
    box-shadow: #fff 0 0 0 5px;
  }
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bolder;
  letter-spacing: -1px;
  line-height: 1.15em;
  margin: 0 0 0.4em 0;
  max-width: 820px;
  text-rendering: geometricPrecision;
`;

const Excerpt = styled.p`
  margin: 0;
  font-size: 1em;
  line-height: 1.7em;
  text-rendering: geometricPrecision;
  color: #3a4145;
  padding: 0 1em 0 0;
  max-width: 820px;
`;

const ReadThePost = styled.p`
  text-align: center;
  margin-top: 2rem !important;
  width: auto;

  a {
    color: inherit;
    padding: 16px;
    border: #bfc8cd 1px solid;
    text-decoration: none;
    border-radius: 4px;
    transition: border 0.3s ease;
    min-width: 200px;
    width: 100%;

    &:hover {
      color: rgb(136, 144, 147);
      border-color: rgb(152, 160, 164);
    }
  }

  @media (min-width: 1024px) {
    text-align: left;
    max-width: 100% !important;
  }
`;

const ArticlePreview: React.FC<{ post: Mdx }> = ({
  post: { frontmatter, timeToRead, excerpt, fields },
}) => {
  const [authorName, setAuthorName] = useState('');
  const { title, date, tags, author } = frontmatter!;
  const { full_slug_url } = fields!;
  useEffect(() => {
    USER_NAME(author!)
      .then((name) => setAuthorName(name))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Post className='content'>
      <header>
        <Title>
          <LinkContainer style={{ boxShadow: 'none' }} to={`${full_slug_url}`}>
            {title}
          </LinkContainer>
        </Title>
      </header>
      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          {useIconSpace(
            <Avatar
              src={USER_IMG_URL(author!)}
              alt={`${author}'s Profile picture`}
              style={{
                width: '24px',
                height: '24px',
                float: 'left',
                marginRight: '9px',
                borderRadius: '100%',
              }}
            />,
            <LinkContainer to='/about'>{authorName}</LinkContainer>
          )}
        </Grid>
        <Grid item xs={2}>
          {useIconSpace(<EventIcon />, date)}
        </Grid>
        <Grid item xs={2}>
          {useIconSpace(<RemoveRedEyeIcon />, `${2 * timeToRead!} min`)}
        </Grid>
        <Grid item xs={5}>
          {useIconSpace(
            <LoyaltyIcon />,
            <TagList tags={tags as string[]} tagStyle={TagStyle.HASHTAG} />
          )}
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <ReadThePost>
        <LinkContainer to={`${full_slug_url}`}>Read the post →</LinkContainer>
      </ReadThePost>
    </Post>
  );
};

export default ArticlePreview;
