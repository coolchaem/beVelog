import React from 'react';

interface RoundButtonProp {
  text: string;
  color?: string;
  backgroundColor?: string;
}

const RoundButton = (prop: React.PropsWithChildren<RoundButtonProp>) => {
  return (
    <button
      css={{
        color: prop.color || 'black',
        backgroundColor: prop.backgroundColor || 'graylight',
        height: '2rem',
        fontSize: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: '1rem',
        marginLeft: '0.875rem',
        marginRight: '0.875rem',
        ['@media (max-width: 768px)']: {
          height: '1.5rem',
          fontSize: '0.75rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          borderRadius: '0.75rem',
          marginLeft: '0.5rem',
          marginRight: '0.5rem',
        },
      }}
    >
      {prop.children !== undefined && prop.children}
      {prop.text}
    </button>
  );
};

export default RoundButton;
