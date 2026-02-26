import React, { useEffect, useState } from 'react';
import { Wrapper } from '../Wrappers';
import Highlight from 'react-highlight';
import { AlgorithmTitle, StyledLink, CodeHighlight, WarningText } from './AlgorithmsElements';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const Studying = () => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Studying for Exams | Ron Joshi';

    const readmePath = require("./RawMarkdown/studying.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMdText(text));
  }, []);

  return (
    <Wrapper>
      <AlgorithmTitle>
        Studying for Exams (<StyledLink target="_blank" href="https://open.kattis.com/">Kattis</StyledLink>)
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

export default Studying;
