const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-primary-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated logo */}
        <div className="w-16 h-16 relative">
          {/* Outer ring */}
          <div className="absolute inset-0 border-2 border-accent-500/30 rounded-full animate-ping" />
          {/* Inner ring */}
          <div className="absolute inset-2 border-2 border-accent-500/50 rounded-full animate-pulse" />
          {/* Center dot */}
          <div className="absolute inset-4 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full shadow-glow-cyan" />
        </div>
        
        {/* Loading text */}
        <p className="mt-6 text-white/60 text-sm font-medium tracking-wider animate-pulse">
          AI SCHOOLING
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen
