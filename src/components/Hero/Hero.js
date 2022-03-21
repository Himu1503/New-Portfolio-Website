import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
    <SectionTitle main center>
   Welcome To <br/>
   My personal Portfolio 
    </SectionTitle>
    <SectionText>
      I want to showcase my coding skills and the list of the projects that I have made. 
    </SectionText>
    <Button onClick={()=> window.location= "gitub.com/Himu1503"}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;