import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Resume = () => {

  return (
    <Section id="resume">
      <SectionTitle>Resume</SectionTitle>

      <SectionText>  
      <iframe src="https://onedrive.live.com/embed?cid=DC7E9D60B805AA82&amp;resid=DC7E9D60B805AA82%21389326&amp;authkey=AH7yWUu2rO-59uA&amp;em=2" 
        width="120%" 
        height="1200px" 
        frameborder="0">This is an embedded 
        <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
      </iframe>
      </SectionText>
      
      <SectionDivider />
    </Section>
  );
};

export default Resume;
