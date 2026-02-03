import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'

const projects = [
  {
    title: 'PulseMedica ML Tracking Pipeline',
    description: [
      'Engineered end-to-end ML pipeline for real-time patient vitals monitoring',
      'Reduced model inference latency by 40% through optimization',
      'Implemented automated retraining workflows with MLflow tracking'
    ],
    tech: ['Python', 'TensorFlow', 'MLflow', 'Docker', 'AWS'],
    github: 'https://github.com'
  },
  {
    title: 'Workflow Orchestration Engine',
    description: [
      'Built distributed task orchestration system handling 10K+ jobs/day',
      'Designed fault-tolerant architecture with Redis message queuing',
      'Achieved 99.9% uptime with automated failover mechanisms'
    ],
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    github: 'https://github.com'
  },
  {
    title: 'Content Analytics & Query Platform',
    description: [
      'Developed semantic search engine with vector embeddings',
      'Processed 1M+ documents with real-time indexing pipeline',
      'Built RESTful API serving 500+ concurrent users'
    ],
    tech: ['Python', 'LangChain', 'Pinecone', 'FastAPI', 'React'],
    github: 'https://github.com'
  },
  {
    title: 'Kickoff Android Event Lottery App',
    description: [
      'Architected Android app with MVVM pattern for 5K+ users',
      'Implemented real-time event lottery system with Firebase',
      'Reduced app load time by 60% through lazy loading'
    ],
    tech: ['Kotlin', 'Android', 'Firebase', 'Room', 'Coroutines'],
    github: 'https://github.com'
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
          <span className="font-mono text-sm text-muted">01</span>
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
      <h3 className="text-xl md:text-2xl font-bold mb-6 group-hover:text-light transition-colors">
        {project.title}
      </h3>

      <ul className="space-y-3 mb-8">
        {project.description.map((point, i) => (
          <li key={i} className="text-muted text-sm flex gap-3">
            <span className="text-accent mt-1">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="font-mono text-xs border border-muted/50 px-3 py-1 text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-light transition-colors"
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </a>
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
