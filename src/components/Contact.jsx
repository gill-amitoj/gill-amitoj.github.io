import { motion } from 'framer-motion'

const contactLinks = [
  {
    name: 'Email',
    value: 'hello@amitojsingh.com',
    href: 'mailto:hello@amitojsingh.com'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/amitojsingh',
    href: 'https://linkedin.com/in/amitojsingh'
  },
  {
    name: 'GitHub',
    value: 'github.com/amitojsingh',
    href: 'https://github.com/amitojsingh'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-muted">04</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium leading-relaxed mb-8"
            >
              Interested in working together or have a project in mind?
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted text-lg mb-12"
            >
              I'm always open to discussing new opportunities, innovative projects, 
              and ways to bring your ideas to life.
            </motion.p>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hello@amitojgill.com"
              className="inline-block font-mono text-base border-2 border-light px-8 py-4 hover:bg-light hover:text-dark transition-all duration-200"
            >
              Send a Message
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <span className="font-mono text-sm text-muted block mb-1">
                  {link.name}
                </span>
                <span className="text-xl md:text-2xl font-medium text-light group-hover:text-accent transition-colors duration-200 flex items-center gap-3">
                  {link.value}
                  <ArrowIcon />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
