import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TabItemProps } from '../../molecules/common/TabItem';
import { relative } from 'path';
import theme from '../../../styles/Theme';

export type HorizontalTabProps = {
  children: React.ReactElement<TabItemProps>[];
  activeTab: string;
  tabWidth: number;
  align: 'center' | 'left';
  theme: 'teal' | 'gray';
};

const HorizontalTab = ({ children, activeTab, tabWidth, align, theme }: HorizontalTabProps) => {
  const ratio = 100 / children.length;

  return (
    <HorizontalTablLayout align={align}>
      <TabBlock>
        {React.Children.map(children, tab => {
          return React.cloneElement(tab, {
            active: tab.props.name === activeTab,
            width: `${tabWidth}rem`,
            theme,
          });
        })}
      </TabBlock>
    </HorizontalTablLayout>
  );
};

const HorizontalTablLayout = styled.div<{ align: 'center' | 'left' }>`
  display: flex;
  ${props =>
    props.align === 'center' &&
    css`
      justify-content: center;
    `}
  .tab-wrapper {
    display: flex;
    position: relative;
  }
`;

const TabBlock = styled.div`
  display: flex;
  position: relative;
`;

HorizontalTab.defaultProps = {
  tabWidth: 8,
  align: 'center',
  theme: 'teal',
};

export default HorizontalTab;
