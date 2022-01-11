import styled from '@emotion/styled';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdTrendingUp, MdAccessTime, MdArrowDropDown, MdMoreVert } from 'react-icons/md';
import Menu from './Menu';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { select, TimeFrame, timeFrameMap } from '../../../redux/reducers/HomeSlice';

const HomeTab = () => {
  const location = useLocation();
  const isRecent = location.pathname === '/recent';
  const [isExtraMenuOpen, setIsExtraMenuOpen] = useState<boolean>(false);

  const selectedTimeFrame = useAppSelector(state => state.homeState.timeFrame);
  const dispatch = useAppDispatch();

  const [isTimeFrameDropdownOpen, setIsTimeFrameDropdownOpen] = useState<boolean>(false);

  const handleTimeFrameDropdownSelect = (timeFrame: string) => {
    const timeFrameInfo = Object.keys(timeFrameMap).find(key => {
      return timeFrameMap[key as TimeFrame] === timeFrame;
    });
    if (!timeFrameInfo) {
      return;
    }
    dispatch(select(timeFrameInfo as TimeFrame));
    setIsTimeFrameDropdownOpen(false);
  };
  const handleOutSideClick = () => {
    setIsTimeFrameDropdownOpen(false);
  };

  const handleMoreButtonClick = () => {
    setIsExtraMenuOpen(true);
  };

  const handleExtraMenuOutSideClick = () => {
    setIsExtraMenuOpen(false);
  };

  const handleExtraMenuSelect = (value: string) => {
    setIsExtraMenuOpen(false);
  };

  return (
    <HomeTabLayout>
      <HomeTabLeftAreaBox>
        <HomeTabLinkAreaBox>
          <HomeTabLink to="">
            <MdTrendingUp />
            트렌딩
          </HomeTabLink>
          <HomeTabLink to="recent">
            <MdAccessTime />
            최신
          </HomeTabLink>
          {/* <Indicator style={props}></Indicator> */}
        </HomeTabLinkAreaBox>
        {!isRecent && (
          <>
            <TimeFrameDropdownButton
              onClick={() => {
                setIsTimeFrameDropdownOpen(!isTimeFrameDropdownOpen);
              }}
            >
              {timeFrameMap[selectedTimeFrame]}
              <MdArrowDropDown />
            </TimeFrameDropdownButton>
            {isTimeFrameDropdownOpen && (
              <Menu
                menus={Object.values(timeFrameMap)}
                selectedMenu={timeFrameMap[selectedTimeFrame]}
                onSelect={handleTimeFrameDropdownSelect}
                onOutSideClick={handleOutSideClick}
              />
            )}
          </>
        )}
      </HomeTabLeftAreaBox>
      <MoreButton onClick={handleMoreButtonClick} />
      {isExtraMenuOpen && (
        <Menu
          menus={['공지사항', '태그 목록', '서비스 정책', 'Slack', '문의']}
          onSelect={handleExtraMenuSelect}
          onOutSideClick={handleExtraMenuOutSideClick}
        />
      )}
    </HomeTabLayout>
  );
};

const HomeTabLayout = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

const HomeTabLinkAreaBox = styled.div`
  display: flex;
  position: relative;
  width: 14rem;
`;

const HomeTabLink = styled(NavLink)`
  width: 7rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.125rem;
  text-decoration: none;
  color: rgb(134, 142, 150);
  height: 3rem;
  &.active {
    color: rgb(52, 58, 64);
    font-weight: bold;
  }
  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

// const Indicator = styled(animated.div)`
//   width: 50%;
//   height: 2px;
//   position: absolute;
//   bottom: 0px;
//   background: rgb(52, 58, 64);
// `;

const TimeFrameDropdownButton = styled.button`
  border: 0;
  padding: 0;
  background: white;
  height: 2rem;
  width: 6rem;
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  color: rgb(73, 80, 87);
  font-size: 0.875rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  cursor: pointer;
`;

const HomeTabLeftAreaBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

const MoreButton = styled(MdMoreVert)`
  cursor: pointer;
  font-size: 1.5rem;
  color: rgb(134, 142, 150);
`;

export default HomeTab;
