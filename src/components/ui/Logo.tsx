interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }

  return (
    <div className={`${sizes[size]} relative ${className}`}>
      {/* Logo SVG - AI Brain Network representing intelligent education */}
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer glow */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          className="fill-primary-800/50"
          stroke="url(#logoGradient)" 
          strokeWidth="2"
        />
        
        {/* Central brain/AI node */}
        <circle 
          cx="24" 
          cy="24" 
          r="8" 
          fill="url(#logoGradient)"
          filter="url(#logoGlow)"
        />
        
        {/* Connection nodes */}
        <circle cx="24" cy="10" r="4" fill="#06b6d4" />
        <circle cx="38" cy="24" r="4" fill="#8b5cf6" />
        <circle cx="24" cy="38" r="4" fill="#06b6d4" />
        <circle cx="10" cy="24" r="4" fill="#8b5cf6" />
        
        {/* Connection lines */}
        <line x1="24" y1="16" x2="24" y2="14" stroke="#06b6d4" strokeWidth="2" />
        <line x1="32" y1="24" x2="34" y2="24" stroke="#8b5cf6" strokeWidth="2" />
        <line x1="24" y1="32" x2="24" y2="34" stroke="#06b6d4" strokeWidth="2" />
        <line x1="16" y1="24" x2="14" y2="24" stroke="#8b5cf6" strokeWidth="2" />
        
        {/* Inner "A" for AI */}
        <path 
          d="M21 28L24 20L27 28M22 26H26" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Logo
