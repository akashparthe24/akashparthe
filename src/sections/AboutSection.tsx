import Card from "../components/Card";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle
        eyebrow="About"
        title="Business Analyst Focused on Measurable Outcomes"
      />

      <Card className="about-consistent-card">
        <div className="w-full space-y-5">
          <p className="text-[1.03rem] leading-relaxed text-slate-600">
            I&apos;m a Business Analyst and MSBA candidate at Carnegie Mellon University with 3+ years of experience
            partnering with stakeholders to turn business needs into measurable outcomes. At LTIMindtree, I helped
            drive 40% cost reduction, 30% faster delivery, and executive visibility into $5M+ cloud spend.
          </p>

          <ul className="grid gap-3.5 text-[0.98rem] leading-relaxed text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Lead stakeholder workshops to gather requirements and align business priorities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Perform process mapping and gap analysis to identify high-impact improvements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Design KPI frameworks and executive dashboards that support faster decision-making</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Combine business acumen and technical execution to convert ambiguity into action</span>
            </li>
          </ul>
        </div>
      </Card>
    </SectionContainer>
  );
}

export default AboutSection;
