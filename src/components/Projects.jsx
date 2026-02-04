import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'

const projects = [
  {
    title: 'Workflow Orchestration System',
    description: [
      'Designed and implemented a backend workflow automation service to coordinate multi-step processes with persistent state tracking.',
      'Built and tested RESTful APIs to trigger workflows, inspect execution state, and manage failure recovery.',
      'Applied a state-based execution model to ensure task consistency, trace execution history, and support safe re-runs.',
      'Containerized backend services and workers using Docker to ensure reproducible builds and deployment consistency.'
    ],
    tech: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'Redis', 'HTML/CSS', 'JavaScript', 'Docker'],
    github: 'https://github.com/gill-amitoj/WorkflowAutomationPlatform',
    isPrivate: false
  },
  {
    title: 'Kickoff (Event Lottery and Registration System)',
    period: 'Sept 2025 – Dec 2025',
    description: [
      'Designed and implemented an Android application supporting fair event registration using a lottery-based waiting list.',
      'Built role-based workflows for entrants, organizers, and administrators using Firebase with real-time updates.',
      'Integrated QR code scanning to enable event discovery, registration, and waiting list enrollment.',
      'Implemented dynamic reselection logic to manage declines and cancellations while maintaining consistent event state.'
    ],
    tech: ['Java', 'Android SDK', 'Firebase', 'QR Code APIs', 'XML', 'Gradle', 'Git'],
    github: 'https://github.com/CMPUT301F25origin/origin-kickoff',
    isPrivate: false
  },
  {
    title: 'Content Data Processing & Query Platform',
    description: [
      'Built SQL-backed data pipelines to ingest, validate, and structure content datasets for downstream analytics.',
      'Optimized query patterns and indexing strategies to improve filtering and retrieval efficiency.',
      'Developed CLI tools to inspect datasets, detect data quality issues, and debug inconsistencies.',
      'Ensured data reliability and integrity for analytics, reporting, and monitoring workflows.'
    ],
    tech: ['Python', 'SQL', 'SQLite', 'JSON', 'CLI Tools'],
    github: 'https://github.com/gill-amitoj',
    isPrivate: true
  },
  {
    title: 'Statistical Classification and Optimization Study (STAT 413)',
    period: 'Jan 2026 – Present',
    description: [
      'Trained soft-margin SVM classifiers on Canadian federal riding data to predict Liberal versus non-Liberal outcomes.',
      'Implemented and compared Adagrad, RMSProp, and BFGS to analyze convergence behavior and optimization cost.',
      'Evaluated linear and nonlinear kernels (RBF, polynomial) to study accuracy and stability trade-offs.',
      'Applied cross-validation to tune regularization parameters and report accuracy versus runtime performance.'
    ],
    tech: ['R', 'Python', 'Soft-Margin SVM', 'Nonlinear Kernels', 'Cross-Validation', 'scikit-learn', 'NumPy', 'Pandas'],
    github: 'https://github.com/gill-amitoj',
    isPrivate: true
  },
  {
    title: 'Operational Analytics and Utilization Dashboard',
    period: 'Dec 2025',
    description: [
      'Built analytics pipelines to clean, aggregate, and structure raw system log datasets.',
      'Performed exploratory analysis of temporal trends to identify recurring anomalies and usage patterns.',
      'Designed interactive dashboards in Tableau and Plotly to communicate operational insights clearly.'
    ],
    tech: ['Python', 'Pandas', 'SQL', 'Tableau', 'Plotly'],
    github: 'https://github.com/gill-amitoj/OperationalAnalyticsPlatform',
    isPrivate: false
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="py-32 border-t border-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-muted">02</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Featured Projects</h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="border border-muted/50 p-8 hover:border-light/50 transition-colors duration-300 group"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-light transition-colors">
        {project.title}
      </h3>

      {project.period && (
        <p className="font-mono text-xs text-accent mb-4">{project.period}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="font-mono text-xs border border-muted/50 px-3 py-1 text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-3 mb-8">
        {project.description.map((point, i) => (
          <li key={i} className="text-muted text-sm flex gap-3">
            <span className="text-accent mt-1">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-1">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-light transition-colors"
        >
          <GithubIcon />
          <span>View on GitHub</span>
        </a>
        {project.isPrivate && (
          <span className="font-mono text-xs text-muted/60 ml-6">School Project (Private)</span>
        )}
      </div>
    </motion.article>
  )
}

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}
