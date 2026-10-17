import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { PartialPost } from '../../../types/Post';
import PostCard from './PostCard';

interface PostCardGridProps {
  posts?: PartialPost[];
}

const getItemCnt = (gridElem: HTMLElement): number => {
  let itemCnt = 0;
  if (gridElem && gridElem.children.length > 0) {
    const firstItemRect = gridElem.children[0].getBoundingClientRect();
    const firstRow = firstItemRect.top;
    for (let i = 0; i < gridElem.children.length; ++i) {
      const itemRect = gridElem.children[i].getBoundingClientRect();
      if (firstRow !== itemRect.top) {
        break;
      } else {
        ++itemCnt;
      }
    }
  }
  return itemCnt;
};

const getItemWidth = (elem: HTMLElement) => {
  let itemWidth = elem.offsetWidth;
  itemWidth += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-left'));
  itemWidth += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-right'));
  return itemWidth;
};

export const adjustHomeTabWidth = (gridElem: HTMLElement) => {
  if (gridElem && gridElem.children.length > 0) {
    const itemCnt = getItemCnt(gridElem);
    const itemWidth = getItemWidth(gridElem.children[0] as HTMLElement);
    const tabUpperElem = document.getElementById('home_tab_layout');
    if (tabUpperElem) {
      tabUpperElem.style.width = `${itemWidth * itemCnt * 0.97}px`;
    }
  }
};

export const adjustHdrWidth = (gridElem: HTMLElement) => {
  if (gridElem && gridElem.children.length > 0) {
    const itemCnt = getItemCnt(gridElem);
    const itemWidth = getItemWidth(gridElem.children[0] as HTMLElement);
    const tabUpperElem = document.getElementById('header_content');
    if (tabUpperElem) {
      tabUpperElem.style.width = `${itemWidth * itemCnt * 0.97}px`;
    }
  }
};

const PostCardGrid = ({ posts }: PostCardGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 초기 width 세팅{
    if (gridRef.current && gridRef.current.children.length > 0) {
      adjustHomeTabWidth(gridRef.current);
      adjustHdrWidth(gridRef.current);
    }
  });
  return (
    <PostCardGridLayout id="p_grid" ref={gridRef}>
      {posts?.map((post: PartialPost, index: number) => {
        return <PostCard post={post} key={`${post.title}_${index}`} />;
      })}
    </PostCardGridLayout>
  );
};

export default PostCardGrid;

export const PostCardGridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
