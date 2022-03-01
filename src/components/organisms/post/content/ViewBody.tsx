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
`;

export default ViewBody;
