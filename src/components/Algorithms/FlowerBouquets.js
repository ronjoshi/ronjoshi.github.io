import React, { useEffect, useState } from 'react';
import { Wrapper } from '../Wrappers';
import Highlight from 'react-highlight';
import { AlgorithmTitle, StyledLink, CodeHighlight, WarningText } from './AlgorithmsElements';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const FlowerBouquets = () => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Flower Bouquets | Ron Joshi';

    const readmePath = require("./RawMarkdown/flowerbouquets.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMdText(text));
  }, []);

  return (
    <Wrapper>
      <AlgorithmTitle>
        Flower Bouquets (<StyledLink target="_blank" href="https://leetcode.com/">LeetCode</StyledLink>)
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

export default FlowerBouquets;
