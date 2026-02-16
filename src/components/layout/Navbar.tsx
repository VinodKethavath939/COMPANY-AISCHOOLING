import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const navLinks = [
  { name: 'Features', href: '/features' },
  { 
    name: 'Solutions', 
    href: '#',
    dropdown: [
      { name: 'For Schools', href: '/solutions/schools' },
      { name: 'For Districts', href: '/solutions/districts' },
      { name: 'For Universities', href: '/solutions/universities' },
    ]
  },
  { name: 'About', href: '/about' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-primary-900/80 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
        }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Logo />
            <span className="font-display font-bold text-xl text-white group-hover:text-accent-400 transition-colors">
              AI Schooling
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 nav-link ${
                    location.pathname === link.href ? 'nav-link-active' : ''
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="glass-panel py-2 min-w-[200px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white 
                                   hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Link to="/demo">
              <Button variant="primary" size="sm" glow>
                <Sparkles className="w-4 h-4 mr-2" />
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pt-6 pb-4 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="nav-link py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="secondary" className="w-full">
                  Sign In
                </Button>
                <Link to="/demo">
                  <Button variant="primary" className="w-full" glow>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
