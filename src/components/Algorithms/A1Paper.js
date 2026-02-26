import React, { useEffect, useState } from 'react';
import { Wrapper } from '../Wrappers';
import Highlight from 'react-highlight';
import { AlgorithmTitle, StyledLink, CodeHighlight, WarningText } from './AlgorithmsElements';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const A1Paper = () => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'A1 Paper | Ron Joshi';

    const readmePath = require("./RawMarkdown/a1paper.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMdText(text));
  }, []);

  return (
    <Wrapper>
      <AlgorithmTitle>
        A1 Paper (<StyledLink target="_blank" href="https://open.kattis.com/">Kattis</StyledLink>)
      </AlgorithmTitle>
      <WarningText>
        This problem is from Kattis. All credit goes to the original problem setters.
      </WarningText>
      <ReactMarkdown
        components={{
          code: ({inline, className, children, ...props}) =>
            inline ? (
              <CodeHighlight {...props}>{children}</CodeHighlight>
            ) : (
              <Highlight className={className} {...props}>{children}</Highlight>
            )
        }}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {mdText}
      </ReactMarkdown>
    </Wrapper>
  );
};

export default A1Paper;
