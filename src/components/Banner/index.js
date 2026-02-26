import React, { useState, useEffect } from 'react';
import { BannerDiv, NameTitle, TypingTextP } from './BannerElements';

const Banner = () => {
  const headers = ['Programmer', 'Student', 'Problem-solver', 'Educator'];
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState("|");
  const [headerIndex, setHeaderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const currentHeader = headers[headerIndex];

      if (!isDeleting && !isPaused) {
        // Typing
        if (charIndex < currentHeader.length) {
          setText(currentHeader.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, pause
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else if (isDeleting && !isPaused) {
        // Deleting
        if (charIndex > 0) {
          setText(currentHeader.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next header
          setIsDeleting(false);
          setHeaderIndex((headerIndex + 1) % headers.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, headerIndex, headers]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursor(prev => prev === "|" ? "" : "|");
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <BannerDiv>
      <NameTitle>Ron Joshi</NameTitle>
      <TypingTextP>{text}{cursor}</TypingTextP>
    </BannerDiv>
  );
};

export default Banner;
