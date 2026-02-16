import { Link } from 'react-router-dom'
import { 
  Brain, 
  Users, 
  Wallet, 
  BookOpen, 
  BarChart3, 
  MessageSquare,
  Shield,
  Zap,
  Clock,
  Globe,
  Lock,
  Cpu,
  Database,
  RefreshCw,
  Bell,
  FileText,
  Calendar,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react'
import Section, { SectionHeader } from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

// Feature categories
const featureCategories = [
  {
    id: 'ai-intelligence',
    title: 'AI Intelligence',
    description: 'The brain that powers everything',
    icon: Brain,
    color: 'cyan',
    features: [
      {
        title: 'Predictive Analytics',
        description: 'AI identifies at-risk students before they fall behind, enabling proactive intervention.',
        icon: TrendingUp,
      },
      {
        title: 'Smart Scheduling',
        description: 'Automatically optimize class schedules, room assignments, and teacher allocation.',
        icon: Calendar,
      },
      {
        title: 'Automated Insights',
        description: 'Surface actionable insights from your data without manual analysis.',
        icon: Cpu,
      },
      {
        title: 'Natural Language Queries',
        description: 'Ask questions in plain English and get instant answers from your school data.',
        icon: MessageSquare,
      },
    ],
  },
  {
    id: 'administration',
    title: 'Administration Hub',
    description: 'Complete operational control',
    icon: Users,
    color: 'purple',
    features: [
      {
        title: 'Admissions Management',
        description: 'End-to-end application processing, from inquiry to enrollment.',
        icon: FileText,
      },
      {
        title: 'Attendance Tracking',
        description: 'Biometric, RFID, and manual attendance with automated parent notifications.',
        icon: Clock,
      },
      {
        title: 'HR & Staff Management',
        description: 'Employee records, payroll, leave management, and performance tracking.',
        icon: Users,
      },
      {
        title: 'Transport Management',
        description: 'Route planning, GPS tracking, and real-time parent updates.',
        icon: Globe,
      },
    ],
  },
  {
    id: 'academics',
    title: 'Academic Suite',
    description: 'Drive learning outcomes',
    icon: BookOpen,
    color: 'cyan',
    features: [
      {
        title: 'Curriculum Planning',
        description: 'Design and manage curriculum aligned with educational standards.',
        icon: BookOpen,
      },
      {
        title: 'Digital Gradebook',
        description: 'Easy grade entry, weighted calculations, and progress tracking.',
        icon: BarChart3,
      },
      {
        title: 'Assignment Management',
        description: 'Create, distribute, and grade assignments digitally.',
        icon: FileText,
      },
      {
        title: 'Exam Management',
        description: 'Schedule exams, generate hall tickets, and publish results.',
        icon: Calendar,
      },
    ],
  },
  {
    id: 'finance',
    title: 'Finance Module',
    description: 'Complete financial control',
    icon: Wallet,
    color: 'green',
    features: [
      {
        title: 'Fee Management',
        description: 'Flexible fee structures, online payments, and automated reminders.',
        icon: CreditCard,
      },
      {
        title: 'Expense Tracking',
        description: 'Track all expenses with categorization and approval workflows.',
        icon: Wallet,
      },
      {
        title: 'Budget Planning',
        description: 'Create and monitor budgets with AI recommendations.',
        icon: TrendingUp,
      },
      {
        title: 'Financial Reports',
        description: 'Generate detailed financial reports and statements instantly.',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication Hub',
    description: 'Connect everyone seamlessly',
    icon: MessageSquare,
    color: 'purple',
    features: [
      {
        title: 'Multi-channel Messaging',
        description: 'Send messages via app, SMS, email, and WhatsApp from one place.',
        icon: MessageSquare,
      },
      {
        title: 'Automated Notifications',
        description: 'Trigger automatic alerts for attendance, fees, events, and more.',
        icon: Bell,
      },
      {
        title: 'Parent Portal',
        description: 'Dedicated portal for parents to track progress and communicate.',
        icon: Users,
      },
      {
        title: 'Announcements',
        description: 'School-wide announcements with read receipts and targeting.',
        icon: Globe,
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    description: 'Data-driven decisions',
    icon: BarChart3,
    color: 'cyan',
    features: [
      {
        title: 'Real-time Dashboards',
        description: 'Beautiful, customizable dashboards for every role.',
        icon: BarChart3,
      },
      {
        title: 'Custom Reports',
        description: 'Build any report you need with drag-and-drop simplicity.',
        icon: FileText,
      },
      {
        title: 'Trend Analysis',
        description: 'Identify patterns across years of data automatically.',
        icon: TrendingUp,
      },
      {
        title: 'Export & Share',
        description: 'Export to Excel, PDF, or share live dashboards with stakeholders.',
        icon: RefreshCw,
      },
    ],
  },
]

// Platform capabilities
const platformCapabilities = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant, end-to-end encryption, and role-based access control.',
  },
  {
    icon: Globe,
    title: 'Cloud Native',
    description: 'Hosted on enterprise-grade cloud infrastructure with 99.9% uptime.',
  },
  {
    icon: RefreshCw,
    title: 'API First',
    description: 'Full REST API for integration with your existing tools and systems.',
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    description: 'GDPR and local data protection compliance built in.',
  },
  {
    icon: Database,
    title: 'Scalable',
    description: 'From 100 to 100,000 students — the platform grows with you.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times for a seamless user experience.',
  },
]

const FeaturesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 text-center">
          <Badge className="mb-4">Platform Features</Badge>
          <h1 className="text-display gradient-text-hero mb-6 max-w-3xl mx-auto">
            Every Feature Built for Modern Education
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            AI Schooling combines powerful modules into one unified platform, 
            all enhanced by artificial intelligence.
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, index) => (
        <Section 
          key={category.id} 
          id={category.id}
          background={index % 2 === 0 ? 'none' : 'dots'}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Category Info */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center text-accent-400">
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-headline text-white">{category.title}</h2>
                  <p className="text-white/60">{category.description}</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {category.features.map((feature) => (
                  <Card key={feature.title} variant="glass" padding="md" hover>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400 flex-shrink-0">
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                        <p className="text-xs text-white/60">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Visual Placeholder */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="glass-panel p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-neon-purple/5" />
                <category.icon className="w-32 h-32 text-accent-500/20" />
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Platform Capabilities */}
      <Section background="mesh">
        <SectionHeader
          badge="Platform"
          title="Built for Enterprise Education"
          subtitle="Security, scalability, and performance at its core."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformCapabilities.map((cap) => (
            <Card key={cap.title} variant="glass" padding="md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400">
                  <cap.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-white/60">{cap.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="glass-panel p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-transparent to-neon-purple/10" />
          <div className="relative z-10">
            <h2 className="text-headline text-white mb-4">See It All in Action</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Get a personalized demo and see how AI Schooling can transform your institution.
            </p>
            <Link to="/demo">
              <Button variant="primary" size="lg" glow>
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

export default FeaturesPage
