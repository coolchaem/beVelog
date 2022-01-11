import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef } from 'react';

interface MenuProps {
  selectedMenu?: string;
  menus: string[];
  onSelect: (value: string) => void;
  onOutSideClick: () => void;
}
const Menu = ({ menus, selectedMenu, onSelect, onOutSideClick }: MenuProps) => {
  const nodeRef = useRef<HTMLUListElement>(null);

  const handleMouseClick = useCallback(
    (e: MouseEvent) => {
      if (!nodeRef.current) {
        return;
      }
      if (nodeRef.current.contains(e.target as Node)) {
        return;
      }
      onOutSideClick();
    },
    [onOutSideClick]
  );

  useEffect(() => {
    if (!nodeRef || !nodeRef.current) {
      return;
    }
    window.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, [handleMouseClick]);

  return (
    <MenuLayout ref={nodeRef}>
      {menus.map(value => (
        <li
          key={value}
          onClick={() => {
            onSelect(value);
          }}
          className={value === selectedMenu ? 'active' : ''}
          aria-hidden
        >
          {value}
        </li>
      ))}
    </MenuLayout>
  );
};

const MenuLayout = styled.ul`
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 5;

  margin-top: 0.5rem;
  width: 12rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0px;
  background: white;
  color: rgb(33, 37, 41);
  transform-origin: right top;

  list-style: none;
  padding-left: 0px;
  margin: 0px;
  li {
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    &.active {
      color: rgb(18, 184, 134);
    }
  }
  li + li {
    border-top: 1px solid rgb(241, 243, 245);
  }
`;

export default Menu;
