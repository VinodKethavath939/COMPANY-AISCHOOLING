import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  LineChart, 
  Shield, 
  Zap,
  Users,
  BookOpen,
  BarChart3,
  MessageSquare,
  Clock,
  CheckCircle2,
  PlayCircle,
  Building2,
  GraduationCap,
  Wallet
} from 'lucide-react'
import Button from '../components/ui/Button'
import Section, { SectionHeader } from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import FeatureCard, { StatCard } from '../components/ui/FeatureCard'

// Rotating Headlines
const HEADLINES = [
  'Run Your Entire School From One Smart Platform',
  'Transform School Operations With Intelligent Automation',
  'Less Paperwork. More Control. Better Results.',
  'The Future of School Management Starts Here',
  'One System. Total Visibility. Complete Efficiency.',
  'Upgrade Your School to a Smarter Standard'
]

// Hero Section
const HeroSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % HEADLINES.length)
        setIsAnimating(false)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 mesh-bg" />
    <div className="absolute inset-0 grid-pattern opacity-30" />
    
    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-[100px] animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-[120px] animate-float animation-delay-500" />
    
    <div className="container-custom relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <Badge variant="glow" className="mb-6">
          <Sparkles className="w-3 h-3 mr-1" />
          AI-Powered Education Platform
        </Badge>
        
        {/* Main Headline - Rotating */}
        <div className="h-[180px] sm:h-[150px] md:h-[120px] flex items-center justify-center mb-6 overflow-hidden">
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            {HEADLINES[currentHeadline]}
          </h1>
        </div>
        
        {/* Headline indicators */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {HEADLINES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeadline(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentHeadline 
                  ? 'bg-accent-400 w-6' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        
        {/* Subheadline */}
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Unify administration, academics, finance, and analytics into one AI-driven 
          ecosystem. Transform how your school operates, forever.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
          <Link to="/demo">
            <Button variant="primary" size="lg" glow>
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            <PlayCircle className="w-5 h-5 mr-2" />
            Watch Overview
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 pt-10 border-t border-white/5 animate-fade-in animation-delay-500">
          <p className="text-white/40 text-sm mb-6">Trusted by forward-thinking institutions</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {/* Placeholder for school logos */}
            <div className="h-8 w-24 bg-white/10 rounded" />
            <div className="h-8 w-32 bg-white/10 rounded" />
            <div className="h-8 w-28 bg-white/10 rounded" />
            <div className="h-8 w-24 bg-white/10 rounded" />
            <div className="h-8 w-32 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
      <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
        <div className="w-1 h-3 bg-accent-400 rounded-full animate-pulse" />
      </div>
    </div>
  </section>
  )
}

// Stats Section
const StatsSection = () => (
  <Section size="sm" className="border-y border-white/5 bg-white/[0.02]">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatCard value="500+" label="Schools Transformed" trend={{ value: '23% this year', positive: true }} />
      <StatCard value="2M+" label="Students Managed" />
      <StatCard value="40%" label="Time Saved on Admin" />
      <StatCard value="99.9%" label="Platform Uptime" />
    </div>
  </Section>
)

// Features Section
const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Predictive analytics identify at-risk students, optimize scheduling, and surface actionable insights automatically.',
    gradient: 'cyan' as const,
  },
  {
    icon: Users,
    title: 'Unified Administration',
    description: 'Admissions, enrollment, attendance, and HR in one intelligent hub. No more switching between systems.',
    gradient: 'purple' as const,
  },
  {
    icon: Wallet,
    title: 'Smart Finance Module',
    description: 'Automated fee collection, expense tracking, budgeting, and financial forecasting with AI recommendations.',
    gradient: 'green' as const,
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Curriculum planning, gradebook, assignments, and learning analytics to drive student outcomes.',
    gradient: 'cyan' as const,
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboards',
    description: 'Beautiful, actionable dashboards for principals, teachers, parents, and administrators.',
    gradient: 'purple' as const,
  },
  {
    icon: MessageSquare,
    title: 'Smart Communication',
    description: 'AI-assisted messaging, automated notifications, and parent engagement tools built in.',
    gradient: 'pink' as const,
  },
]

const FeaturesSection = () => (
  <Section id="features" background="mesh">
    <SectionHeader
      badge="Capabilities"
      title="Everything Your School Needs, Intelligently Connected"
      subtitle="Stop juggling disconnected tools. AI Schooling brings every function together with artificial intelligence at the core."
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  </Section>
)

// Dashboard Preview Section
const DashboardSection = () => (
  <Section className="relative overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div>
        <Badge className="mb-4">Command Center</Badge>
        <h2 className="text-headline text-white mb-4">
          Your School's Intelligence Hub
        </h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          Experience a next-generation dashboard that thinks ahead. AI Schooling surfaces 
          what matters most, predicts issues before they arise, and gives you complete 
          visibility across every aspect of your institution.
        </p>
        
        <div className="space-y-4">
          {[
            { icon: Zap, text: 'Real-time enrollment and attendance tracking' },
            { icon: Shield, text: 'Automated compliance monitoring' },
            { icon: LineChart, text: 'Predictive performance analytics' },
            { icon: Clock, text: 'Intelligent scheduling optimization' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-accent-400" />
              </div>
              <span className="text-white/80">{text}</span>
            </div>
          ))}
        </div>
        
        <Link to="/features" className="inline-flex items-center gap-2 mt-8 text-accent-400 hover:text-accent-300 transition-colors">
          Explore all features
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      {/* Dashboard Mockup */}
      <div className="relative">
        <div className="glass-panel p-2 rounded-2xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-primary-800/50 rounded-t-xl p-4 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <div className="h-6 w-48 bg-white/5 rounded" />
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="bg-primary-800/30 p-6 rounded-b-xl space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-panel p-4">
                <p className="text-2xl font-bold text-accent-400">1,247</p>
                <p className="text-xs text-white/50">Students</p>
              </div>
              <div className="glass-panel p-4">
                <p className="text-2xl font-bold text-success">94.2%</p>
                <p className="text-xs text-white/50">Attendance</p>
              </div>
              <div className="glass-panel p-4">
                <p className="text-2xl font-bold text-neon-purple">₹2.4M</p>
                <p className="text-xs text-white/50">Collected</p>
              </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="glass-panel p-4 h-32 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div 
                  key={i}
                  className="flex-1 bg-gradient-to-t from-accent-500/50 to-accent-500/20 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            
            {/* Alerts */}
            <div className="glass-panel p-4">
              <p className="text-xs text-white/50 mb-2">AI Insights</p>
              <div className="flex items-center gap-2 text-sm">
                <Brain className="w-4 h-4 text-accent-400" />
                <span className="text-white/80">3 students showing attendance patterns requiring attention</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-accent-500/10 rounded-3xl blur-3xl -z-10" />
      </div>
    </div>
  </Section>
)

// Benefits Section
const benefits = [
  {
    title: 'For Administrators',
    icon: Building2,
    items: [
      'Reduce administrative workload by 40%',
      'Complete visibility across all operations',
      'Automated compliance and reporting',
      'Data-driven decision making',
    ],
  },
  {
    title: 'For Teachers',
    icon: GraduationCap,
    items: [
      'Spend more time teaching, less on paperwork',
      'AI-powered student insights',
      'Streamlined gradebook and attendance',
      'Easy parent communication',
    ],
  },
  {
    title: 'For Parents',
    icon: Users,
    items: [
      'Real-time updates on child\'s progress',
      'Easy fee payments online',
      'Direct communication with teachers',
      'Mobile app for on-the-go access',
    ],
  },
]

const BenefitsSection = () => (
  <Section background="dots">
    <SectionHeader
      badge="Benefits"
      title="Designed for Everyone in Your School Ecosystem"
      subtitle="AI Schooling creates value for every stakeholder — administrators, teachers, parents, and students."
    />
    <div className="grid md:grid-cols-3 gap-8">
      {benefits.map(({ title, icon: Icon, items }) => (
        <Card key={title} variant="glass" padding="lg" hover>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center text-accent-400 mb-6">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
)

// CTA Section
const CTASection = () => (
  <Section className="relative">
    <div className="glass-panel-hover p-12 md:p-16 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-neon-purple/10 to-accent-500/10" />
      
      <div className="relative z-10">
        <Badge className="mb-4">Get Started</Badge>
        <h2 className="text-headline text-white mb-4">
          Ready to Transform Your School?
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Join hundreds of forward-thinking institutions already using AI Schooling 
          to revolutionize their operations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/demo">
            <Button variant="primary" size="lg" glow>
              <Sparkles className="w-5 h-5 mr-2" />
              Schedule Free Demo
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            Contact Sales
          </Button>
        </div>
        <p className="text-xs text-white/40 mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  </Section>
)

// Main HomePage Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DashboardSection />
      <BenefitsSection />
      <CTASection />
    </>
  )
}

export default HomePage
