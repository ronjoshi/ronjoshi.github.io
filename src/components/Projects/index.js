import React, { useEffect } from "react";
import {
  ProjectsWrapper,
  ProjectTitle,
  ProjectDescriptionDiv,
} from "./ProjectsElements";
import { ProjectContainer, ProjectButtonExternal } from "../Wrappers";
import WebFont from "webfontloader";

const Projects = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto"],
      },
    });

    window.scrollTo(0, 0);
    document.title = "Projects | Ron Joshi";
  }, []);

  return (
    <ProjectsWrapper>
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on:</p>

      <ProjectContainer>
        <ProjectTitle>Memento AI</ProjectTitle>
        <ProjectDescriptionDiv>
          <p>Built a full-stack, AI-powered journaling platform that uses semantic memory search and a dual-agent system to help users uncover personal patterns and emotional insights.</p>
          <p><strong>Technical Implementation:</strong></p>
          <ul>
            <li><strong>Architecture:</strong> Developed with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>PostgreSQL</strong>.</li>
            <li><strong>Semantic Search:</strong> Implemented <strong>pgvector</strong> to store 1536-dimensional embeddings, enabling hybrid vector/full-text search for natural language queries (e.g., <em>"When did I feel overwhelmed?"</em>).</li>
            <li><strong>Dual-Agent Orchestration:</strong> Engineered a <strong>Planner/Messenger</strong> architecture using <strong>OpenRouter</strong>. The Planner agent executes parallel tool calls—filtering by tags, dates, and similarity—while the Messenger synthesizes context-aware, empathetic responses.</li>
            <li>Integrated <strong>Row-Level Security (RLS)</strong> for multi-user privacy, alongside a responsive UI featuring color-coded tagging and dynamic filtering.</li>
          </ul>
        </ProjectDescriptionDiv>
        <ProjectButtonExternal
          href="https://github.com/ronjoshi"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </ProjectButtonExternal>
        <ProjectButtonExternal
          href="https://memento-ai.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </ProjectButtonExternal>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectTitle>NLP Group Final Project</ProjectTitle>
        <ProjectDescriptionDiv>
          <p>Classified movie genre from script sentiment as part of a group NLP research project (individual role: Section 4.2).</p>
          <ul>
            <li>Trained regression models on <strong>VADER</strong> sentiment features extracted from movie scripts to predict genre.</li>
            <li>Found that models trained on <strong>polar genres</strong> (e.g. Romance vs. Horror) achieved high accuracy, while <strong>similar genres</strong> (Sci-Fi vs. Action) were difficult to distinguish due to overlapping sentiment profiles.</li>
            <li>Wrote a paper analyzing the methodology and findings.</li>
          </ul>
        </ProjectDescriptionDiv>
        <ProjectButtonExternal
          href="https://github.com/prateekma/comp590-nlp-project/blob/main/COMP_590_NLP_Final_project.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Paper
        </ProjectButtonExternal>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectTitle>Machine Learning Final Project</ProjectTitle>
        <ProjectDescriptionDiv>
          <p>Predicted the solar carbon offset potential of regions using the <strong>Google Sunroof</strong> dataset to support sustainable energy decisions.</p>
          <ul>
            <li>Built and compared multiple models: <strong>linear/ridge regression</strong>, <strong>decision tree</strong>, <strong>SVM</strong>, and <strong>random forest</strong>.</li>
            <li>Used Sunroof dataset predictors (roof area, sunlight hours, etc.) to estimate carbon offset impact per region.</li>
            <li>Aimed to quantify the environmental benefit of solar adoption for climate-conscious planning.</li>
          </ul>
        </ProjectDescriptionDiv>
        <ProjectButtonExternal
          href="https://github.com/ronjoshi-unc/GoogleSunroofML"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </ProjectButtonExternal>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectTitle>2048 3D</ProjectTitle>
        <ProjectDescriptionDiv>
          <p>A 3D reimagining of the classic 2048 puzzle game, built in <strong>Unity</strong>.</p>
          <ul>
            <li>Implemented tile merging mechanics extended to a 3D grid.</li>
            <li>Built a scoring system and interactive 3D camera controls.</li>
          </ul>
        </ProjectDescriptionDiv>
        <ProjectButtonExternal
          href="https://github.com/ronjoshi/2048-3d"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </ProjectButtonExternal>
        <ProjectButtonExternal
          href="https://ronjoshi.itch.io/3d-2048"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play on itch.io
        </ProjectButtonExternal>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectTitle>Street Ball Basketball</ProjectTitle>
        <ProjectDescriptionDiv>
          <p>An interactive street basketball game built in <strong>Unity</strong>.</p>
          <ul>
            <li>Implemented realistic ball physics with trajectory calculations and collision detection.</li>
            <li>Designed scoring mechanics and fast-paced gameplay loop.</li>
          </ul>
        </ProjectDescriptionDiv>
        <ProjectButtonExternal
          href="https://github.com/ronjoshi/street-ball"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </ProjectButtonExternal>
        <ProjectButtonExternal
          href="https://ronjoshi.itch.io/street-ball"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play on itch.io
        </ProjectButtonExternal>
      </ProjectContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
