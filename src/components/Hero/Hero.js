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
          _Software Developer_
        </SectionTitle>
        <SectionText>
        Motivated early career Software Developer and Computer Science graduate from California State University - Dominguez Hills with experience in Software Development in various disciplines. Seeking a position to grow as a software developer alongside a great team.</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
