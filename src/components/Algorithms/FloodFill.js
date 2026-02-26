import React, { useEffect, useState } from 'react';
import { Wrapper } from '../Wrappers';
import Highlight from 'react-highlight';
import { AlgorithmTitle, StyledLink, CodeHighlight, WarningText } from './AlgorithmsElements';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const FloodFill = () => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Flood Fill | Ron Joshi';

    const readmePath = require("./RawMarkdown/floodfill.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMdText(text));
  }, []);

  return (
    <Wrapper>
      <AlgorithmTitle>
        Flood Fill (<StyledLink target="_blank" href="https://leetcode.com/">LeetCode</StyledLink>)
      </AlgorithmTitle>
      <WarningText>
        This problem is from LeetCode. All credit goes to LeetCode and the original problem setters.
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

export default FloodFill;
