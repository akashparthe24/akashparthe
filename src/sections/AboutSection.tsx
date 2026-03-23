import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle
        eyebrow="About"
        title="Business Insight Backed by Engineering Depth"
      />

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50/60 via-cyan-50/40 to-emerald-50/45 p-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl"
        />

        <div className="grid gap-5 grid-cols-1">
          <article className="rounded-2xl bg-white/60 p-6 shadow-[0_14px_32px_rgba(22,67,102,0.12)] backdrop-blur-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(22,67,102,0.16)] md:p-7">
            <p className="text-base leading-relaxed text-slate-700 md:text-[1.05rem]">
              I&apos;m a Business Analytics graduate candidate at Carnegie Mellon University with 3+ years of
              experience building data-driven products and scalable systems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-[1.05rem]">
              I work at the intersection of business strategy, analytics, and AI to turn ambiguous problems into
              measurable outcomes.
            </p>

            <ul className="mt-6 grid gap-3 text-[0.98rem] leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-600" aria-hidden="true" />
                <span>Translate business goals into KPI-driven analytics and decision frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-600" aria-hidden="true" />
                <span>Build production-ready AI systems (ML, computer vision, RAG pipelines)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-600" aria-hidden="true" />
                <span>Design scalable data pipelines and BI dashboards for real-time insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-600" aria-hidden="true" />
                <span>Deliver solutions that improve decision speed, efficiency, and business impact</span>
              </li>
            </ul>
          </article>

          <aside className="rounded-2xl bg-gradient-to-br from-cyan-100/85 via-sky-100/80 to-blue-100/75 p-6 shadow-[0_16px_34px_rgba(20,72,116,0.16)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(20,72,116,0.2)] md:p-7">
            <h3 className="text-[1.2rem] font-bold tracking-tight text-slate-900 md:text-[1.35rem]">Core Focus Areas</h3>
            <ul className="mt-5 grid gap-3 text-[0.98rem] text-slate-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-cyan-700 shadow-sm">
                  ✓
                </span>
                <span>KPI-driven analytics and business decision modeling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-cyan-700 shadow-sm">
                  ✓
                </span>
                <span>End-to-end AI systems with reliable evaluation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-cyan-700 shadow-sm">
                  ✓
                </span>
                <span>Scalable data engineering and pipeline design</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
