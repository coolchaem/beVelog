import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useAppSelector } from '../../../redux/hooks';
import { BsSearch } from 'react-icons/bs';
import RoundButton from '../../atoms/RoundButton';

const HeaderRightArea = () => {
  const isCertified = useAppSelector(state => state.userState.is_certified);
  return (
    <HeaderRightAreaBox>
      <SearchLink to="search">
        <BsSearch />
      </SearchLink>
      {isCertified ? (
        <>
          <RoundButton
            isBorder={true}
            themeId="darkGray"
            marginRight="1.25rem"
            label="새 글 작성"
          />
          <button>User Icon</button>
          <button>User Menu</button>
        </>
      ) : (
        <Link to="/login">
          <Button label="로그인" />
        </Link>
      )}
    </HeaderRightAreaBox>
  );
};

const HeaderRightAreaBox = styled.div`
  display: flex;
  align-items: center;
`;

const SearchLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.045);
  }
  svg {
    width: 1.125rem;
    height: 1.125rem;
    fill: black;
  }
  margin-right: 0.75rem;
`;

export default HeaderRightArea;
