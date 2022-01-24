import React from 'react';

interface CircleButtonProps {
  active?: boolean;
}
const CircleButton = (prop: React.PropsWithChildren<CircleButtonProps>) => {
  return (
    <div
      css={{
        height: '3rem',
        width: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        border: '1px solid rgb(241, 243, 245)',
        borderRadius: '1.5rem',
        cursor: 'pointer',
        '&:hover': {
          background: prop.active ? 'green' : 'gray',
          borderColor: prop.active ? 'green' : 'gray',
        },
      }}
    >
      {prop.children}
    </div>
  );
};

export default CircleButton;
