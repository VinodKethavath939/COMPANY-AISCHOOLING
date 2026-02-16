import { Link } from 'react-router-dom'
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'
import Logo from '../ui/Logo'

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Roadmap', href: '/roadmap' },
  ],
  solutions: [
    { name: 'For Schools', href: '/solutions/schools' },
    { name: 'For Districts', href: '/solutions/districts' },
    { name: 'For Universities', href: '/solutions/universities' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Help Center', href: '/help' },
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/webinars' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Founder: Vinod', href: '/about' },
    { name: 'Call: 9392510492', href: 'tel:+919392510492' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aischooling' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aischooling' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/aischooling' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@aischooling' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo />
              <span className="font-display font-bold text-xl text-white">
                AI Schooling
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              The Intelligent Operating System for Modern Schools. Transform your 
              institution with AI-powered education management.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/60">
              <a href="mailto:kethavathvinod7710@gmail.com" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" />
                kethavathvinod7710@gmail.com
              </a>
              <a href="tel:+919392510492" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" />
                +91 9392510492
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hyderabad, Telangana
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 
                           hover:text-accent-400 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} AI Schooling. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
