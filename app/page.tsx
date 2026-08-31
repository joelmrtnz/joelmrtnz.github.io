import About from '@components/About/About';
import Contact from '@components/Contact/Contact';
import Experience from '@components/Experience/Experience';
import Hero from '@components/Hero/Hero';
import Section from '@components/Section/Section';
import SiteFooter from '@components/SiteFooter/SiteFooter';

export default function HomePage() {
  return (
    <>
      <Hero />

      <main>
        <Section id="about" label="About">
          <About />
        </Section>

        <Section id="experience" label="Experience">
          <Experience />
        </Section>

        <Section id="contact" label="Contact">
          <Contact />
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
