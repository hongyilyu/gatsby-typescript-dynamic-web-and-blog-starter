import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { POSTS_URL_PREFIX, USER_IMG_URL } from '../../utils/url.utils';
import TagList, { TagStyle } from '../tag-list.component';
import { Mdx } from '../../graphql';
import { USER_NAME } from '../../utils/string.utils';
import {
  LinkContainer,
  IconSpaceStringSpanContainer,
} from '../custom-element/shared-style.util';
import { Grid, Paper } from '@material-ui/core';
import DateViewer from '../date-viewer.component';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const Post = styled.article`
  margin: 2rem 0 1rem;
  max-width: 820px;

  &:first-of-type {
    margin-top: 0;
  }

  position: relative;
  margin: 4rem 0;
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

const ProfilePic = styled.img`
  width: 24px;
  height: 24px;
  float: left;
  margin-right: 9px;
  border-radius: 100%;
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
  post: { frontmatter, timeToRead, excerpt },
}) => {
  const [authorName, setAuthorName] = useState('');
  const { title, slug, date, tags, author } = frontmatter!;
  useEffect(() => {
    USER_NAME(author!)
      .then((name) => setAuthorName(name))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Post className='content'>
      <header>
        <Title>
          <LinkContainer
            style={{ boxShadow: 'none' }}
            to={`${POSTS_URL_PREFIX}/${slug}`}
          >
            {title}
          </LinkContainer>
        </Title>
      </header>
      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <ProfilePic
            src={USER_IMG_URL(author!)}
            alt={`${author}'s Profile picture`}
          />
          <LinkContainer to='/about'>{authorName}</LinkContainer>
        </Grid>
        <Grid item xs={2}>
          <DateViewer date={date} />
        </Grid>
        <Grid item xs={2}>
          <IconSpaceStringSpanContainer>
            <RemoveRedEyeIcon style={{ margin: '0 0.25em 0 0' }} />
            <span>{`${2 * timeToRead!} min`}</span>
          </IconSpaceStringSpanContainer>
        </Grid>
        <Grid item xs={5}>
          <IconSpaceStringSpanContainer>
            <LoyaltyIcon style={{ margin: '0 0.25em 0 0' }} />
            <span>
              <TagList tags={tags as string[]} tagStyle={TagStyle.HASHTAG} />
            </span>
          </IconSpaceStringSpanContainer>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <ReadThePost>
        <LinkContainer to={`${POSTS_URL_PREFIX}/${slug}`}>
          Read the post →
        </LinkContainer>
      </ReadThePost>
    </Post>
  );
};

export default ArticlePreview;
