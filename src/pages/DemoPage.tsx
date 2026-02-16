import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Star,
  ChevronDown,
  Play,
  Calendar,
  Zap,
  Award,
  AlertCircle,
  X
} from 'lucide-react'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import Input, { Textarea } from '../components/ui/Input'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

// ========================================
// HIGH-CONVERSION DEMO LANDING PAGE
// ========================================
// Strategy: Pain → Amplification → Solution → Proof → CTA
// Psychology: Urgency, Social Proof, Loss Aversion, Authority

// Social proof data
const testimonials = [
  {
    quote: "AI Schooling cut our administrative workload by 50%. Our staff can finally focus on what matters — education.",
    author: "Dr. Rajesh Sharma",
    role: "Principal, Delhi Public School",
    image: null,
    rating: 5,
  },
  {
    quote: "The AI insights helped us identify struggling students weeks before report cards. Game-changer for intervention.",
    author: "Priya Menon",
    role: "Academic Director, Chennai International",
    image: null,
    rating: 5,
  },
  {
    quote: "Fee collection rate went from 78% to 96% in just 3 months. The automated reminders are brilliant.",
    author: "Vikram Singh",
    role: "Administrator, Sunrise Academy",
    image: null,
    rating: 5,
  },
]

const results = [
  { metric: '40%', label: 'Reduction in Admin Time', icon: Clock },
  { metric: '96%', label: 'Fee Collection Rate', icon: TrendingUp },
  { metric: '3x', label: 'Faster Report Generation', icon: Zap },
  { metric: '15hrs', label: 'Saved Weekly Per Staff', icon: Users },
]

const painPoints = [
  'Spending hours on manual attendance and data entry?',
  'Chasing parents for unpaid fees month after month?',
  'Struggling with disconnected systems that don\'t talk to each other?',
  'Missing early warning signs for at-risk students?',
  'Generating reports that take days instead of minutes?',
]

const benefits = [
  { title: 'See Everything', desc: 'Unified dashboard for complete school visibility' },
  { title: 'Automate Tasks', desc: 'Let AI handle repetitive administrative work' },
  { title: 'Predict Outcomes', desc: 'AI identifies issues before they become problems' },
  { title: 'Collect Faster', desc: 'Automated fee reminders and online payments' },
  { title: 'Communicate Better', desc: 'WhatsApp, SMS, email — all from one place' },
  { title: 'Grow Smarter', desc: 'Data-driven insights for strategic decisions' },
]

const faqs = [
  {
    q: 'How long does the demo take?',
    a: 'Our personalized demo takes about 30 minutes. We\'ll focus on the features most relevant to your institution\'s needs.',
  },
  {
    q: 'Is there any commitment required?',
    a: 'Absolutely none. The demo is free, and there\'s no obligation to purchase. We\'re confident the platform speaks for itself.',
  },
  {
    q: 'Can you migrate our existing data?',
    a: 'Yes! Our team handles complete data migration from your existing systems at no additional cost for Professional and Enterprise plans.',
  },
  {
    q: 'How quickly can we go live?',
    a: 'Most schools are up and running within 2-4 weeks, including training. We\'ve had urgent implementations done in under a week.',
  },
  {
    q: 'Is training included?',
    a: 'Yes, comprehensive training for your entire staff is included. We also provide ongoing support and training resources.',
  },
]

const DemoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    studentCount: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create message for WhatsApp
    const message = `🎓 *New Demo Request - AI Schooling*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🏫 *School:* ${formData.schoolName}
👨‍🎓 *Students:* ${formData.studentCount}
💬 *Message:* ${formData.message || 'No message'}

_Sent from AI Schooling Website_`

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919392510492?text=${encodedMessage}`
    
    // Also prepare email as backup
    const emailSubject = encodeURIComponent(`Demo Request from ${formData.name} - ${formData.schoolName}`)
    const emailBody = encodeURIComponent(`New Demo Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSchool: ${formData.schoolName}\nStudents: ${formData.studentCount}\nMessage: ${formData.message || 'No message'}`)
    const emailUrl = `mailto:kethavathvinod7710@gmail.com?subject=${emailSubject}&body=${emailBody}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      // Open WhatsApp with pre-filled message
      window.open(whatsappUrl, '_blank')
      
      // Show confirmation with email backup option
      const sendEmail = window.confirm('Demo request sent via WhatsApp! 🎉\n\nClick OK to also send via email as backup, or Cancel to skip.')
      if (sendEmail) {
        window.location.href = emailUrl
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="font-display font-bold text-lg text-white">AI Schooling</span>
          </Link>
          <a href="#demo-form">
            <Button variant="primary" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Book Demo Now
            </Button>
          </a>
        </div>
      </nav>

      {/* =====================================
          SECTION 1: HERO - EMOTIONAL HOOK
          ===================================== */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Badge */}
            <Badge variant="glow" className="mb-6">
              <Clock className="w-3 h-3 mr-1" />
              Limited Demo Slots Available This Week
            </Badge>
            
            {/* Emotional Headline */}
            <h1 className="text-display-lg gradient-text-hero mb-6">
              Stop Running Your School Like It's 1999
            </h1>
            
            {/* Pain Amplification */}
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Outdated systems are costing you <span className="text-error font-semibold">40+ hours per week</span> in 
              manual work, missed payments, and preventable problems. 
              <span className="text-accent-400"> There's a better way.</span>
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#demo-form">
                <Button variant="primary" size="lg" glow>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Your Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <span className="text-white/40 text-sm">Takes 30 seconds to book</span>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-400" />
                500+ schools trust us
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-warning" />
                30-minute personalized demo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2: PAIN AMPLIFICATION
          ===================================== */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="container-custom">
          <h2 className="text-title text-center text-white mb-10">
            Does any of this sound familiar?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 glass-panel p-4 hover:bg-white/5 transition-colors"
              >
                <AlertCircle className="w-5 h-5 text-error flex-shrink-0" />
                <span className="text-white/80">{pain}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-white/60">
            <span className="text-accent-400 font-semibold">You're not alone.</span> These are the exact 
            problems AI Schooling was built to solve.
          </p>
        </div>
      </section>

      {/* =====================================
          SECTION 3: RESULTS & PROOF
          ===================================== */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Real Results</Badge>
            <h2 className="text-headline text-white mb-4">
              What Happens After You Switch
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              These aren't projections. These are real results from schools like yours.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {results.map((result) => (
              <Card key={result.label} variant="glass" padding="lg" className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mx-auto mb-4">
                  <result.icon className="w-6 h-6" />
                </div>
                <p className="text-4xl font-bold gradient-text mb-2">{result.metric}</p>
                <p className="text-sm text-white/60">{result.label}</p>
              </Card>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card key={index} variant="glass" padding="lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 4: BENEFIT TRANSFORMATION
          ===================================== */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">The Transformation</Badge>
            <h2 className="text-headline text-white mb-4">
              Finally, a System That Actually Works
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{b.title}</h3>
                  <p className="text-sm text-white/60">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 5: DEMO FORM (CONVERSION POINT)
          ===================================== */}
      <section id="demo-form" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Form */}
              <Card variant="dashboard" padding="lg">
                <div className="text-center mb-8">
                  <h2 className="text-title text-white mb-2">Book Your Free Demo</h2>
                  <p className="text-sm text-white/60">
                    30-minute personalized walkthrough. No commitment required.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name *"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      label="Work Email *"
                      type="email"
                      placeholder="you@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number *"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                    <Input
                      label="School Name *"
                      placeholder="Your school or institution"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                      required
                    />
                  </div>
                  <Input
                    label="Number of Students"
                    placeholder="Approximate student count"
                    value={formData.studentCount}
                    onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                  />
                  <Textarea
                    label="What are your biggest challenges?"
                    placeholder="Tell us about your current pain points..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth 
                    glow
                    loading={isSubmitting}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Schedule My Free Demo
                  </Button>
                  
                  <p className="text-xs text-center text-white/40">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              </Card>
              
              {/* Reassurance Content */}
              <div>
                <h3 className="text-title text-white mb-6">What to Expect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Quick Discovery Call</h4>
                      <p className="text-sm text-white/60">We'll understand your specific needs and challenges in 5 minutes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Personalized Demo</h4>
                      <p className="text-sm text-white/60">See exactly how AI Schooling solves YOUR problems, not generic features.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Custom Proposal</h4>
                      <p className="text-sm text-white/60">Get a tailored recommendation with transparent pricing.</p>
                    </div>
                  </div>
                </div>
                
                {/* Urgency */}
                <div className="mt-8 glass-panel p-4 border-l-4 border-warning">
                  <p className="text-sm text-white/80">
                    <span className="text-warning font-semibold">Limited availability:</span> Our demo calendar 
                    fills up fast. Book now to secure your preferred time slot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 6: FAQ
          ===================================== */}
      <section className="py-20 border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Questions?</Badge>
            <h2 className="text-headline text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-panel overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-white/60">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 7: FINAL CTA
          ===================================== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10">
          <div className="glass-panel p-12 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-headline text-white mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Every day you wait is another day of wasted time and missed opportunities. 
              Take the first step now.
            </p>
            <a href="#demo-form">
              <Button variant="primary" size="lg" glow>
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Free Demo Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <p className="text-xs text-white/40 mt-4">
              Join 500+ schools already transforming with AI Schooling
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-white/60 text-sm">© 2026 AI Schooling. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DemoPage
