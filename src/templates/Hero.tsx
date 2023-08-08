import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li></li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Fantastic Calendar system for your\n'}
            <span className="text-primary-500">Fabulous girls</span>
          </>
        }
        description="Satisfaction for you, for the girls, and for the customers."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/"></Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
