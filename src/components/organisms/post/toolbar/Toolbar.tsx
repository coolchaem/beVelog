import React from 'react';
import styled from '@emotion/styled';
import { execToolbarCmd } from './toolbarHandler';

const Toolbar = () => {
  return (
    <ToolbarBox>
      <ToolbarBtn onClick={() => execToolbarCmd('h1')}>
        <HeadingBtn>
          H<HeadingLv>1</HeadingLv>
        </HeadingBtn>
      </ToolbarBtn>
      <ToolbarBtn onClick={() => execToolbarCmd('h2')}>
        <HeadingBtn>
          H<HeadingLv>2</HeadingLv>
        </HeadingBtn>
      </ToolbarBtn>
      <ToolbarBtn onClick={() => execToolbarCmd('h3')}>
        <HeadingBtn>
          H<HeadingLv>3</HeadingLv>
        </HeadingBtn>
      </ToolbarBtn>
      <ToolbarBtn onClick={() => execToolbarCmd('h4')}>
        <HeadingBtn>
          H<HeadingLv>4</HeadingLv>
        </HeadingBtn>
      </ToolbarBtn>
      <Separator />
      <ToolbarBtn onClick={() => execToolbarCmd('bold')}>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path>
        </svg>
      </ToolbarBtn>
      <ToolbarBtn onClick={() => execToolbarCmd('italic')}>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path>
        </svg>
      </ToolbarBtn>
      <ToolbarBtn onClick={() => execToolbarCmd('strike')}>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path>
        </svg>
      </ToolbarBtn>
      <Separator />
      <ToolbarBtn onClick={() => execToolbarCmd('quote')}>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
        </svg>
      </ToolbarBtn>
      <ToolbarBtn>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
        </svg>
      </ToolbarBtn>
      <ToolbarBtn>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
        </svg>
      </ToolbarBtn>
      <ToolbarBtn>
        <svg
          fill="#868e96"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
        </svg>
      </ToolbarBtn>
    </ToolbarBox>
  );
};

const ToolbarBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 3rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const ToolbarBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 0px;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: lightgrey;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 2.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background: #dee2e6;
`;

const HeadingBtn = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-family: serif;
  color: #868e96;
`;

const HeadingLv = styled.span`
  font-size: 0.75rem;
`;

export default Toolbar;
