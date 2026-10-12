import Callout from '../components/Callout';
import DocumentCard from '../components/DocumentCard';
import { TextFigure } from '../components/Figure';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import StackDiagram from '../components/StackDiagram';
import {
  decolonialRisks,
  mineralToModelSteps,
  techCentralQuestion,
  techStackSteps,
} from '../data/caseStudy';

export default function TechnologyPage() {
  return (
    <div className="page">
      <PageHero
        kicker="Infrastructure, extraction, and power"
        title="The Technology"
        subtitle="Machine learning is not inherently the problem. The political question is how a U.S.-led technology strategy reorganizes Philippine land, minerals, labor, energy, and authority."
      />

      <Callout label="Argument of this page" large>
        <p>
          Pax Silica places Philippine
          land, resources, infrastructure, and communities within a U.S.-led security
          strategy. The central question is who controls the terms, carries the risks,
          and keeps the value? Or in other words.. who holds the power and maintains sovereignty over the land, resources, infrastructure, and communities autonomy in this case?
        </p>
      </Callout>

      <section className="section" aria-labelledby="ml-physical">
        <SectionHeading
          id="ml-physical"
          title="Machine Learning Is a Method, Not a Moral Actor"
        />
        <TextFigure
          id="institutionalModel"
          caption="Philippine and U.S. officials examine a development model of New Clark City. The image redirects attention from abstract machine learning to the institutions making material decisions in the Philippines."
        >
        <div className="prose">
          <p>
            Machine learning describes computational methods that identify patterns
            in data. It can be used in many political and economic arrangements. It
            does not independently decide where a factory is built, whose minerals
            are processed, who owns infrastructure, or whether an Indigenous
            community is consulted.
          </p>
          <p>
            Those decisions are made by governments, firms, investors, regulators,
            and international partners. Criticism should therefore focus on the
            institutions and material relationships organizing the technology, not on
            treating &ldquo;AI&rdquo; as if it were an independent force arriving
            from nowhere.
          </p>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="silicon-computation">
        <SectionHeading
          id="silicon-computation"
          title="The Supply Chain Has a Geography"
        />
        <TextFigure
          id="corridor"
          flip
          caption="A U.S. Embassy map places Clark within the Luzon Economic Corridor connecting Subic Bay, Manila, and Batangas. It shows how the proposed hub is embedded in a Philippine geography of ports, transport, energy, and international investment."
        >
        <div className="prose">
          <p>
            Semiconductor production itself is distributed across multiple stages. A
            simplified chain begins with chip design, continues through wafer
            fabrication, and then moves into assembly, testing, and packaging before
            chips are integrated into larger computing systems. These stages rely on
            specialized equipment, materials, technical expertise, and suppliers
            located across multiple countries.
          </p>
          <p>
            Calling this a global supply chain can hide unequal positions inside it.
            Some places control finance, intellectual property, design, standards, and
            final markets. Others supply land, minerals, energy, labor, or lower-value
            production. Participation alone does not prove sovereignty.
          </p>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="mineral-model">
        <SectionHeading
          id="mineral-model"
          title="The Material Architecture of Machine Learning"
        />
        <div className="prose">
          <p>
            Machine learning infrastructure is an interdependent material system,
            not merely a sequence of technical components.
          </p>
        </div>
        <StackDiagram
          title="Interdependent infrastructure layers"
          caption="Every layer depends on land, labor, energy, institutions, and cross-border supply chains."
          steps={techStackSteps}
          palette="cool"
          layout="web"
        />
        <div className="prose">
          <p>Expanded chain used in this case:</p>
        </div>
        <ol className="chip-list" aria-label="From mineral to model steps">
          {mineralToModelSteps.map((step, index) => (
            <li key={step}>
              {index + 1}. {step}
            </li>
          ))}
        </ol>
        <div className="prose">
          <p>
            This matters because the politics of machine learning do not begin when
            somebody types a prompt. They also exist in decisions about where
            materials come from, where chips are designed and manufactured, who owns
            the intellectual property, where facilities are located, whose electricity
            and water systems support them, and who receives economic value from each
            stage.
          </p>
        </div>
        <Callout label="Remember">
          <p>
            The cloud has a physical address, and every supply chain has a political
            history.
          </p>
        </Callout>
      </section>

      <section className="section" aria-labelledby="colonial-risk">
        <SectionHeading
          id="colonial-risk"
          title="Where the Colonial Risk Enters"
          eyebrow="Decolonial lens"
        >
          These are risks to investigate, not claims that every projected harm has
          already occurred.
        </SectionHeading>
        <ol className="risk-list">
          {decolonialRisks.map((risk, index) => (
            <li key={risk.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{risk.title}</h3>
                <p>{risk.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="land-minerals">
        <SectionHeading
          id="land-minerals"
          title="4,000 Acres, Minerals, and a November Decision Point"
        />
        <div className="prose">
          <p>
            The April 16, 2026 U.S. announcement described a planned 4,000-acre
            Economic Security Zone in the Philippines as a platform for allied
            manufacturing and for inputs vital to U.S. supply chains. Four thousand
            acres is about 1,620 hectares. BCDA has said development would be phased,
            rather than occupying the entire area immediately, but the scale still
            demands public scrutiny before commitments become difficult to reverse.
          </p>
          <p>
            As of October 2026, BCDA had expressed hope that the Philippines and
            United States would sign a framework agreement in November. That makes the
            period before signing a real political decision point. Consultation,
            environmental information, public terms, Indigenous rights, and the
            practical ability to renegotiate or refuse should precede commitment, not
            follow it.
          </p>
          <p>
            Critical minerals are part of Pax Silica&apos;s official strategic stack,
            and Philippine officials have discussed processing nickel and copper to
            retain more value domestically. Available sources do not establish that
            nickel will be mined from the New Clark City site. BCDA says mining will
            not occur there, and officials have said some processing could occur near
            mining areas elsewhere. The unresolved issue is broader: processing
            requires an upstream flow of minerals, and increased demand can intensify
            extraction pressures in other Philippine communities.
          </p>
        </div>
        <Callout label="Why caution is warranted" large>
          <p>
            A project can promise domestic value and still reproduce colonial power
            if Filipino institutions and affected communities do not control the
            terms, the knowledge, the infrastructure, the resources, and the right to
            say no.
          </p>
        </Callout>
      </section>

      <section className="section" aria-labelledby="pax-enters">
        <SectionHeading
          id="pax-enters"
          title="Pax Silica Is Directly Tied to a U.S. Initiative"
        />
        <TextFigure
          id="siteUnveiling"
          caption="Philippine and U.S. officials stand beside the Pax Silica site marker at New Clark City. The image connects the international framework to the specific place proposed for development."
        >
        <div className="prose">
          <p>
            The U.S. Department of State calls Pax Silica its flagship effort on AI
            and supply-chain security. It presents the initiative as a U.S.-led
            coalition spanning critical minerals, energy, advanced manufacturing,
            semiconductors, AI infrastructure, and logistics. Its April announcement
            described the Philippine zone in relation to U.S. and allied supply-chain
            needs.
          </p>
          <p>
            Philippine officials frame the same arrangement as an opportunity for
            higher-value domestic processing, manufacturing, research, jobs, and
            exports. Both descriptions matter, but they are not identical. A
            decolonial analysis asks whose purpose will govern when those interests
            diverge.
          </p>
        </div>
        </TextFigure>
        <Callout label="Central technology question" large>
          <p>{techCentralQuestion}</p>
        </Callout>
      </section>

      <section className="section" aria-labelledby="technology-evidence">
        <SectionHeading
          id="technology-evidence"
          title="Evidence for This Reading"
        >
          Compare official U.S. and Philippine descriptions with reporting and
          environmental advocacy analysis.
        </SectionHeading>
        <div className="grid-cards cols-3">
          {[
            'state-pax-silica',
            'state-ph-4000-acre-zone',
            'bcda-ai-hub',
            'bcda-nov-framework-2026',
            'gma-minerals-aug14',
            'cec-policy-brief-2026',
          ].map((id) => (
            <DocumentCard key={id} sourceId={id} />
          ))}
        </div>
      </section>
    </div>
  );
}
