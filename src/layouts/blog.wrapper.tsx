import React from 'react';

import { MDXProvider } from '@mdx-js/react';

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
} from '../components/custom-element';

const { preToCodeBlock } = require('mdx-utils');
const components = {
  a: (props: any) => <A {...props} />,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  hr: (props: any) => <Hr {...props} />,
  'p.inlineCode': (props: any) => <InlineCode {...props} />,
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
  blockquote: (props: any) => <Blockquote {...props} />,
  table: (props: any) => <Table {...props} />,
  li: (props: any) => <Li {...props} />,
  p: (props: any) => <P {...props} />,
  ol: (props: any) => <Ol {...props} />,
};

const BlogWrapper: React.FC = ({ children }) => {
  return (
    <main style={{ position: 'relative' }}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </main>
  );
};

export default BlogWrapper;
