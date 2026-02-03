import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-accent text-sm md:text-base mb-6"
          >
            AI Engineer / Software Developer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8"
          >
            Amitoj<br />
            <span className="text-accent">Singh</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-accent mb-8"
          >
            AI Engineer | Software Developer | ML Systems
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12"
          >
            Building scalable ML systems and robust backend infrastructure. 
            Focused on production-grade AI solutions that deliver measurable impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="font-mono text-sm border-2 border-light px-6 py-3 hover:bg-light hover:text-dark transition-all duration-200"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="font-mono text-sm border-2 border-muted text-muted px-6 py-3 hover:border-light hover:text-light transition-all duration-200"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-64 h-64 border border-light"
        />
      </div>
    </section>
  )
}
