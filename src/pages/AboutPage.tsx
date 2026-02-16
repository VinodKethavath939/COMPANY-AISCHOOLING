import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  Rocket
} from 'lucide-react'
import Section, { SectionHeader } from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

// Company values
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push boundaries with AI to create solutions that transform education.',
  },
  {
    icon: Heart,
    title: 'Student-Centric',
    description: 'Every feature we build ultimately serves the goal of better student outcomes.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we deliver.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when our schools succeed. We\'re in this together.',
  },
]

// Milestones
const milestones = [
  { year: '2023', event: 'Founded with a vision to transform school management' },
  { year: '2024', event: 'Launched AI-powered analytics module' },
  { year: '2025', event: 'Reached 500+ schools across India' },
  { year: '2026', event: 'Expanding to Southeast Asia markets' },
]

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">About Us</Badge>
            <h1 className="text-display gradient-text-hero mb-6">
              Building the Future of Education Management
            </h1>
            <p className="text-xl text-white/60">
              We're on a mission to transform how schools operate, making education 
              administration intelligent, efficient, and delightful.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <Section background="dots">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="text-headline text-white mb-6">Meet Our Founder</h2>
            
            <Card variant="dashboard" padding="lg">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-500 to-neon-purple flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-white">V</span>
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">Vinod</h3>
                  <p className="text-accent-400 font-medium mb-4">Founder & CEO</p>
                  
                  <p className="text-white/60 text-sm mb-6">
                    Passionate about leveraging AI to solve real problems in education. 
                    Building AI Schooling to be the platform every modern school deserves.
                  </p>
                  
                  {/* Contact */}
                  <div className="space-y-2">
                    <a 
                      href="tel:+919392510492" 
                      className="flex items-center gap-3 text-white/70 hover:text-accent-400 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91 9392510492</span>
                    </a>
                    <a 
                      href="mailto:kethavathvinod7710@gmail.com" 
                      className="flex items-center gap-3 text-white/70 hover:text-accent-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>kethavathvinod7710@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Vision */}
          <div>
            <h3 className="text-title text-white mb-4">Our Vision</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Every school deserves access to world-class technology. We're building 
              AI Schooling to democratize intelligent school management — making it 
              accessible, affordable, and transformative for institutions of all sizes.
            </p>
            
            <h3 className="text-title text-white mb-4">Our Mission</h3>
            <p className="text-white/60 leading-relaxed">
              To empower educational institutions with AI-powered tools that eliminate 
              administrative burden, surface actionable insights, and ultimately create 
              more time for what matters most — education.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader
          badge="Our Values"
          title="What We Stand For"
          subtitle="The principles that guide everything we do."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} variant="glass" padding="lg" hover>
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-white/60">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Journey/Timeline */}
      <Section background="mesh">
        <SectionHeader
          badge="Our Journey"
          title="Milestones"
          subtitle="Key moments in our growth story."
        />
        
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-neon-purple to-accent-500" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-accent-400 font-bold">{milestone.year}</span>
                  </div>
                  <div className="glass-panel p-4 flex-1">
                    <p className="text-white">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Schools Trust Us' },
            { value: '2M+', label: 'Students Managed' },
            { value: '15+', label: 'States Covered' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <Card key={stat.label} variant="glass" padding="lg">
              <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-white/60">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <div className="glass-panel p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-transparent to-neon-purple/10" />
          <div className="relative z-10">
            <h2 className="text-headline text-white mb-4">Let's Build the Future Together</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Whether you're a school looking to transform, an investor seeking opportunity, 
              or a talent wanting to join us — we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button variant="primary" size="lg" glow>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </Link>
              <a href="tel:+919392510492">
                <Button variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us: 9392510492
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default AboutPage
