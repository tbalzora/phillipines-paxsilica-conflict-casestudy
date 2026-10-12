import Callout from '../components/Callout';
import DocumentCard from '../components/DocumentCard';
import { TextFigure } from '../components/Figure';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import VideoEmbed from '../components/VideoEmbed';
import {
  conflictStages,
  conflictCentralQuestionEnglish,
  primaryDocumentIds,
  videos,
} from '../data/caseStudy';

export default function ConflictPage() {
  return (
    <div className="page">
      <PageHero
        kicker="Conflict before violence"
        title="Conflict & Voices"
        subtitle="Conflict begins when plans for land, resources, and futures move forward while affected people lack equal information, authority, or power to refuse. It does not require war to be real."
      />

      <Callout label="Central question" large>
        <p>{conflictCentralQuestionEnglish}</p>
      </Callout>

      <section className="section" aria-labelledby="conflict-stages">
        <SectionHeading
          id="conflict-stages"
          title="How This Conflict Developed"
          eyebrow="Documented stages"
        >
          These stages describe the public record through October 2026. They are not
          a claim that escalation is inevitable or that every dispute follows one
          linear path.
        </SectionHeading>
        <div className="prose">
          <p>
            Conflict is often recognized only when it becomes a hearing, protest,
            lawsuit, or physical confrontation. By then, an earlier conflict may
            already exist over agenda-setting, information, land, consent, and whose
            knowledge counts. In this case, public Indigenous concern did not create
            the conflict. It revealed a conflict already produced by unequal authority
            over the development process.
          </p>
        </div>
        <ol className="conflict-stages">
          {conflictStages.map((stage, index) => (
            <li key={stage.date}>
              <div className="conflict-stage-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <p className="conflict-stage-date">{stage.date}</p>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="promise">
        <SectionHeading
          id="promise"
          title='Who Should Define the "Promise of Development"'
        />
        <TextFigure
          id="siteUnveiling"
          caption="Philippine and U.S. officials at the Pax Silica site unveiling in New Clark City. The staged ceremony presents the official development narrative through flags, institutional leaders, and the project marker."
        >
        <div>
        <p className="position-label gov">Government position</p>
        <div className="prose">
          <p>
            Government descriptions of Pax Silica emphasize investment, industrial
            upgrading, skilled employment, supply-chain security, and stronger
            Philippine participation in advanced manufacturing. BCDA has said the New
            Clark City project could attract major private investment and generate
            large numbers of high-skilled jobs over its development. Officials have
            also argued that the project could help the Philippines capture more value
            from its resources and existing electronics capabilities. These remain
            projections rather than completed outcomes because the project is still in
            the planning and development stage.
          </p>
          <p>
            The U.S. description adds another purpose: an Economic Security Zone
            designed to support inputs vital to U.S. and allied supply chains. The
            difference matters. A project can be presented domestically as national
            development while also serving a geopolitical strategy whose priorities
            were defined outside the communities asked to host it.
          </p>
          <p>
            The international context matters as well. A May 2026 joint statement by
            the Philippines, United States, and Japan described the Luzon Economic
            Corridor as involving energy, transportation, logistics, digital
            connectivity, and advanced manufacturing, while explicitly connecting the
            corridor&apos;s technology-supply-chain goals with Pax Silica.
          </p>
          <p>
            That language of development is powerful. It can make disagreement sound
            like opposition to progress itself, rather than a challenge to who gets
            to define progress and on whose terms.
          </p>
        </div>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="land">
        <SectionHeading
          id="land"
          title="Land, Livelihoods, and Indigenous Rights"
          eyebrow="Centered, not peripheral"
        />
        <TextFigure
          id="aetaLeader"
          flip
          caption="Aeta Hungey leader Petronila Muñoz gestures across land in Capas, Tarlac, near the area associated with the proposed development."
        >
        <div>
        <p className="position-label community">Community / local concerns</p>
        <div className="prose">
          <p>
            Aeta representatives from communities in Capas publicly raised concerns
            about possible disruption to homes and livelihoods, ancestral-domain
            claims, water, and places where ancestors are buried. Some called for the
            project&apos;s cancellation. The National Commission on Indigenous Peoples
            subsequently held dialogue with members of the Aeta Hungey community
            concerning these issues.
          </p>
        </div>
        <p className="position-label gov">Government position</p>
        <div className="prose">
          <p>
            BCDA has provided a different account. It maintains that the proposed
            development area does not overlap recognized ancestral domains and has
            said affected families would be supported while the project complies with
            Philippine law.
          </p>
        </div>
        <p className="position-label review">Questions still under review</p>
        <div className="prose">
          <p>
            For learners, the goal is not to erase that disagreement. The competing
            accounts make legal and institutional documents particularly important.
            The Indigenous Peoples Rights Act of 1997 recognizes Indigenous peoples&apos;
            rights to ancestral domains and establishes protections for participation
            and self-determination. Philippine FPIC procedures provide mechanisms for
            Free and Prior Informed Consent where applicable to projects affecting
            ancestral domains. A pending or unrecognized ancestral-domain claim does
            not make lived relationships to land politically irrelevant. Those
            procedures matter because participation must include the possibility of
            refusal or renegotiation, not merely notification after plans are public.
          </p>
        </div>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="local-questions">
        <SectionHeading id="local-questions" title="Local Questions" />
        <TextFigure
          id="aerial"
          caption="An aerial view of New Clark City shows the scale of roads, buildings, and existing development within the municipality around the proposed hub."
        >
        <div>
        <p className="position-label community">Community / local concerns</p>
        <div className="prose">
          <p>
            The conflict became more visible during the summer of 2026. Capas Mayor
            Roseller Rodriguez told a Senate hearing in August that the local
            government had not received meaningful consultation about the project.
            His concern is significant because the infrastructure
            may sit inside a nationally administered economic zone while its
            environmental, agricultural, transportation, housing, and social
            consequences still interact with the municipality surrounding it.
          </p>
          <p>
            This produces an important governance problem: formal authority over land
            is not necessarily the same thing as having complete authority over every
            consequence of development, or the power to reshape its terms.
          </p>
        </div>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="environment">
        <SectionHeading
          id="environment"
          title="Water, Energy, and Environmental Governance"
        />
        <div>
        <p className="position-label review">Questions still under review</p>
        <div className="prose">
          <p>
            Environmental review has also become part of the conflict. As of August
            26, 2026, DENR officials stated that no project-specific environmental
            impact assessment had yet been processed, although an Environmental
            Compliance Certificate existed for the broader BCDA development plan.
          </p>
          <p>
            Philippine law establishes an Environmental Impact Statement system
            intended to balance socio-economic development with environmental
            protection for projects that significantly affect environmental quality.
          </p>
          <p>
            The unresolved question is therefore larger than whether technology can
            technically be constructed:
          </p>
        </div>
        </div>
        <Callout label="Unresolved question" large>
          <p>
            Who receives enough information to evaluate it before consequential
            decisions are made, and whose knowledge counts as evaluation?
          </p>
        </Callout>
      </section>

      <section className="section" aria-labelledby="consultation">
        <SectionHeading id="consultation" title="Consultation and Authority" />
        <TextFigure
          id="institutionalModel"
          flip
          caption="Philippine and U.S. officials examine a physical development model of New Clark City. The image shows how plans are made legible inside institutional settings while consultation authority remains contested."
        >
        <div className="prose">
          <p>
            As of August 14, 2026, Capas Mayor Roseller Rodriguez told the Senate that
            the LGU had not been meaningfully consulted before details became public.
            NCIP dialogue with an Aeta community followed publicly raised concerns.
            Dialogue matters, but consultation that follows a public announcement is
            not the same as sharing authority before land and project purposes are
            designated. These moments show that authority is distributed across
            national agencies, regulators, local government, and communities, not
            held by a single actor, and not distributed equally.
          </p>
        </div>
        </TextFigure>
      </section>

      <section className="section" aria-labelledby="documents">
        <SectionHeading id="documents" title="Primary Documents" />
        <div className="grid-cards cols-3">
          {primaryDocumentIds.map((id) => (
            <DocumentCard key={id} sourceId={id} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="voices">
        <SectionHeading id="voices" title="Voices From the Case" />
        <div className="prose">
          <p>Keep these voices distinct while you read and watch:</p>
          <ul>
            <li>
              <strong>Government position:</strong> advanced manufacturing, jobs,
              investment, supply-chain resilience, and higher-value technology
              activities.
            </li>
            <li>
              <strong>Community / local concerns:</strong> ancestral-domain claims,
              livelihoods, agricultural land, water, displacement, and meaningful
              consultation, including the capacity to refuse.
            </li>
            <li>
              <strong>Questions still under review:</strong> project-specific
              environmental assessment timing, how FPIC applies in this setting, and
              how municipal authority interacts with nationally administered zones.
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="multimedia">
        <SectionHeading id="multimedia" title="Multimedia" />
        <div className="prose">
          <p>
            The August 14, 2026 Senate inquiry is the centerpiece because learners can
            hear institutional and community positions in one setting. Pair it with
            BOI or BCDA presentation materials for the intended development model, then
            ask which voices can still interrupt that model.
          </p>
        </div>
        {videos.map((video) => (
          <VideoEmbed key={video.id} video={video} />
        ))}
      </section>
    </div>
  );
}
