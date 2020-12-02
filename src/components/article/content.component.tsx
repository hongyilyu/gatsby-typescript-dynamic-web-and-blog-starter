import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Hr,
  InlineCode,
  Li,
  Ol,
  P,
  Table,
} from '../custom-element';

const components = {
  a: (props: any) => <A {...props} />,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  hr: (props: any) => <Hr {...props} />,
  'p.inlineCode': (props: any) => <InlineCode {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  table: (props: any) => <Table {...props} />,
  li: (props: any) => <Li {...props} />,
  p: (props: any) => <P {...props} />,
  ol: (props: any) => <Ol {...props} />,
};

const ContentWrapper: React.FC<{ element: any }> = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{element}</MDXRenderer>
    </MDXProvider>
  );
};

export default ContentWrapper;
