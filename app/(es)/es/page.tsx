import About from '@components/About/About';
import Contact from '@components/Contact/Contact';
import Experience from '@components/Experience/Experience';
import Hero from '@components/Hero/Hero';
import Section from '@components/Section/Section';
import SiteFooter from '@components/SiteFooter/SiteFooter';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';

const LANG: Lang = 'es';

export default function Page() {
  const t = ui[LANG];

  return (
    <>
      <Hero lang={LANG} />

      <main>
        <Section id="about" label={t.sections.about}>
          <About lang={LANG} />
        </Section>

        <Section id="experience" label={t.sections.experience}>
          <Experience lang={LANG} />
        </Section>

        <Section id="contact" label={t.sections.contact}>
          <Contact lang={LANG} />
        </Section>
      </main>

      <SiteFooter lang={LANG} />
    </>
  );
}
