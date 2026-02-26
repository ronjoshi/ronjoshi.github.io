import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particleOptions } from './particleOptions';

// Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import Projects from './components/Projects';
import Algorithms from './components/Algorithms';
import Contact from './components/Contact';

// Algorithm Detail Pages
import GardenOfThorns from './components/Algorithms/GardenOfThorns';
import Studying from './components/Algorithms/Studying';
import NDim2048 from './components/Algorithms/NDim2048';
import A1Paper from './components/Algorithms/A1Paper';
import EvaluateDivision from './components/Algorithms/EvaluateDivision';
import Basketball from './components/Algorithms/Basketball';
import FlowerBouquets from './components/Algorithms/FlowerBouquets';
import FloodFill from './components/Algorithms/FloodFill';
import OptimalPath from './components/Algorithms/OptimalPath';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  flex: 1;
`;

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <ParticlesContainer>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleOptions}
          />
        </ParticlesContainer>

        <ContentContainer>
          <Navbar />
          <Banner />

          <PageContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/algorithms" element={<Algorithms />} />
              <Route path="/algorithms/gardenofthorns" element={<GardenOfThorns />} />
              <Route path="/algorithms/studying" element={<Studying />} />
              <Route path="/algorithms/ndim2048" element={<NDim2048 />} />
              <Route path="/algorithms/a1paper" element={<A1Paper />} />
              <Route path="/algorithms/evaluatedivision" element={<EvaluateDivision />} />
              <Route path="/algorithms/basketball" element={<Basketball />} />
              <Route path="/algorithms/flowerbouquets" element={<FlowerBouquets />} />
              <Route path="/algorithms/floodfill" element={<FloodFill />} />
              <Route path="/algorithms/optimalpath" element={<OptimalPath />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageContent>

          <Footer />
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
