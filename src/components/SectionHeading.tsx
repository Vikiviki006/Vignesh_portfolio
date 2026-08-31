import { motion } from "framer-motion";

interface Props {
  number?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const SectionHeading = ({ number, title, subtitle, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mb-10 md:mb-14"
  >
    <div className="flex items-center gap-2 mb-2">
      {number && (
        <span className="font-mono text-xs font-semibold text-primary/90 tracking-wider">
          {number}
        </span>
      )}
      {number && subtitle && (
        <span className="text-white/20 text-xs font-mono">/</span>
      )}
      {subtitle && (
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {subtitle}
        </span>
      )}
    </div>
    
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold tracking-tight text-white/95 leading-tight">
      {title}
    </h2>

    {description && (
      <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
        {description}
      </p>
    )}

    <div className="mt-4 flex items-center gap-1.5">
      <div className="h-0.5 w-12 bg-primary/80 rounded-full" />
      <div className="h-0.5 w-2 bg-primary/40 rounded-full" />
    </div>
  </motion.div>
);

export default SectionHeading;

