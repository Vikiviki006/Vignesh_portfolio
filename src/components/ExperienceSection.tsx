import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => (
  <section id="experience" className="section-padding max-w-7xl mx-auto">
    <SectionHeading title="Experience" subtitle="internship" />

    <AnimatedSection>
      <div className="glass-card p-8 md:p-10 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-mono px-3 py-1 bg-accent/20 text-accent-foreground rounded-full">
              Internship
            </span>
            <span className="text-xs font-mono text-muted-foreground">Jan 2025 – Feb 2025</span>
          </div>

          <h3 className="font-mono text-xl md:text-2xl font-bold text-foreground mb-1">
            Machine Learning Intern
          </h3>
          <p className="text-primary font-mono text-sm mb-6">Synovers Technologies</p>

          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary mt-1 shrink-0">▹</span>
              Built an osteoporosis prediction model using Decision Trees with feature engineering and hyperparameter tuning.
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary mt-1 shrink-0">▹</span>
              Developed a Flask app for real-time predictions and improved model interpretability.
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default ExperienceSection;
