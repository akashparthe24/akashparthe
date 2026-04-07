import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import SkillCategoryCard from "../components/SkillCategoryCard";
import { skillCategories } from "../data/portfolioData";

function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Cross-Functional Expertise"
        subtitle="Combining business analysis with technical execution to drive measurable outcomes."
      />

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default SkillsSection;
