import { ReactNode, HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  container?: 'default' | 'narrow' | 'wide' | 'full'
  background?: 'none' | 'mesh' | 'grid' | 'dots'
  id?: string
}

const Section = ({
  children,
  size = 'md',
  container = 'default',
  background = 'none',
  className = '',
  id,
  ...props
}: SectionProps) => {
  const sizes = {
    sm: 'py-12 md:py-16 lg:py-20',
    md: 'py-20 md:py-28 lg:py-32',
    lg: 'py-24 md:py-32 lg:py-40',
  }

  const containers = {
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  }

  const backgrounds = {
    none: '',
    mesh: 'mesh-bg',
    grid: 'grid-pattern',
    dots: 'dot-pattern',
  }

  return (
    <section
      id={id}
      className={`relative ${sizes[size]} ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className={containers[container]}>
        {children}
      </div>
    </section>
  )
}

export default Section

// Section Header Component
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  titleClassName?: string
}

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  titleClassName = '',
}: SectionHeaderProps) => {
  const alignStyles = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-16 ${alignStyles}`}>
      {badge && (
        <span className="badge-primary mb-4 inline-block">
          {badge}
        </span>
      )}
      <h2 className={`text-display text-white mb-4 text-balance ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-white/60 text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}
