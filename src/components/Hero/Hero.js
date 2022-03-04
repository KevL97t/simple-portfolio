import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        KevL97t's <br />
        Portfolio
      </SectionTitle>
      <SectionText>
        Passion and will is what move us along to become what we are destined to be.
      </SectionText>
      <Button onClick={() => window.open('https://github.com/KevL97t')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;