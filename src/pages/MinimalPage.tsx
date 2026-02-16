import { Link } from 'react-router-dom'
import { ArrowRight, Play, ChevronRight } from 'lucide-react'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'

// ========================================
// HYPER-MINIMAL MODERN SAAS VERSION
// ========================================
// Inspiration: Linear, Vercel, Raycast, Arc
// Philosophy: Less is more. Bold statement. Clear action.

const MinimalPage = () => {
  return (
    <div className="min-h-screen bg-primary-900 text-white">
      
      {/* Ultra-minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="font-semibold text-white">AI Schooling</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/features" className="text-sm text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/demo">
              <Button variant="secondary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* =====================================
          SECTION 1: HERO
          Massive headline, minimal text, clear CTA
          ===================================== */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        {/* Subtle background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
            Schools,
            <br />
            <span className="gradient-text">reimagined.</span>
          </h1>
          
          <p className="text-xl text-white/50 mb-12 max-w-lg mx-auto">
            The AI-powered operating system that runs your entire institution.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Link to="/demo">
              <Button variant="primary" size="lg">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button variant="ghost" size="lg">
              <Play className="w-4 h-4 mr-2" />
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2: ONE-LINER FEATURES
          Ultra-concise, grid layout
          ===================================== */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Everything in one place.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-12">
            {[
              { title: 'Admissions', desc: 'Streamlined enrollment.' },
              { title: 'Academics', desc: 'Grades that make sense.' },
              { title: 'Finance', desc: 'Fee collection on autopilot.' },
              { title: 'Analytics', desc: 'Insights, not spreadsheets.' },
              { title: 'Communication', desc: 'Parents in the loop.' },
              { title: 'AI Automation', desc: 'Less work, more impact.' },
            ].map((feature) => (
              <div key={feature.title} className="group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  {feature.title}
                  <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-white/40">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 3: SOCIAL PROOF (MINIMAL)
          Numbers only, no fluff
          ===================================== */}
      <section className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { value: '500+', label: 'Schools' },
              { value: '2M', label: 'Students' },
              { value: '40%', label: 'Time saved' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 4: THE PITCH (ONE BLOCK)
          Visual + text, clean and bold
          ===================================== */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Dashboard Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 p-1">
                <div className="w-full h-full rounded-xl bg-primary-800/50 p-6">
                  {/* Mini dashboard mockup */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent-400">94%</div>
                      <div className="text-xs text-white/40">Attendance</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-success">₹2.4M</div>
                      <div className="text-xs text-white/40">Collected</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-neon-purple">1,247</div>
                      <div className="text-xs text-white/40">Students</div>
                    </div>
                  </div>
                  <div className="h-24 bg-white/5 rounded-lg flex items-end p-4 gap-2">
                    {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-accent-500/50 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -inset-8 bg-accent-500/5 rounded-3xl blur-3xl -z-10" />
            </div>
            
            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Built for schools that want to lead.
              </h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                AI Schooling replaces your outdated systems with one intelligent platform. 
                See everything. Automate everything. Focus on what matters.
              </p>
              <Link to="/demo" className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors font-medium">
                Start your free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 5: FINAL CTA
          Clean, confident, minimal
          ===================================== */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to transform?
          </h2>
          <p className="text-xl text-white/50 mb-10">
            Join 500+ schools already using AI Schooling.
          </p>
          <Link to="/demo">
            <Button variant="primary" size="lg" glow>
              Get started free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-white/30 mt-6">
            No credit card required
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-white/40 text-sm">© 2026 AI Schooling</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <a href="mailto:kethavathvinod7710@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MinimalPage
