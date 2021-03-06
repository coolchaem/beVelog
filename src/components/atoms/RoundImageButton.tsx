import React from 'react';
import { jsx } from '@emotion/react';

interface RoundImageButtonProps {
  label: string;
  onClick: () => void;
  imageUrl?: string;
}

function RoundImageButton(props: RoundImageButtonProps) {
  return (
    <button
      css={{
        paddingLeft: '1.25em',
        paddingRight: '1.25em',
        fontSize: '1em',
        fontWeight: 'bold',
        color: 'red',
        backgroundColor: 'lightGray',
        height: '5em',
        width: '5em',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: 'none',
        '&:hover, &:focus': {
          backgroundColor: 'lightGreen',
        },
      }}
      onClick={props.onClick}
    >
      {props.imageUrl && <img src={props.imageUrl} alt={props.label} />}
    </button>
  );
}

export default RoundImageButton;
