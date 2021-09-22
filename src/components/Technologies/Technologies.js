import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava, DiVisualstudio } from 'react-icons/di';
import {SiJava, SiMaterialUi} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies from web development to game development
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMaterialUi size="3rem" />
        </picture>

        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Material-UI and BootStrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Experience with <br />
            Object=Oriented Programming languages: Java, C#, C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Visual Studio</ListTitle>
          <ListParagraph>
            Experience with <br />
            Visual Studio/ VSCode for development/debugging
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiFillGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>GitHub</ListTitle>
          <ListParagraph>
            Experience with <br />
            Source Control Via Git/GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
