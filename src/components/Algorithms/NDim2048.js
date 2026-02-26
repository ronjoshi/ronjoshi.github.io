import React, { useEffect, useState } from 'react';
import { Wrapper } from '../Wrappers';
import Highlight from 'react-highlight';
import { AlgorithmTitle, CodeHighlight } from './AlgorithmsElements';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const NDim2048 = () => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'N-Dimensional 2048 | Ron Joshi';

    const readmePath = require("./RawMarkdown/ndim2048.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMdText(text));
  }, []);

  return (
    <Wrapper>
      <AlgorithmTitle>
        N-Dimensional 2048
      </AlgorithmTitle>
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

export default NDim2048;
