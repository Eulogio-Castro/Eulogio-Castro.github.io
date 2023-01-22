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
        Motivated Software Developer experienced in Java, C#, ERP Systems, and Front-End Development frameworks. I continuously grow as a software developer by keeping current on new technologies and working my own projects.</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
