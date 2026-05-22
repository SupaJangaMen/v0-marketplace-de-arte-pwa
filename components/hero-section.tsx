import Link from 'next/link'
import { ArrowRight, Play, Star, Mic2, Lightbulb, Speaker, Camera, Palette, Theater } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingCards = [
  { icon: Mic2, label: 'Cantores', count: '847 disponíveis', delay: '0s' },
  { icon: Lightbulb, label: 'Iluminação', count: '456 serviços', delay: '0.5s' },
  { icon: Speaker, label: 'Equipamentos', count: '2.3k listados', delay: '1s' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient circles */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        
        {/* Circular decoration */}
        <div className="absolute top-1/2 right-0 lg:right-1/4 -translate-y-1/2 translate-x-1/4 lg:translate-x-0">
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            {/* Middle ring with gradient */}
            <div className="absolute inset-8 rounded-full border-2 border-primary/30" 
                 style={{ 
                   background: 'radial-gradient(circle at 30% 30%, rgba(230, 126, 34, 0.1), transparent 70%)'
                 }} 
            />
            {/* Inner ring */}
            <div className="absolute inset-16 rounded-full border border-primary/20" />
            
            {/* Center play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/30">
                <Play className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground fill-current ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">+2.500 Artistas Verificados</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">O Palco é </span>
              <span className="text-primary relative">
                Seu
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" fill="none">
                  <path d="M2 10C20 2 80 2 98 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/50"/>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Conectamos artistas, técnicos e os melhores equipamentos do mercado para criar experiências{' '}
              <span className="text-foreground font-medium">inesquecíveis</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/explorar">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6">
                  Explorar Marketplace
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary gap-2 h-12 px-6">
                <Play className="w-4 h-4" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">15k+</p>
                <p className="text-sm text-muted-foreground">Eventos Realizados</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Cidades</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards (visible on lg+) */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Floating category cards */}
            <div className="absolute top-8 right-8 bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-xl animate-float">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Mic2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Cantores</p>
                <p className="text-sm text-muted-foreground">847 disponíveis</p>
              </div>
            </div>

            <div className="absolute top-1/2 right-0 bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Iluminação</p>
                <p className="text-sm text-muted-foreground">456 serviços</p>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 bg-card border border-border rounded-xl p-4 flex items-center gap-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Speaker className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Equipamentos</p>
                <p className="text-sm text-muted-foreground">2.3k listados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
