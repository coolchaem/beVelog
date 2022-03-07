import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { useAppSelector } from '../../redux/hooks';

interface HeaderUserIconProps {
  onClick: () => void;
}
const HeaderUserIcon = ({ onClick }: HeaderUserIconProps) => {
  const user = useAppSelector(state => state.userState);
  return (
    <button
      css={{
        border: 'none',
        outline: 'none',
        padding: '0',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          img: {
            boxShadow: '0px 0 12px rgba(0, 0, 0, 0.1)',
          },
          svg: {
            color: '#212529',
          },
        },
      }}
      onClick={onClick}
      onKeyPress={onClick}
    >
      <img
        css={{
          display: 'block',
          height: '2.5rem',
          width: '2.5rem',
          boxShadow: '0px 0 8px rgba(0, 0, 0, 0.085)',
          borderRadius: '50%',
          objectFit: 'cover',
          transition: '0.125s all ease-in',
        }}
        src={
          user.profile.thumbnail ??
          'https://media.vlpt.us/images/yeogenius/profile/5a759bac-fea7-42a6-a573-021705d820f0/social.jpeg?w=120'
        }
        alt="thumbnail"
      />
      <MdArrowDropDown
        css={{
          fontSize: '1.5rem',
          marginLeft: '0.25rem',
          color: '#868E96', //${themedPalette.text3}
          transition: '0.125s all ease-in',
          marginRight: '-0.4375rem',
        }}
      />
    </button>
  );
};

export default HeaderUserIcon;
