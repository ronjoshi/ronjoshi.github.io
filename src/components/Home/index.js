import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProfilePic } from "../images/Components";
import WebFont from "webfontloader";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const HomeLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ArticleCard = styled.div`
  flex: 1;

  p {
    margin-bottom: 1rem;
  }
`;

const Home = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto", "Source Code Pro"],
      },
    });

    window.scrollTo(0, 0);
    document.title = "Home | Ron Joshi";
  }, []);

  return (
    <Wrapper>
      <HomeLayout>
        <ProfilePic />
        <ArticleCard>
          <h2>Hi, I'm Ron.</h2>
          <p>
            I'm a software engineer at Lucid Software working on agentic AI. I
            studied computer science, math, and statistics at UNC Chapel Hill
            (graduated 2024).
          </p>
          <p>
            I also love public speech. Psychology, spirituality, philosophy, and
            self-development are topics I love to watch and present. In the
            past, I've spoken about{" "}
            <a href="https://youtu.be/qHcD8PrUsLA">stoicism</a>, memory, and{" "}
            <a href="https://youtu.be/qHcD8PrUsLA?si=umwNBUTHIldAmO5m">
              positivity/happiness
            </a>
            . I aspire to present my own TED talk one day.
          </p>
          <p>
            A personal passion of mine is teaching. I love to help explain
            difficult, complex topics in a much easier-to-understand form, which
            is what I try to do on my{" "}
            <Link to="/algorithms">Algorithms Explained</Link> page. There are
            some teachers like{" "}
            <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">
              3Blue1Brown
            </a>{" "}
            that have shown me how the most mind-boggling concepts can be
            elucidated perfectly, with the right explanation. I have tutored
            students for SAT prep, math, physics, and competitive programming.
            I've also been a teaching assistant for Algorithms & Analysis (COMP
            550) and Models of Computation (COMP 455) at UNC.
          </p>
          <p>
            I also enjoy working out, cooking, and playing basketball in my free
            time.
          </p>
          <p>
            Don't hesitate to <Link to="/contact">reach out</Link>!
          </p>
        </ArticleCard>
      </HomeLayout>
    </Wrapper>
  );
};

export default Home;
