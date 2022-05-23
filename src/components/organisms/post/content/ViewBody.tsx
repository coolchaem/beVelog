import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { marked } from 'marked';
import Prism from 'prismjs';

interface ViewBodyProps {
  body?: string;
}

const ViewBody: React.FC<ViewBodyProps> = props => {
  const { body } = props;

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
  });

  return body ? (
    <ViewBodyBox dangerouslySetInnerHTML={{ __html: marked.parse(body) }}></ViewBodyBox>
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
`;

export default ViewBody;
