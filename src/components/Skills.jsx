import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'

const skillCategories = [
  {
    name: 'ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Hugging Face', 'LangChain']
  },
  {
    name: 'Data',
    skills: ['Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'MongoDB', 'Pinecone']
  },
  {
    name: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Java', 'REST APIs', 'GraphQL']
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Terraform']
  },
  {
    name: 'Tools',
    skills: ['Git', 'Linux', 'VS Code', 'Jupyter', 'Postman', 'Figma']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const categoryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="py-32 border-t border-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-muted">03</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Skills</h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="space-y-6"
            >
              <h3 className="font-mono text-accent text-sm uppercase tracking-wider border-b border-muted/30 pb-3">
                {category.name}
              </h3>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="font-mono text-sm border border-muted/50 px-4 py-2 text-light hover:border-light transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
