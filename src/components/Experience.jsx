import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'

const experiences = [
  {
    role: 'Machine Learning Engineer Intern',
    company: 'PulseMedica',
    period: 'Jan 2026 — Present',
    description: [
      'Engineered automated ingestion pipelines for 30 FPS SLO retinal video to support real-time analytics and model training workflows.',
      'Fine-tuned DINOv3 foundation models using custom lightweight adapters to improve medical image localization and segmentation performance.',
      'Adapted foundation-model-based segmentation pipelines and evaluated performance using IoU and Dice metrics under high-accuracy targets.',
      'Applied unsupervised PCA to high-dimensional foundation-model embeddings to extract structure from unlabeled retinal image sequences.',
      'Optimized neural architectures for low-latency inference, benchmarking against real-time clinical deployment constraints.',
      'Built evaluation workflows to compare model variants, analyze failure modes, and improve robustness across video sequences.'
    ]
  },
  {
    role: 'Teaching Assistant',
    company: 'CMPUT 261 (Introduction to AI), CMPUT 366 (Search & Planning) — University of Alberta',
    period: 'Sept 2025 — Present',
    description: [
      'Debugged and tested 1,200+ student submissions for specification compliance, correctness, edge-case handling, and expected behavior.',
      'Designed assignments and 50+ targeted test cases to surface failure modes and prevent incorrect algorithmic outputs.',
      'Identified recurring defect patterns across search and planning implementations and provided structured feedback to improve robustness.',
      'Evaluated algorithmic trade-offs in search systems, balancing correctness, completeness, and performance constraints.'
    ]
  },
  {
    role: 'Project Team Lead',
    company: 'Software Engineering Project — University of Alberta',
    period: 'Sept 2025 — Dec 2025',
    description: [
      'Developed an Android application using Java with a clean, modular design to support maintainability and testing.',
      'Integrated Firebase backend services to enable reliable client–backend communication and consistent state updates.',
      'Collaborated in Agile workflows to review changes, resolve defects, and coordinate development using Git and GitHub.',
      'Applied unit, API, and regression testing to validate application flows and overall system behavior.'
    ]
  },
  {
    role: 'Senior Representative',
    company: 'Undergraduate Association of Computer Science',
    period: 'May 2025 — Oct 2025',
    description: [
      'Represented undergraduate computing science students in academic and program discussions, supporting student concerns and departmental coordination.'
    ]
  }
]

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="experience" className="py-32 border-t border-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-muted">01</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Experience</h2>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted/50 origin-top"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ experience, index, inView }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.2 }}
      className={`relative grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:text-right'}`}
    >
      <div className={`${isEven ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
        <div className={`${!isEven && 'md:text-left'}`}>
          <span className="font-mono text-sm text-accent">{experience.period}</span>
          <h3 className="text-2xl font-bold mt-2">{experience.role}</h3>
          <p className="text-muted font-mono text-sm mt-1">{experience.company}</p>
        </div>
      </div>

      <div className={`${isEven ? 'md:pl-16' : 'md:order-1 md:pr-16'}`}>
        <ul className={`space-y-3 ${!isEven && 'md:text-left'}`}>
          {experience.description.map((point, i) => (
            <li key={i} className="text-muted text-sm flex gap-3">
              <span className="text-accent shrink-0">—</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 border border-light bg-dark -translate-x-1/2" />
    </motion.div>
  )
}
