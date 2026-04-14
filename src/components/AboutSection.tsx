import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skills = [
  { category: "Languages", items: ["Python", "Java", "C", "SQL", "JavaScript"] },
  { category: "ML / AI", items: ["Scikit-learn", "XGBoost", "LSTM", "YOLOv8", "OpenCV", "Transformers"] },
  { category: "Web", items: ["React", "Flask", "Django", "Tailwind CSS", "Framer Motion"] },
  { category: "Tools", items: ["MySQL", "MongoDB", "Pandas", "NumPy", "Matplotlib"] },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <SectionHeading title="About Me" subtitle="who I am" />

    <div className="grid md:grid-cols-2 gap-12">
      <AnimatedSection>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a B.E. Computer Science student specializing in{" "}
            <span className="text-primary font-medium">AI & Machine Learning</span> at KPR Institute of Engineering and Technology, Coimbatore.
          </p>
          <p>
            With a CGPA of 8.6 and Honours GPA of 9.0, I combine academic excellence with practical ML engineering — from deploying osteoporosis prediction models to building real-time anomaly detection systems.
          </p>
          <p>
            I'm also the Joint Secretary of the IEEE Computational Intelligence Society, actively participating in national-level hackathons and competitions.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="space-y-6">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="font-mono text-sm text-primary mb-3">{`> ${s.category}`}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-md border border-border/50 hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
