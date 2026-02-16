import { Link } from 'react-router-dom'
import { CheckCircle2, X, Sparkles, ArrowRight, HelpCircle } from 'lucide-react'
import Section, { SectionHeader } from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

// Pricing tiers
const pricingTiers = [
  {
    name: 'Starter',
    description: 'For small schools getting started',
    price: '₹15,000',
    period: '/month',
    highlight: false,
    features: [
      { name: 'Up to 500 students', included: true },
      { name: 'Core administration', included: true },
      { name: 'Fee management', included: true },
      { name: 'Basic attendance', included: true },
      { name: 'Parent portal', included: true },
      { name: 'Email support', included: true },
      { name: 'AI insights', included: false },
      { name: 'Custom reports', included: false },
      { name: 'API access', included: false },
      { name: 'White labeling', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'For growing institutions',
    price: '₹35,000',
    period: '/month',
    highlight: true,
    badge: 'Most Popular',
    features: [
      { name: 'Up to 2,000 students', included: true },
      { name: 'Everything in Starter', included: true },
      { name: 'AI-powered insights', included: true },
      { name: 'Academic management', included: true },
      { name: 'Custom dashboards', included: true },
      { name: 'Priority support', included: true },
      { name: 'Mobile apps', included: true },
      { name: 'SMS & WhatsApp', included: true },
      { name: 'API access', included: false },
      { name: 'White labeling', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large institutions & groups',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      { name: 'Unlimited students', included: true },
      { name: 'Everything in Pro', included: true },
      { name: 'Full API access', included: true },
      { name: 'White labeling', included: true },
      { name: 'Multi-branch support', included: true },
      { name: 'Dedicated success manager', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'On-premise option', included: true },
      { name: 'SLA guarantee', included: true },
      { name: '24/7 phone support', included: true },
    ],
  },
]

// FAQs
const faqs = [
  {
    question: 'How does pricing work for multiple branches?',
    answer: 'Our Enterprise plan supports unlimited branches under one subscription. Each branch can have separate data while sharing a unified management view.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial on our Professional plan. No credit card required to start.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely. You can change your plan at any time. Upgrades are effective immediately, and downgrades take effect at the next billing cycle.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data remains available for export for 30 days after cancellation. We provide full data export in standard formats.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, we offer a 20% discount when you pay annually. Contact our sales team for custom pricing on multi-year agreements.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for Starter and Professional plans. Enterprise implementations may include onboarding services at additional cost.',
  },
]

const PricingPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 text-center">
          <Badge className="mb-4">Simple Pricing</Badge>
          <h1 className="text-display gradient-text-hero mb-6">
            Invest in Your School's Future
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Transparent pricing that scales with your institution. 
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section size="sm">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name}
              variant={tier.highlight ? 'dashboard' : 'glass'}
              padding="lg"
              className={`relative ${tier.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {tier.badge && (
                <Badge variant="glow" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {tier.badge}
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-white/60 mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                  <span className="text-white/40 ml-1">{tier.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li 
                    key={feature.name}
                    className={`flex items-center gap-3 text-sm ${
                      feature.included ? 'text-white/80' : 'text-white/30'
                    }`}
                  >
                    {feature.included ? (
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
              
              <Link to={tier.name === 'Enterprise' ? '/contact' : '/demo'}>
                <Button 
                  variant={tier.highlight ? 'primary' : 'secondary'} 
                  fullWidth
                  glow={tier.highlight}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trust Banner */}
      <Section size="sm" className="border-y border-white/5">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-sm text-white/60">Schools Trust Us</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-sm text-white/60">Uptime SLA</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-2xl font-bold text-white">24hr</p>
            <p className="text-sm text-white/60">Support Response</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-2xl font-bold text-white">Free</p>
            <p className="text-sm text-white/60">Data Migration</p>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="mesh">
        <SectionHeader
          badge="FAQs"
          title="Common Questions"
          subtitle="Everything you need to know about pricing and plans."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} variant="glass" padding="md">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-white/60">{faq.answer}</p>
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
            <h2 className="text-headline text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button variant="primary" size="lg" glow>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default PricingPage
