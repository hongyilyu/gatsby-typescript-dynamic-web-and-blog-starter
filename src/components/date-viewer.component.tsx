import React from 'react';
import styled from 'styled-components';

import EventIcon from '@material-ui/icons/Event';

const CalendarViewContainer = styled.span`
  vertical-align: middle;
  font-size: inherit;
  margin: 0 0.5em;
  margin-left: 0;
  display: inline-block;

  span {
    vertical-align: text-bottom;
  }
`;

const DateViewer: React.FC<{ date: string }> = ({ date }) => (
  <CalendarViewContainer>
    <EventIcon style={{ margin: '0 0.25em 0 0' }} />
    <span>{date}</span>
  </CalendarViewContainer>
);

export default DateViewer;
