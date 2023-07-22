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
        Motivated Software Developer experienced in Object-Oriented Programming, ERP System Development, and Front-End frameworks. I continue learning outside of the workplace by experimenting with different technologies through my own projects.</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
