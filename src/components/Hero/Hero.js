import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Eulogio Castro <br />
          Software Developer
        </SectionTitle>
        <SectionText>
        Motivated Computer Science graduate from California State University - Dominguez Hills with academic and personal experience in Software Development in multiple disciplines. Seeking aa position to grow as a software developer alongside a great team.</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;