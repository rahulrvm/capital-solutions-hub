import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(to right, hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }} />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-sans text-cream">Boutique Financial Advisory</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Strategic Capital
              <span className="block text-accent">Solutions</span>
              <span className="block">for Growth</span>
            </h1>

            <p className="font-sans text-lg text-cream/80 max-w-xl mb-8 leading-relaxed">
              Customised liquidity, balance-sheet optimisation, and structured capital solutions 
              for corporates, SMEs, and infrastructure developers across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold rounded-md shadow-gold hover:shadow-elevated transition-all group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream/30 text-cream font-sans font-medium rounded-md hover:bg-cream/10 transition-all">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-cream/10 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <Users className="w-10 h-10 text-accent mb-4" />
              <div className="font-serif text-3xl font-bold text-cream mb-2">4 Expert Partners</div>
              <div className="font-sans text-sm text-cream/70">Seasoned Banking Professionals</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-cream/10 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <div className="font-serif text-3xl font-bold text-cream mb-2">Business ₹10,000Cr+</div>
              <div className="font-sans text-sm text-cream/70">Developed over the years</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-cream/10 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              <Target className="w-10 h-10 text-accent mb-4" />
              <div className="font-serif text-3xl font-bold text-cream mb-2">500+</div>
              <div className="font-sans text-sm text-cream/70">SME/Mid/Large Corporate Clients managed</div>
            </div>
            
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-6 border border-accent/30 animate-fade-in" style={{
            animationDelay: "0.5s"
          }}>
              <div className="font-serif text-3xl font-bold text-accent mb-2">
            </div>
              <div className="font-sans text-sm text-cream/70">Expert Partners</div>
              <div className="mt-3 text-xs text-cream/50 font-sans">100+ Structured Debt</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
};
export default Hero;