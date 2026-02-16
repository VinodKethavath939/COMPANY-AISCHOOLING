import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Globe, 
  Target, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Brain,
  Layers,
  Rocket,
  DollarSign,
  Building2,
  MapPin,
  Award,
  ArrowUpRight
} from 'lucide-react'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import Section, { SectionHeader } from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

// ========================================
// PREMIUM INVESTOR-STYLE WEBSITE
// ========================================
// Tone: Visionary, Confident, Data-Driven
// Structure: Vision → Market → Problem → Solution → Traction → Team → Ask

// Market data
const marketStats = [
  { value: '$340B', label: 'Global EdTech Market by 2030', growth: '+16.5% CAGR' },
  { value: '$7.2B', label: 'India K-12 ERP Market', growth: '+22% CAGR' },
  { value: '1.5M', label: 'Schools in India Alone', note: '<10% digitized' },
  { value: '250M', label: 'K-12 Students in India', note: 'Largest in world' },
]

// Traction metrics
const tractionMetrics = [
  { metric: '500+', label: 'Schools Onboarded', icon: Building2 },
  { metric: '2M+', label: 'Students Managed', icon: Users },
  { metric: '$2.8M', label: 'ARR (Growing 3x YoY)', icon: DollarSign },
  { metric: '94%', label: 'Customer Retention', icon: TrendingUp },
]

// Competitive advantages
const advantages = [
  {
    title: 'AI-Native Architecture',
    description: 'Built from ground-up with AI at the core, not bolted on. Enables predictive analytics, automation, and intelligent insights competitors can\'t match.',
    icon: Brain,
  },
  {
    title: 'Full-Stack Platform',
    description: 'Single unified system replacing 5-7 point solutions. Reduces integration complexity and vendor management for customers.',
    icon: Layers,
  },
  {
    title: 'Land & Expand Model',
    description: 'Start with core modules, expand to full suite. 70% of customers upgrade within 12 months. Built-in revenue expansion.',
    icon: Rocket,
  },
  {
    title: 'Network Effects',
    description: 'AI models improve with more data. Parent communication creates viral loops. District deals bring entire ecosystems.',
    icon: Globe,
  },
]

// Revenue model
const revenueStreams = [
  { name: 'SaaS Subscriptions', percentage: 75, description: 'Recurring monthly/annual fees based on student count' },
  { name: 'Implementation Services', percentage: 15, description: 'Onboarding, migration, and customization' },
  { name: 'Transaction Fees', percentage: 10, description: 'Payment processing and SMS/communication fees' },
]

// Expansion roadmap
const roadmap = [
  { phase: 'Now', title: 'K-12 India', status: 'active', items: ['500+ schools', 'Core ERP + AI', 'Regional expansion'] },
  { phase: '2026', title: 'Higher Ed + B2G', status: 'planned', items: ['University modules', 'Government contracts', 'Southeast Asia entry'] },
  { phase: '2027', title: 'Global Scale', status: 'future', items: ['Middle East launch', 'Africa partnerships', 'Platform ecosystem'] },
]

// Team highlights (placeholder)
const team = [
  { name: 'Founder & CEO', background: 'Ex-Google, Stanford CS', focus: 'Product & Vision' },
  { name: 'CTO', background: 'Ex-Microsoft, IIT Delhi', focus: 'Engineering & AI' },
  { name: 'COO', background: 'Ex-Byju\'s, 15yr EdTech', focus: 'Operations & Growth' },
  { name: 'VP Sales', background: 'Ex-Salesforce, 10yr Enterprise', focus: 'Revenue & Partnerships' },
]

const InvestorPage = () => {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Premium Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="font-display font-bold text-lg text-white">AI Schooling</span>
            <Badge className="ml-2">For Investors</Badge>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-white/60 hover:text-white">
              Main Site
            </Link>
            <a href="mailto:investors@aischooling.com">
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================
          SECTION 1: VISION HERO
          ===================================== */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6">
              <Rocket className="w-3 h-3 mr-1" />
              Series A Investment Opportunity
            </Badge>
            
            <h1 className="text-display-lg text-white mb-6 leading-tight">
              Building the <span className="gradient-text">Operating System</span> for 
              the World's Schools
            </h1>
            
            <p className="text-xl text-white/70 mb-10 max-w-2xl">
              AI Schooling is the AI-native platform replacing fragmented school management 
              software with a unified, intelligent system. Capturing a $340B market.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#opportunity">
                <Button variant="primary" size="lg">
                  View Opportunity
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="mailto:investors@aischooling.com" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-2">
                Request Deck
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2: MARKET OPPORTUNITY
          ===================================== */}
      <section id="opportunity" className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container-custom">
          <SectionHeader
            badge="Market Size"
            title="Massive, Growing, Underserved"
            subtitle="Education is the world's largest industry. School management software is ripe for disruption."
            align="left"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat) => (
              <Card key={stat.label} variant="glass" padding="lg">
                <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-white/80 mb-2">{stat.label}</p>
                {stat.growth && (
                  <span className="text-xs text-success font-medium">{stat.growth}</span>
                )}
                {stat.note && (
                  <span className="text-xs text-accent-400">{stat.note}</span>
                )}
              </Card>
            ))}
          </div>
          
          <div className="mt-12 glass-panel p-8">
            <h3 className="text-title text-white mb-4">The Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-8 text-white/70">
              <div>
                <h4 className="text-white font-semibold mb-2">Fragmented Market</h4>
                <p className="text-sm">No dominant player. Top 10 vendors hold &lt;15% combined share. Legacy systems are failing modern needs.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Digital Transformation Wave</h4>
                <p className="text-sm">COVID accelerated school digitalization by 10 years. Demand for modern software has never been higher.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">AI Inflection Point</h4>
                <p className="text-sm">AI capabilities now mature enough for enterprise education. First-mover advantage window is NOW.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 3: THE PROBLEM
          ===================================== */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">The Problem</Badge>
              <h2 className="text-headline text-white mb-6">
                Schools Are Drowning in Disconnected Systems
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  The average school uses <span className="text-white font-semibold">7+ different software tools</span> for 
                  administration, finance, academics, and communication — none of which talk to each other.
                </p>
                <p>
                  This leads to <span className="text-error font-semibold">40+ hours per week wasted</span> on manual data 
                  entry, report generation, and reconciliation. Staff burnout is epidemic.
                </p>
                <p>
                  Critical data lives in silos. Schools can't get a unified view of operations, 
                  leading to <span className="text-warning font-semibold">reactive instead of proactive</span> management.
                </p>
              </div>
            </div>
            <div className="glass-panel p-8 relative">
              <h4 className="text-white font-semibold mb-6">Current State: Chaos</h4>
              <div className="grid grid-cols-3 gap-4">
                {['Attendance App', 'Fee Software', 'Gradebook', 'Parent App', 'HR System', 'Excel Sheets', 'Paper Files'].map((tool, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3 text-center text-xs text-white/60 border border-white/10">
                    {tool}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">With AI Schooling: Unity</h4>
                <div className="bg-gradient-to-br from-accent-500/20 to-neon-purple/10 rounded-lg p-6 text-center border border-accent-500/30">
                  <Brain className="w-12 h-12 text-accent-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">One AI-Powered Platform</p>
                  <p className="text-xs text-white/60 mt-1">All functions unified, all data connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 4: OUR SOLUTION
          ===================================== */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container-custom">
          <SectionHeader
            badge="Our Solution"
            title="AI Schooling: The Intelligent Operating System"
            subtitle="A unified platform that replaces fragmented tools with one AI-powered ecosystem."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {advantages.map((adv) => (
              <Card key={adv.title} variant="glass" padding="lg" hover>
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mb-4">
                  <adv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{adv.title}</h3>
                <p className="text-sm text-white/60">{adv.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="glass-panel p-8 text-center">
            <p className="text-white/70 text-lg">
              <span className="text-white font-semibold">End result:</span> Schools save 40%+ on admin time, 
              increase fee collection to 95%+, and make data-driven decisions — all from one platform.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 5: TRACTION & PROOF
          ===================================== */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            badge="Traction"
            title="Proven Product-Market Fit"
            subtitle="Strong early traction demonstrates clear demand and execution capability."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tractionMetrics.map((m) => (
              <Card key={m.label} variant="dashboard" padding="lg" className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mx-auto mb-4">
                  <m.icon className="w-6 h-6" />
                </div>
                <p className="text-4xl font-bold gradient-text mb-2">{m.metric}</p>
                <p className="text-sm text-white/60">{m.label}</p>
              </Card>
            ))}
          </div>
          
          {/* Growth chart placeholder */}
          <Card variant="glass" padding="lg">
            <h3 className="text-title text-white mb-6">Revenue Growth</h3>
            <div className="h-64 flex items-end justify-between gap-4 px-8">
              {[
                { year: '2023', value: 20, arr: '$0.3M' },
                { year: '2024', value: 45, arr: '$0.9M' },
                { year: '2025', value: 100, arr: '$2.8M' },
                { year: '2026 (proj)', value: 180, arr: '$8M+' },
              ].map((d) => (
                <div key={d.year} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-accent-500 to-accent-400 rounded-t-lg transition-all duration-500"
                    style={{ height: `${d.value * 0.6}%` }}
                  />
                  <p className="text-sm text-white font-semibold mt-4">{d.arr}</p>
                  <p className="text-xs text-white/50">{d.year}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* =====================================
          SECTION 6: BUSINESS MODEL
          ===================================== */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Revenue Model */}
            <div>
              <Badge className="mb-4">Business Model</Badge>
              <h2 className="text-headline text-white mb-6">Recurring Revenue Engine</h2>
              <div className="space-y-4">
                {revenueStreams.map((stream) => (
                  <div key={stream.name} className="glass-panel p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{stream.name}</span>
                      <span className="text-accent-400 font-bold">{stream.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-accent-500 to-accent-400 h-2 rounded-full"
                        style={{ width: `${stream.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-white/60">{stream.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 glass-panel p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-success">140%</p>
                    <p className="text-xs text-white/60">Net Revenue Retention</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent-400">12mo</p>
                    <p className="text-xs text-white/60">LTV:CAC Payback</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neon-purple">75%</p>
                    <p className="text-xs text-white/60">Gross Margin</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expansion Roadmap */}
            <div>
              <Badge className="mb-4">Growth Roadmap</Badge>
              <h2 className="text-headline text-white mb-6">Path to $100M ARR</h2>
              <div className="space-y-4">
                {roadmap.map((phase) => (
                  <Card 
                    key={phase.phase} 
                    variant={phase.status === 'active' ? 'dashboard' : 'glass'} 
                    padding="md"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        phase.status === 'active' 
                          ? 'bg-accent-500/20 text-accent-400' 
                          : 'bg-white/5 text-white/40'
                      }`}>
                        <span className="font-bold text-sm">{phase.phase}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{phase.title}</h4>
                        <ul className="mt-2 space-y-1">
                          {phase.items.map((item, i) => (
                            <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                              <CheckCircle2 className={`w-3 h-3 ${
                                phase.status === 'active' ? 'text-success' : 'text-white/30'
                              }`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 7: TEAM
          ===================================== */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            badge="Leadership"
            title="Built by Industry Veterans"
            subtitle="A team with deep EdTech expertise and proven track records at scale."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} variant="glass" padding="lg" className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500/20 to-neon-purple/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent-400/50" />
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-accent-400 mb-2">{member.background}</p>
                <p className="text-xs text-white/50">{member.focus}</p>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-white/60 mt-8">
            Backed by advisors from Google, Microsoft, Byju's, and Unacademy
          </p>
        </div>
      </section>

      {/* =====================================
          SECTION 8: THE ASK
          ===================================== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <div className="container-custom relative z-10">
          <div className="glass-panel p-12 md:p-16 text-center max-w-4xl mx-auto">
            <Badge className="mb-4">Investment Opportunity</Badge>
            <h2 className="text-headline text-white mb-6">
              Join Us in Transforming Education
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're raising our Series A to accelerate growth, expand AI capabilities, 
              and capture market leadership in the fastest-growing EdTech segment.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="glass-panel p-6">
                <p className="text-3xl font-bold gradient-text">$15M</p>
                <p className="text-sm text-white/60">Target Raise</p>
              </div>
              <div className="glass-panel p-6">
                <p className="text-3xl font-bold gradient-text">24mo</p>
                <p className="text-sm text-white/60">Runway Extension</p>
              </div>
              <div className="glass-panel p-6">
                <p className="text-3xl font-bold gradient-text">$100M</p>
                <p className="text-sm text-white/60">ARR Target by 2028</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:investors@aischooling.com">
                <Button variant="primary" size="lg" glow>
                  Request Investment Deck
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="mailto:ceo@aischooling.com">
                <Button variant="secondary" size="lg">
                  Schedule Founder Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-white/60 text-sm">© 2026 AI Schooling. Confidential.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="mailto:investors@aischooling.com" className="hover:text-white transition-colors">
              investors@aischooling.com
            </a>
            <Link to="/" className="hover:text-white transition-colors">
              Main Website
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default InvestorPage
