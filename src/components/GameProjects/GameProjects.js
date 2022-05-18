import React from 'react';
import Link from 'next/dist/client/link';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './GameProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { gameprojects } from '../../constants/constants';

const GameProjects = () => (
  <Section nopadding id="gameprojects">
    <SectionDivider />
    <SectionTitle main>Game Projects</SectionTitle>
    <SectionText>
      These projects were created as part of game dev courses at CSUDH, with a dev time of 3 weeks for the 2D projects, and 6 weeks for the 3D projects
    </SectionText>
    <GridContainer>
      {gameprojects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tags</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
            <ExternalLinks href={p.visit} target="_blank">Demo</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default GameProjects;
