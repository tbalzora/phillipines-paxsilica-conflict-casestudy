import { useMemo, useState } from 'react';
import Callout from '../components/Callout';
import CasePath from '../components/CasePath';
import { TextFigure } from '../components/Figure';
import DiscussionQuestion from '../components/DiscussionQuestion';
import ActorNetwork from '../components/ActorNetwork';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SourceCard from '../components/SourceCard';
import StackDiagram from '../components/StackDiagram';
import {
  accountabilityQuestion,
  actorNodes,
  discussionQuestions,
  ideaStackSteps,
  institutionalHardware,
  softwareIdeas,
} from '../data/caseStudy';
import { SOURCE_CATEGORIES, sources } from '../data/sources';

export default function ConceptsPage() {
  const [filter, setFilter] = useState('All');

  const filteredSources = useMemo(() => {
    if (filter === 'All') return sources;
    return sources.filter((source) => source.category === filter);
  }, [filter]);

  return (
    <div className="page">
      <PageHero
        kicker="Analysis"
        title="Concepts & Evidence"
        subtitle="Connect the software and hardware of the international order to complex multilateralism, while keeping this question open: who gets to define development?"
      />

      <Callout
        label="The questions we must carry as we dive into the concepts:"
        large
      >
        <ol className="concept-questions">
          <li>
            Pax Silica establishes a form of technocratic development, but for whom?
          </li>
          <li>
            Who gets to consent, refuse, or renegotiate before development plans
            harden?
          </li>
          <li>
            Does Pax Silica build Philippine technological sovereignty, or organize
            Philippine land, resources, and infrastructure around priorities defined
            elsewhere?
          </li>
        </ol>
      </Callout>

      <section className="section" aria-labelledby="concept-one">
        <SectionHeading
          id="concept-one"
          title="Concept One: Software and Hardware of the International Order"
          eyebrow="Williams & Gordon-Gibson"
        />
        <div className="prose">
          <p>
            Williams and Gordon-Gibson distinguish between the software and hardware of
            the international order. This case uses their chapter &ldquo;Institutions:
            Software and Hardware&rdquo; in <em>Conflict and Development</em> (3rd ed.,
            2024, pp. 72–114).
          </p>
          <p>
            The software consists of theories, assumptions, and ideas about politics,
            power, development, cooperation, and the way the international system
            should function. In the Pax Silica case, that software includes ideas
            about economic modernization, technological competitiveness, secure
            global supply chains, foreign investment, national development,
            international cooperation, and technological sovereignty.
          </p>
        </div>
        <ul className="chip-list" aria-label="Software ideas in this case">
          {softwareIdeas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
        <TextFigure
          id="institutionalModel"
          caption="Philippine and U.S. officials examine a physical model of New Clark City. The image makes institutional hardware visible: people, agencies, plans, and authority organized around a development proposal."
        >
        <div className="prose">
          <p>
            The hardware consists of the institutions that translate those ideas into
            practice. For this case, that institutional hardware includes the
            Philippine national government, the United States, Japan through the Luzon
            Economic Corridor, BCDA, the Board of Investments, DENR, NCIP, the Capas
            local government, private investors, research institutions, technology
            companies, and communities affected by the proposed development.
          </p>
        </div>
        </TextFigure>
        <ul className="chip-list" aria-label="Institutional hardware in this case">
          {institutionalHardware.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
        <Callout label="Central conceptual play" large>
          <p>
            Pax Silica contains two kinds of hardware: the physical hardware of
            advanced computing and the institutional &ldquo;hardware&rdquo; through
            which decisions about that technology are made.
          </p>
        </Callout>
        <div className="prose">
          <p>
            A semiconductor chip may be a physical object, but whether and where
            semiconductor industries are developed is shaped by institutions, law,
            investment, international relationships, and competing ideas about what
            development should accomplish.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="concept-two">
        <SectionHeading
          id="concept-two"
          title="Concept Two: Complex Multilateralism"
        />
        <TextFigure
          id="corridor"
          flip
          caption="The U.S. Embassy infographic describes the Luzon Economic Corridor as coordinated investment by the Philippines, United States, and Japan across transport, energy, agribusiness, and semiconductor supply chains."
        >
        <div className="prose">
          <p>
            Traditional multilateralism is often imagined primarily as cooperation
            among states. Complex multilateralism recognizes a shift toward governance
            involving a much broader range of actors. O&apos;Brien, Goetz, Scholte, and
            Williams describe it as movement away from an exclusively state-based
            structure and toward arrangements in which actors outside national
            governments increasingly participate in questions of public interest and
            governance.
          </p>
          <p>
            Pax Silica provides a useful contemporary case because no single
            institution completely explains what is happening. It is simultaneously an
            international framework, a Philippine national development strategy, part
            of a trilateral economic corridor, a proposed local industrial project, an
            investment opportunity for private firms, an environmental-regulatory
            matter, an Indigenous-rights issue, and a municipal governance question.
          </p>
          <p>
            The result is an overlapping network. The arrows should run in multiple
            directions. A community can petition. A local government can demand
            consultation. A regulatory agency can impose requirements. Investors can
            influence project feasibility. International partners can shape
            supply-chain priorities. National agencies can determine industrial policy.
          </p>
          <p>
            Complex multilateralism therefore does not mean that every actor has equal
            power. Instead, it gives us a way to ask:
          </p>
        </div>
        </TextFigure>
        <ActorNetwork
          title="Actor network (multidirectional)"
          caption="International framework, national government, agencies, local government, corporations, research institutions, regulators, and community actors interact in more than one direction."
          nodes={actorNodes}
        />
        <Callout label="Central question" large>
          <p>{accountabilityQuestion}</p>
        </Callout>
      </section>

      <section className="section" aria-labelledby="mirror">
        <SectionHeading
          id="mirror"
          title="From Idea to Consequence"
          eyebrow="Mirror of the technology stack"
        >
          On the Technology page, learners see how machine learning is built. Here,
          the same visual grammar shows how development decisions are built, and where
          local consequences enter the chain.
        </SectionHeading>
        <StackDiagram
          title="Institutional decision stack"
          caption="ideas to institutions to policies to investment to infrastructure to local consequences"
          steps={ideaStackSteps}
          palette="warm"
        />
      </section>

      <section className="section" aria-labelledby="together">
        <SectionHeading id="together" title="Putting the Concepts Together" />
        <TextFigure
          id="aerial"
          caption="New Clark City viewed from above. The concepts on this page connect international ideas and institutions to infrastructure with a physical location and local consequences."
        >
        <div className="prose">
          <p>
            The software/hardware framework helps identify the ideas and institutions
            producing a development project. Complex multilateralism helps reveal the
            relationships among those institutions, including unequal capacity to
            refuse.
          </p>
          <p>
            Together, the concepts show why the Pax Silica conflict cannot be
            understood purely as a dispute over a piece of technology. The physical
            infrastructure is being shaped through an international and domestic
            governance network containing actors operating at very different scales
            and with different types of authority. When that network claims to speak
            for development, it is worth asking whose knowledge, land, labor,
            resources, and futures are being reorganized.
          </p>
          <p>
            This also explains why local consultation becomes theoretically important.
            A community can live beside globally significant infrastructure while
            possessing far less institutional power than the organizations financing,
            regulating, or designing it.
          </p>
          <p>
            The case therefore asks learners to consider whether technological
            development should be evaluated only by its eventual products, investment
            value, or number of jobs. Development can also be examined through
            participation, institutional accountability, local capacity, environmental
            governance, distribution of risk, and who is able to influence the terms
            under which technology enters a place.
          </p>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="discussion">
        <SectionHeading id="discussion" title="Discussion Questions" />
        {discussionQuestions.map((item, index) => (
          <DiscussionQuestion
            key={item.id}
            number={index + 1}
            question={item.question}
            guide={item.guide}
          />
        ))}
      </section>

      <section className="section" aria-labelledby="library">
        <SectionHeading id="library" title="Source Library" />
        <div className="prose">
          <p>
            Sources are stored separately from presentation components. Where a URL
            is unavailable, the card shows a placeholder rather than an invented link.
          </p>
        </div>
        <div className="source-filters" role="group" aria-label="Filter sources by category">
          <button
            type="button"
            aria-pressed={filter === 'All'}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          {SOURCE_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid-cards cols-3">
          {filteredSources.map((source) => (
            <SourceCard key={source.id} source={source} />
          ))}
        </div>
      </section>

      <CasePath
        back={{ to: '/conflict', label: 'Back to Conflict & Voices' }}
        next={{ to: '/', label: 'Return to the beginning of the case' }}
      />
    </div>
  );
}
