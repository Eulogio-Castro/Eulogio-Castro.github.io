import React from 'react';
import { DiReact, DiVisualstudio } from 'react-icons/di';
import { SiJava, SiDotnet, SiCsharp, SiMicrosoftsqlserver, SiMaterialUi, SiJavascript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoGit } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies both professionally and in my own time.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <SiDotnet size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React, Razor, ASP.NET
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJavascript size="3rem" />
          <SiMicrosoftsqlserver size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JS and SQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMaterialUi size="3rem" />
        </picture>

        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            Experience with <br />
            libraries such as Material-UI and BootStrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJava size="3rem" />
          <SiCsharp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Object-Oriented Programming languages: C#, Java, C++
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
        <BiLogoGit size="3rem" />
          <AiFillGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            Experience with <br />
            Source Control via Git and GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
