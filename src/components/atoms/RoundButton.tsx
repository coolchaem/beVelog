import React from 'react';
import theme from '../../styles/Theme';
import pallete, { PalleteId } from '../../styles/pallete';

interface RoundButtonProp {
  text: string;
  palleteId: PalleteId;
  size?: 'SMALL' | 'DEFAULT' | 'LARGE';
  isBorder?: boolean;
  marginLeft?: string;
  marginRight?: string;
  imgPath?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const RoundButton = ({
  text,
  palleteId,
  size = 'DEFAULT',
  isBorder = false,
  marginLeft,
  marginRight,
  imgPath,
  onClick,
}: React.PropsWithChildren<RoundButtonProp>) => {
  const height = size === 'SMALL' ? '1.5rem' : size === 'DEFAULT' ? '2rem' : '3rem';
  const padding = size === 'SMALL' ? '0.75rem' : size === 'DEFAULT' ? '1rem' : '2rem';
  const fontSize = size === 'SMALL' ? '0.875rem' : size === 'DEFAULT' ? '1rem' : '1.5rem';
  const borderRadius = size === 'SMALL' ? '0.75rem' : size === 'DEFAULT' ? '1rem' : '1.5rem';
  return (
    <button
      css={{
        height,
        color: isBorder ? theme.bg_element5 : pallete[palleteId].color,
        backgroundColor: isBorder ? theme.bg_element2 : `${pallete[palleteId].background}`,
        fontSize,
        fontWeight: 'bold',
        wordBreak: 'keep-all',
        marginLeft,
        marginRight,
        paddingLeft: padding,
        paddingRight: padding,
        outline: 'none',
        border: isBorder ? `1px solid ${theme.bg_element5}` : 'none',
        borderRadius: borderRadius,
        cursor: 'pointer',
        transition: '0.125s all ease-in',
        '&:hover': {
          background: `${theme.bg_element5}`,
          color: `${theme.button_text}`,
        },
        '&:focus': {
          boxShadow: '0px 2px 12px #00000030',
        },
        ['@media (maxWidth: 768px)']: {
          height: '1.Wem',
          fontSize: '0.75rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          borderRadius: '0.75rem',
          marginLeft: '0.5rem',
          marginRight: '0.5rem',
        },
      }}
      onClick={onClick}
    >
      {imgPath !== undefined && (
        <img
          src={imgPath}
          css={{ width: '0.75rem', height: '0.75rem', marginRight: '0.75rem' }}
          alt="RoundButtonImage"
        />
      )}
      {text}
    </button>
  );
};

export default RoundButton;
