import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="System online on Nov/2023."
      subtitle="Becoming an early bird."
      button={
        <Link href="mailto:info@arrange.today">
          <Button>Drop me email</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
