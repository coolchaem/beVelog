/* eslint-disable indent */
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import pallete from '../../../styles/pallete';
import theme from '../../../styles/Theme';

export type TabItemProps = {
  name: string;
  text: string;
  to: string;
  active?: boolean;
  width?: string;
  theme: 'teal' | 'gray';
};

const TabItem = ({ name, text, to, active, width, theme }: TabItemProps) => {
  return (
    <StyledLink to={to} className={active ? 'active' : ''} style={{ width }} theme={theme}>
      {text}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<{ theme: 'teal' | 'gray' }>`
  width: 8rem;
  height: 3rem;
  font-size: 1.125rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  color: ${theme.text3};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: ${pallete.teal.color};
    ${props =>
      // eslint-disable-next-line indent
      props.theme === 'gray' &&
      css`
        color: ${theme.text4};
      `}
  }
`;

TabItem.defaultProps = {
  theme: 'teal',
};

export default TabItem;
