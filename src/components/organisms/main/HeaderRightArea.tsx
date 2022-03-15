import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useAppSelector } from '../../../redux/hooks';
import { BsSearch } from 'react-icons/bs';
import RoundButton from '../../atoms/RoundButton';
import Menu from '../../molecules/common/Menu';
import HeaderUserIcon from '../../atoms/HeaderUserIcon';
import ThemeToggleButton from '../../atoms/ThemeToggleButton';

const HeaderRightArea = () => {
  const user = useAppSelector(state => state.userState);
  const isCertified = user.is_certified;
  const userId = user.id;

  const [isUserMenuOpened, setIsUserMenuOpened] = useState<boolean>(false);
  const handleOutSideClick = () => {
    setIsUserMenuOpened(false);
  };

  const navigate = useNavigate();
  const handleNewPostButtonClick = () => {
    navigate('/write');
  };
  const handleLogout = () => {
    //로그아웃
  };
  const handleUserMenuSelect = (value: string) => {
    if (value === '내 벨로그') {
      navigate(`/@${userId}`);
      return;
    }
    if (value === '임시 글') {
      navigate('/saves');
      return;
    }
    if (value === '읽기 목록') {
      navigate('/lists');
      return;
    }
    if (value === '설정') {
      navigate('/setting');
      return;
    }
    if (value === '로그아웃') {
      handleLogout();
      return;
    }
  };

  return (
    <HeaderRightAreaBox>
      <ThemeToggleButton />
      <SearchLink to="search">
        <BsSearch />
      </SearchLink>
      {isCertified ? (
        <>
          <RoundButton
            isBorder={true}
            palleteId="darkGray"
            marginRight="1.25rem"
            text="새 글 작성"
            onClick={handleNewPostButtonClick}
          />
          <HeaderUserIcon onClick={() => setIsUserMenuOpened(true)} />
          {isUserMenuOpened && (
            <Menu
              onOutSideClick={handleOutSideClick}
              menus={['내 벨로그', '임시 글', '읽기 목록', '설정', '로그아웃']}
              onSelect={handleUserMenuSelect}
            />
          )}
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
  position: relative;
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
