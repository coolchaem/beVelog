/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button
        css={{
          paddingLeft: '1.25em',
          paddingRight: '1.25em',
          fontSize: '1em',
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'green',
          height: '3em',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          '&:hover, &:focus': {
            backgroundColor: 'lightGreen',
          },
        }}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </>
  );
}

export default Button;
