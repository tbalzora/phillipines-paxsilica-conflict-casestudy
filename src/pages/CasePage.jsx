import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Callout from '../components/Callout';
import ExternalLink from '../components/ExternalLink';
import { TextFigure } from '../components/Figure';
import LandingHero from '../components/LandingHero';
import LearningObjective from '../components/LearningObjective';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import {
  learningObjectives,
  openingFraming,
  thesisEnglish,
  timeline,
} from '../data/caseStudy';
import { figures } from '../data/figures';
import { getSourceById } from '../data/sources';

const sovereigntySourceIds = ['philsa-satellite-divide'];

export default function CasePage() {
  const noteDialogRef = useRef(null);

  return (
    <>
      <LandingHero />
      <div className="page with-landing">
        <Callout label="Thesis of the case" large>
          <p>{thesisEnglish}</p>
          <div className="callout-framing">
            {openingFraming.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Callout>

        <section className="section" aria-labelledby="summary">
          <SectionHeading id="summary" title="Case Study Summary" />
          <TextFigure
            id="aerial"
            caption="An aerial view of developed sections of New Clark City shows roads, buildings, and the stadium complex in the broader area associated with the proposed hub."
            below={[
              {
                id: 'antiPaxSilicaLaunch',
                caption:
                  'On August 31, 2026, people at the launch of an anti-Pax Silica group held signs reading “Shut Pax Silica Down,” “Philippines Not for Sale,” and “Reject Pax Silica.”',
              },
            ]}
          >
          <div className="prose">
            <p>
              Machine learning will often be commercially presented as a form of weightless intelligence
              operating somewhere in 'the cloud'. But we know that in reality, every model is grounded
              in physical and political systems [e.g.semiconductor materials, servers,
              networks, fabrication facilities, logistics, electricity, water, and
              cooling]. These systems occupy land, depend on labor, and are governed
              through institutions and international supply chains.
            </p>
            <p>
              In 2026, these physical systems became part of a larger struggle over
              development in the Philippines through Pax Silica. Pax Silica is a
              U.S.-led international economic-security framework intended to
              strengthen supply chains for semiconductors, advanced technologies,
              critical minerals, and related infrastructure. The Philippines joined
              the initiative in April 2026, and New Clark City in Capas, Tarlac was
              identified for a proposed 4,000-acre, or approximately 1,620-hectare,
              Economic Security Zone. The U.S. announcement described it as supporting
              inputs vital to U.S. supply chains. The project is also connected to the
              wider Luzon Economic Corridor involving the Philippines, United States,
              and Japan.
            </p>
            <p>
              Officials present the project through investment, advanced
              manufacturing, skilled employment, and higher-value semiconductor
              participation. BCDA has emphasized that the proposed hub is not simply a
              massive data center, but a broader industrial ecosystem. Those claims
              remain projections. They do not settle who has the authority to define
              development, or whose land, minerals, labor, water, knowledge, and
              futures are being reorganized to make that definition real.
            </p>
            <p>
              Local officials, farmers, Indigenous Aeta representatives, environmental
              advocates, and legislators have raised questions about consultation,
              livelihoods, ancestral-domain claims, water and electricity,
              environmental review, and the distribution of costs and benefits. Aeta
              representatives have publicly raised concerns about homes, livelihoods,
              and ancestral land, while BCDA has stated that the proposed site is
              outside recognized ancestral domains. That disagreement is not a side
              note. It is part of the politics of who gets to name what counts as
              development, and who is expected to absorb its risks.
            </p>
          </div>
          </TextFigure>
        </section>

        <section className="section" aria-labelledby="why">
          <SectionHeading id="why" title="Why This Case?" />
          <TextFigure
            id="aetaLeader"
            flip
            caption="Aeta Hungey leader Petronila Muñoz gestures across land in Capas, Tarlac. Her presence makes the case's question about who defines development concrete rather than abstract."
          >
            <div className="prose">
              <p>
                Though foreign industrial development can be present sovereignty issues on its own, in this case
                the central issue is the political arrangement being built around machine learning and the proposed hub rather than 
                the technology itself. In Metro Manila and across Luzon,
                Pax Silica is often presented as a path toward jobs, investment,
                industrial capacity, and a stronger Philippine position in technology
                markets. However, these same promises can conceal a
                predatory and misleading colonial structure if external actors set
                the priorities of the project while Philippine communities carry the very concerning environmental risks of
                extraction. Development must protect Indigenous peoples&apos; rights
                to land, meaningful consent, self-determination, and continuing
                control over decisions involving minerals and infrastructure in their
                territories. Conflict emerges through the Western-led agenda
                and colonial pattern that can form around Pax Silica: land designated
                at industrial scale, minerals and infrastructure organized for allied
                supply chains, and affected communities entering the process only
                after major plans are public.
                The case asks who can define, refuse, or renegotiate development
                before those plans harden. It can be noted that 'Pax' means peace in the latin langauge. Yet what is peaceful about
                a process that may threaten Indigenous land without meaningful
                consent, or build infrastructure without community ownership and
                control?
              </p>
              <button
                type="button"
                className="researcher-note-trigger"
                onClick={() => noteDialogRef.current?.showModal()}
              >
                <span>
                  <span className="researcher-note-label">
                    My additional research
                  </span>
                  <span className="researcher-note-title">
                    From satellite access to technological sovereignty
                  </span>
                </span>
                <span className="researcher-note-toggle" aria-hidden="true">
                  ↗
                </span>
              </button>
              <dialog
                ref={noteDialogRef}
                className="researcher-note"
                aria-labelledby="researcher-note-title"
              >
                <div className="researcher-note-heading">
                  <div>
                    <span className="researcher-note-label">
                      My additional research
                    </span>
                    <h3 id="researcher-note-title" className="researcher-note-title">
                      From satellite access to technological sovereignty
                    </h3>
                  </div>
                  <form method="dialog">
                    <button
                      type="submit"
                      className="researcher-note-close"
                      aria-label="Close additional research"
                    >
                      ×
                    </button>
                  </form>
                </div>
                <div className="researcher-note-body">
                  <div className="researcher-note-copy">
                    <p>
                      I started to recognize this pattern through my other research
                      on satellite infrastructure in the Philippines. For an
                      archipelago, satellite internet can connect geographically
                      isolated communities and last-mile islands that terrestrial
                      networks do not easily reach. PhilSA has documented uses for
                      education, local governance, telemedicine, and weather
                      information, including deployments that used Starlink.
                    </p>
                    <p>
                      But receiving a service is not the same as controlling its
                      infrastructure. When a community depends on a foreign private
                      provider, decisions about prices, plans, technical terms, and
                      service continuity remain largely outside that community&apos;s
                      control. The problem is not satellite technology itself. It is
                      dependence without sufficient public capacity, regulation,
                      alternatives, or community control.
                    </p>
                    <p>
                      That research made me realize that Pax Silica is not an isolated
                      case. The Philippines must repeatedly defend its technological
                      sovereignty in the satellite, cloud, semiconductor, mineral,
                      energy, and data infrastructures on which communities
                      increasingly depend. The recurring question is whether Filipinos
                      can govern essential infrastructure, keep it affordable and
                      available, and change its terms when foreign providers or
                      partner governments have different priorities.
                    </p>
                  </div>
                  <p className="researcher-note-signature">- Thea B.</p>
                  <div
                    className="researcher-note-sources"
                    aria-label="Sources for researcher note"
                  >
                    {sovereigntySourceIds.map((id) => {
                      const source = getSourceById(id);
                      return source ? (
                        <ExternalLink key={id} href={source.url}>
                          {source.title}
                        </ExternalLink>
                      ) : null;
                    })}
                  </div>
                </div>
              </dialog>
            </div>
          </TextFigure>
        </section>

        <section className="section" aria-labelledby="timeline">
          <SectionHeading
            id="timeline"
            title="Timeline"
            eyebrow="Dated developments"
          >
            Key public milestones and process questions from late 2025 through autumn
            2026. Select a date to read that moment. Photographs show the technology
            or the place. Captions say when a picture is not the event itself.
          </SectionHeading>
          <Timeline entries={timeline} />
        </section>

        <section className="section" aria-labelledby="objectives">
          <SectionHeading id="objectives" title="Learning Objectives" />
          <div className="prose">
            <p>As we move through the case, we aim to learn about:</p>
          </div>
          <LearningObjective objectives={learningObjectives} />
        </section>

        <section className="section" aria-labelledby="enter">
          <SectionHeading id="enter" title="Enter the Case" />
          <div className="prose">
            <p>
              Move through the case in order. Start with the technology, then the
              conflict and the voices inside it, then the concepts and evidence that
              help you read both.
            </p>
          </div>
          <div className="enter-case">
            <article className="enter-case-card">
              <Link className="enter-case-link" to="/technology">
                <img
                  src={figures.proposedSiteSeptember.src}
                  alt={figures.proposedSiteSeptember.alt}
                />
                <span className="enter-case-copy">
                  <small>01 · The Technology</small>
                  <strong>Trace the infrastructure</strong>
                  <span>
                    Follow the land, minerals, manufacturing, power, water, and
                    institutions behind the technological promise.
                  </span>
                </span>
              </Link>
              <p className="enter-case-credit">
                {figures.proposedSiteSeptember.credit}.{' '}
                <a
                  href={figures.proposedSiteSeptember.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            </article>
            <article className="enter-case-card">
              <Link className="enter-case-link" to="/conflict">
                <img
                  src={figures.institutionalModel.src}
                  alt={figures.institutionalModel.alt}
                />
                <span className="enter-case-copy">
                  <small>02 · Conflict &amp; Voices</small>
                  <strong>Center the conflict</strong>
                  <span>
                    Ask whose development vision carries authority, whose concerns
                    are heard, and who retains the power to say no.
                  </span>
                </span>
              </Link>
              <p className="enter-case-credit">
                {figures.institutionalModel.credit}.{' '}
                <a
                  href={figures.institutionalModel.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            </article>
            <article className="enter-case-card">
              <Link className="enter-case-link" to="/concepts">
                <img
                  src={figures.corridor.src}
                  alt={figures.corridor.alt}
                />
                <span className="enter-case-copy">
                  <small>03 · Concepts &amp; Evidence</small>
                  <strong>Read the arrangement</strong>
                  <span>
                    Connect the ideas and institutions behind Pax Silica, then use
                    the source library to test what the case claims.
                  </span>
                </span>
              </Link>
              <p className="enter-case-credit">
                {figures.corridor.credit}.{' '}
                <a
                  href={figures.corridor.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
