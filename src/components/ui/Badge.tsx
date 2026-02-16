import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'info' | 'glow'
  className?: string
}

const Badge = ({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) => {
  const variants = {
    primary: 'bg-accent-500/20 text-accent-400 border-accent-500/30',
    success: 'bg-success/20 text-success border-success/30',
    warning: 'bg-warning/20 text-warning border-warning/30',
    info: 'bg-info/20 text-info border-info/30',
    glow: 'bg-accent-500/20 text-accent-400 border-accent-500/30 animate-pulse-glow',
  }

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        border ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}

export default Badge
