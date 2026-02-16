import { Phone, Mail, Clock } from 'lucide-react'

const PHONE_NUMBER = '+919392510492'

const TopBar = () => {
  return (
    <div className="bg-accent-600/90 backdrop-blur-sm text-white py-2 text-sm">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 hover:text-accent-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">9392510492</span>
            <span className="hidden sm:inline text-accent-200">- Call for Demo</span>
          </a>
          <span className="hidden md:flex items-center gap-2 text-accent-200">
            <Clock className="w-4 h-4" />
            Mon-Sat 9AM-7PM
          </span>
        </div>
        <a 
          href="mailto:kethavathvinod7710@gmail.com"
          className="hidden sm:flex items-center gap-2 hover:text-accent-200 transition-colors"
        >
          <Mail className="w-4 h-4" />
          kethavathvinod7710@gmail.com
        </a>
      </div>
    </div>
  )
}

export default TopBar
