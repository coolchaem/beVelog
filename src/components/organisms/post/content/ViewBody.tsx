import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { marked } from 'marked';
import Prism from 'prismjs';
import { original } from '@reduxjs/toolkit';

interface ViewBodyProps {
  body?: string;
}

const ViewBody: React.FC<ViewBodyProps> = props => {
  const { body } = props;
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    marked.setOptions({
      gfm: true,
      breaks: true,
      pedantic: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      highlight(code, lang: string) {
        return Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup, lang);
      },
    });
  }, []);

  useEffect(() => {
    const linkElems = divRef.current?.getElementsByTagName('a');
    if (linkElems) {
      for (let i = 0; i < linkElems.length; ++i) {
        const elem = linkElems.item(i);
        if (elem) {
          const url = new URL(elem.href);
          console.log('CHANGE!', url.origin, window.location.origin, url.pathname);
          if (url.origin === window.location.origin) {
            // 프로토콜 붙여주기
            elem.href = `https://www.${url.pathname.slice(1)}`;
          }
        }
      }
    }
  });

  return body ? (
    <ViewBodyBox
      ref={divRef}
      dangerouslySetInnerHTML={{ __html: marked.parse(body) }}
    ></ViewBodyBox>
  ) : (
    <></>
  );
};

const ViewBodyBox = styled.div`
  font-size: 1.25rem;

  blockquote {
    margin: 2rem 0px;
    border-left: 4px solid var(--primary2);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #f8f9fa;
    padding: 1rem 1rem 1rem 2rem;
    color: #212529;
  }

  img {
    display: block;
    margin: 3rem auto;
    max-width: 100%;
    height: auto;
  }

  a {
    font-weight: bold;
    color: #12b886;
    text-decoration: none;
  }

  code {
    background: #e9ecef;
    padding: 0.2em 0.4em;
    font-size: 85%;
    border-radius: 3px;
  }
`;

export default ViewBody;
