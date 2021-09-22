import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import GameProjects from '../components/GameProjects/GameProjects';
import Technologies from '../components/Technologies/Technologies';
import Resume from '../components/Resume/Resume';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <GameProjects />
      <Technologies />
      <Resume />
    </Layout>
  );
};

export default Home;
