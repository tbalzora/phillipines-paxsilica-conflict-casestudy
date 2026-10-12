import { useState } from 'react';
import {
  paxSilicaOtherSignatories,
  siteMeta,
} from '../data/caseStudy';
import BrandMark from './BrandMark';
import styles from './LandingHero.module.css';
import brandStyles from './BrandMark.module.css';

function FlagEmoji({ emoji, name, className = '', title }) {
  const code = [...emoji]
    .map((character) => character.codePointAt(0).toString(16))
    .join('-');

  return (
    <img
      src={`${import.meta.env.BASE_URL}flag-emojis/${code}.svg`}
      alt={`${name} flag`}
      title={title}
      className={className}
      width="48"
      height="48"
    />
  );
}

export default function LandingHero() {
  const [slide, setSlide] = useState(0);
  const slideCount = 3;
  const moveSlide = (direction) => {
    setSlide((current) => (current + direction + slideCount) % slideCount);
  };

  return (
    <section className={styles.landing} aria-labelledby="landing-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className={styles.brandRow}>
            <BrandMark size={56} className={brandStyles.flagLarge} />
          </div>
          <p className={styles.kicker}>{siteMeta.kicker}</p>
          <h1 id="landing-title" className={styles.title}>
            {siteMeta.title}
          </h1>
          <p className={styles.subtitle}>{siteMeta.subtitle}</p>
          <p className={styles.credit}>
            {siteMeta.credit.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
        <div className={styles.aside}>
          <div className={styles.thesis} aria-label="Site thesis">
            <p className={styles.thesisEnglish}>What is Pax Silica?</p>
            <div
              className={styles.gallery}
              aria-live="polite"
              aria-label={`Pax Silica overview, slide ${slide + 1} of ${slideCount}`}
            >
              {slide === 0 ? (
                <div className={styles.slide}>
                  <p className={styles.slideNumber}>01 · Pax Silica at a glance</p>
                  <div className={styles.leadCountry}>
                    <FlagEmoji
                      emoji="🇺🇸"
                      name="United States"
                      className={styles.leadFlag}
                    />
                    <div>
                      <strong>United States</strong>
                      <span>Leads the Pax Silica initiative</span>
                    </div>
                  </div>
                  <div className={styles.signatories}>
                    <p>Other listed signatories, October 2026</p>
                    <div className={styles.flagList}>
                      {paxSilicaOtherSignatories.map((country) => (
                        <FlagEmoji
                          key={country.name}
                          emoji={country.flag}
                          name={country.name}
                          className={styles.countryFlag}
                          title={country.name}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.philippinesQuestion}>
                    <FlagEmoji
                      emoji="🇵🇭"
                      name="Philippines"
                      className={styles.philippinesFlag}
                    />
                    <div>
                      <strong>Philippines</strong>
                      <small>
                        The Philippines recently joined in April 2026. But who made
                        this decision? Was it the communities themselves, local
                        governments, or national officials? On whose terms is this
                        partnership really being built?
                      </small>
                    </div>
                    <b aria-hidden="true">?</b>
                  </div>
                </div>
              ) : null}

              {slide === 1 ? (
                <div className={styles.slide}>
                  <p className={styles.slideNumber}>02 · What the initiative connects</p>
                  <p className={styles.slideCopy}>
                    Pax Silica links several physical and political systems under one
                    economic-security framework.
                  </p>
                  <div className={styles.infoGrid}>
                    <div>
                      <strong>Semiconductors</strong>
                      <span>Design, manufacturing, assembly, testing, and packaging</span>
                    </div>
                    <div>
                      <strong>Critical minerals</strong>
                      <span>Inputs such as nickel and copper, plus their processing</span>
                    </div>
                    <div>
                      <strong>Infrastructure</strong>
                      <span>Land, ports, logistics, electricity, water, and facilities</span>
                    </div>
                    <div>
                      <strong>Political authority</strong>
                      <span>Who defines security, development, risk, and acceptable terms</span>
                    </div>
                  </div>
                </div>
              ) : null}

              {slide === 2 ? (
                <div className={styles.slide}>
                  <p className={styles.slideNumber}>03 · What remains at stake</p>
                  <p className={styles.slideCopy}>
                    Membership alone does not answer the case&apos;s central questions:
                  </p>
                  <div className={styles.questionList}>
                    <div>
                      Who sets the priorities and controls the infrastructure?
                    </div>
                    <div>Whose land, labor, minerals, water, and energy carry the risk?</div>
                    <div>
                      Can affected Philippine communities meaningfully consent,
                      refuse, or renegotiate?
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className={styles.galleryControls}>
              <button type="button" onClick={() => moveSlide(-1)}>
                <span aria-hidden="true">←</span> Previous
              </button>
              <span className={styles.galleryCount}>
                {String(slide + 1).padStart(2, '0')} / 03
              </span>
              <button type="button" onClick={() => moveSlide(1)}>
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
