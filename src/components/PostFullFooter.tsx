import * as React from 'react';
import styled from 'react-emotion';

const PostFullFoot = styled.footer`
  margin: 0 auto;
  padding: 3vw 0 6vw 0;
  max-width: 840px;
`;

const PostFullFooter: React.SFC = props => <PostFullFoot>{props.children}</PostFullFoot>;

export default PostFullFooter;
