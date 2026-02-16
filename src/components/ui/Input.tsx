import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-white/80 mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 bg-white/5 border rounded-xl
            text-white placeholder-white/40 transition-all duration-300
            focus:bg-white/8 focus:ring-0 focus:outline-none
            ${leftIcon ? 'pl-12' : ''}
            ${rightIcon ? 'pr-12' : ''}
            ${error 
              ? 'border-error/50 focus:border-error' 
              : 'border-white/10 focus:border-accent-500/50'
            }
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-error">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-white/40">{helperText}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  className = '',
  id,
  rows = 4,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-white/80 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={`
          w-full px-4 py-3 bg-white/5 border rounded-xl
          text-white placeholder-white/40 transition-all duration-300
          focus:bg-white/8 focus:ring-0 focus:outline-none resize-none
          ${error 
            ? 'border-error/50 focus:border-error' 
            : 'border-white/10 focus:border-accent-500/50'
          }
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-error">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-white/40">{helperText}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'
