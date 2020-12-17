import React from 'react';

import EventIcon from '@material-ui/icons/Event';

import { IconSpaceStringSpanContainer } from './custom-element/shared-style.util';

const DateViewer: React.FC<{ date: string }> = ({ date }) => (
  <IconSpaceStringSpanContainer>
    <EventIcon style={{ margin: '0 0.25em 0 0' }} />
    <span>{date}</span>
  </IconSpaceStringSpanContainer>
);

export default DateViewer;
