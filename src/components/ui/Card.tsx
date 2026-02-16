import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'feature' | 'dashboard' | 'stat' | 'glass'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = ({
  children,
  variant = 'default',
  hover = false,
  padding = 'md',
  className = '',
  ...props
}: CardProps) => {
  const baseStyles = 'rounded-2xl transition-all duration-300'

  const variants = {
    default: 'glass-panel',
    feature: 'glass-panel-hover group cursor-pointer',
    dashboard: 'glass-panel relative overflow-hidden',
    stat: 'glass-panel',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 md:p-10',
  }

  const hoverStyles = hover
    ? 'hover:bg-white/8 hover:border-white/20 hover:shadow-card-hover hover:-translate-y-1'
    : ''

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${paddings[padding]}
        ${hoverStyles}
        ${className}
      `}
      {...props}
    >
      {/* Dashboard variant top bar */}
      {variant === 'dashboard' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-neon-purple to-accent-500" />
      )}
      {children}
    </div>
  )
}

export default Card
