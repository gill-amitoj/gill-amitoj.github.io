import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function SectionLoader() {
  return (
    <div className="h-96 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-light border-t-transparent animate-spin" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} Amitoj Singh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default App
