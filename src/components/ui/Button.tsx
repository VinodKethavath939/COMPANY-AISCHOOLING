import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 focus:outline-none focus:ring-2 
    focus:ring-accent-500/50 focus:ring-offset-2 focus:ring-offset-primary-900
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-accent-500 to-accent-600 text-white
      hover:from-accent-400 hover:to-accent-500 hover:shadow-glow-cyan
      ${glow ? 'shadow-glow animate-pulse-glow' : ''}
    `,
    secondary: `
      bg-white/5 border border-white/20 text-white
      hover:bg-white/10 hover:border-white/30
    `,
    ghost: `
      text-white/80 hover:bg-white/5 hover:text-white
    `,
    outline: `
      border-2 border-accent-500 text-accent-400
      hover:bg-accent-500/10 hover:text-accent-300
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
