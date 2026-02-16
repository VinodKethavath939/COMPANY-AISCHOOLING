import { useState } from 'react'
import { Phone, X, MessageCircle, Mail } from 'lucide-react'

const PHONE_NUMBER = '+919392510492'
const WHATSAPP_NUMBER = '919392510492'
const EMAIL = 'kethavathvinod7710@gmail.com'

const FloatingCallButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 animate-slide-up">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in AI Schooling platform.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium whitespace-nowrap">WhatsApp</span>
          </a>
          
          {/* Direct Call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium whitespace-nowrap">Call Now</span>
          </a>
          
          {/* Email */}
          <a
            href={`mailto:${EMAIL}?subject=Inquiry about AI Schooling`}
            className="flex items-center gap-3 bg-neon-purple hover:bg-neon-purple/90 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium whitespace-nowrap">Email Us</span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center
          shadow-lg transition-all duration-300
          ${isOpen 
            ? 'bg-white/10 backdrop-blur-xl border border-white/20 rotate-180' 
            : 'bg-gradient-to-r from-accent-500 to-accent-600 shadow-glow-cyan animate-pulse-glow hover:scale-110'
          }
        `}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Phone className="w-6 h-6 text-white" />
        )}
      </button>
      
      {/* Pulse ring when closed */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-accent-500/50 animate-ping pointer-events-none" />
      )}
    </div>
  )
}

export default FloatingCallButton
