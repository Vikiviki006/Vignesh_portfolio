import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  accent?: string;
}

const SectionHeading = ({ title, subtitle, accent = "//" }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12 md:mb-16"
  >
    <span className="text-primary font-mono text-sm tracking-widest uppercase">
      {accent} {subtitle || title}
    </span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mt-2 text-foreground">
      {title}
    </h2>
    <div className="h-1 w-16 bg-primary mt-4 rounded-full" />
  </motion.div>
);

export default SectionHeading;
