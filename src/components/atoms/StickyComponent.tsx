import React from 'react';
import { css } from '@emotion/react';

interface StickyProps {
  top: number;
  className?: string;
}

const StickyComponent = (prop: React.PropsWithChildren<StickyProps>) => {
  return <div className={`${prop.className} ${{ top: prop.top }}`}>{prop.children}</div>;
};

export default StickyComponent;
