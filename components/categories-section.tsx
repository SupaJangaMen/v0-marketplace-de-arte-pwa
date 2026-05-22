import Link from 'next/link'
import { Mic2, Lightbulb, Speaker, Camera, Palette, Theater, Music, Clapperboard, PartyPopper } from 'lucide-react'

const categories = [
  { icon: Mic2, label: 'Cantores', count: 847, href: '/explorar?categoria=cantores', color: 'bg-primary/20 text-primary' },
  { icon: Music, label: 'Músicos', count: 1234, href: '/explorar?categoria=musicos', color: 'bg-blue-500/20 text-blue-500' },
  { icon: Theater, label: 'Atores', count: 523, href: '/explorar?categoria=atores', color: 'bg-purple-500/20 text-purple-500' },
  { icon: Palette, label: 'Artistas Visuais', count: 389, href: '/explorar?categoria=visuais', color: 'bg-pink-500/20 text-pink-500' },
  { icon: Clapperboard, label: 'Dançarinos', count: 456, href: '/explorar?categoria=dancarinos', color: 'bg-cyan-500/20 text-cyan-500' },
  { icon: Lightbulb, label: 'Iluminação', count: 312, href: '/explorar?categoria=iluminacao', color: 'bg-yellow-500/20 text-yellow-500' },
  { icon: Speaker, label: 'Som', count: 278, href: '/explorar?categoria=som', color: 'bg-green-500/20 text-green-500' },
  { icon: Camera, label: 'Fotografia', count: 567, href: '/explorar?categoria=fotografia', color: 'bg-rose-500/20 text-rose-500' },
  { icon: PartyPopper, label: 'Eventos', count: 189, href: '/explorar?categoria=eventos', color: 'bg-indigo-500/20 text-indigo-500' },
]

export function CategoriesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-3">Categorias</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Encontre o Profissional Ideal
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore todas as categorias e encontre exatamente o que você precisa para seu evento ou projeto artístico.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.label}
                href={category.href}
                className="group bg-card border border-border rounded-xl p-4 lg:p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.count} disponíveis</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
