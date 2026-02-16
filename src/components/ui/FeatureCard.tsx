import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient?: 'cyan' | 'purple' | 'green' | 'pink'
  className?: string
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient = 'cyan',
  className = '',
}: FeatureCardProps) => {
  const gradients = {
    cyan: 'from-accent-500/20 to-accent-600/10 text-accent-400 group-hover:shadow-glow-cyan',
    purple: 'from-neon-purple/20 to-neon-purple/10 text-neon-purple group-hover:shadow-glow-purple',
    green: 'from-success/20 to-success/10 text-success',
    pink: 'from-neon-pink/20 to-neon-pink/10 text-neon-pink',
  }

  return (
    <div 
      className={`
        glass-panel-hover p-6 group cursor-pointer ${className}
      `}
    >
      <div 
        className={`
          w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4
          transition-all duration-300 group-hover:scale-110
          ${gradients[gradient]}
        `}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard

// Alternative: Icon Feature (inline icon with text)
interface IconFeatureProps {
  icon: LucideIcon
  title: string
  description?: string
}

export const IconFeature = ({
  icon: Icon,
  title,
  description,
}: IconFeatureProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        {description && (
          <p className="text-sm text-white/60 mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}

// StatCard Component
interface StatCardProps {
  value: string
  label: string
  trend?: {
    value: string
    positive: boolean
  }
  icon?: LucideIcon
}

export const StatCard = ({
  value,
  label,
  trend,
  icon: Icon,
}: StatCardProps) => {
  return (
    <div className="glass-panel p-5 relative">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-bold gradient-text">{value}</p>
          <p className="text-sm text-white/60 mt-1">{label}</p>
          {trend && (
            <p className={`text-xs font-medium mt-2 flex items-center gap-1 ${
              trend.positive ? 'text-success' : 'text-error'
            }`}>
              {trend.positive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  )
}
