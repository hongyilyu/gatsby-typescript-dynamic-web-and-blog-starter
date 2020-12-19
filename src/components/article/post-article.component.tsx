import React from 'react';
import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';
import Pagination, { PaginationLabel } from '../pagination.component';

const GitHubSectionContainer = styled.div`
  margin: 2em 0;
  line-height: 25px;
  padding: 1em;
  font-size: small;
  border-radius: 8px;
  background: rgba(255, 229, 100, 0.3);

  a {
    text-decoration: none;
    border-bottom: 2px solid #ffe564;
    color: inherit;

    &:hover {
      border-bottom: 2px solid #ff9b51;
    }
  }

  @media (min-width: 780px) {
    padding: 2em 2em;
  }
`;

interface PostArticleProps {
  next?: PaginationLabel;
  previous?: PaginationLabel;
}

const PostArticle: React.FC<PostArticleProps> = ({ ...all }) => {
  const githubLink = 'https://github.com/lhy-is-learning';
  return (
    <>
      <GitHubSectionContainer>
        <strong>Found a typo or something that can be improved?</strong>
        <br />
        In the spirit of Open Source, you can contribute to this article by{' '}
        <a
          id='github'
          href={githubLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          submitting a PR on <GitHubIcon /> GitHub
        </a>
      </GitHubSectionContainer>
      <div
        style={{
          borderTop: '1px solid #ececec',
          marginTop: '2em',
          paddingTop: '2em',
          lineHeight: '1.2',
        }}
      >
        <Pagination {...all} />
      </div>
    </>
  );
};

export default PostArticle;
