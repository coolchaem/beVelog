import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StickyProps {
  top: number;
  left: number;
  backgroudColor?: string;
  className?: string;
}

const StickyComponent = (props: React.PropsWithChildren<StickyProps>) => {
  return (
    <StickyBlock className={props.className} top={props.top} left={props.left}>
      {props.children}
    </StickyBlock>
  );
};

const StickyBlock = styled.div<StickyProps>`
  position: sticky;
  top: ${props => props.top}rem;
  left: ${props => props.left}rem;
  border: 1px solid rgb(241, 243, 245);
  border-radius: 2rem;
  align-items: center;
  -webkit-box-align: center;
  background-color: ${props => props.backgroudColor || 'rgb(248, 249, 250)'};
`;

export default StickyComponent;
