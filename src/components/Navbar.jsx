import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-muted/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Amitoj Singh" className="h-10 w-auto" />
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <a
                href={link.href}
                className="text-sm font-mono text-accent hover:text-light transition-colors duration-200"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:block text-sm font-mono border border-light px-4 py-2 hover:bg-light hover:text-dark transition-all duration-200"
        >
          Get in touch
        </a>

        <MobileMenu />
      </div>
    </motion.nav>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label
        htmlFor="menu-toggle"
        className="flex flex-col gap-1.5 cursor-pointer p-2"
      >
        <span className="w-6 h-0.5 bg-light peer-checked:rotate-45 peer-checked:translate-y-2 transition-transform" />
        <span className="w-6 h-0.5 bg-light peer-checked:opacity-0 transition-opacity" />
        <span className="w-6 h-0.5 bg-light peer-checked:-rotate-45 peer-checked:-translate-y-2 transition-transform" />
      </label>
      
      <div className="fixed inset-0 top-[65px] bg-dark z-40 hidden peer-checked:flex flex-col items-center justify-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-mono text-light"
            onClick={() => document.getElementById('menu-toggle').checked = false}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}
