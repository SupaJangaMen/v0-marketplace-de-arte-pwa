import Link from 'next/link'
import { Star, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const featuredServices = [
  {
    id: 1,
    name: 'Maria Silva',
    type: 'Cantora & Compositora',
    category: 'Músico',
    rating: 4.9,
    reviews: 127,
    location: 'São Paulo, SP',
    price: 'A partir de R$ 1.500',
    verified: true,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop',
    tags: ['MPB', 'Jazz', 'Bossa Nova'],
  },
  {
    id: 2,
    name: 'Som & Luz Eventos',
    type: 'Equipamentos Profissionais',
    category: 'Equipamento',
    rating: 4.8,
    reviews: 89,
    location: 'Rio de Janeiro, RJ',
    price: 'A partir de R$ 3.000',
    verified: true,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
    tags: ['Som', 'Iluminação', 'Palco'],
  },
  {
    id: 3,
    name: 'Companhia de Teatro Aurora',
    type: 'Teatro & Performance',
    category: 'Teatro',
    rating: 5.0,
    reviews: 56,
    location: 'Belo Horizonte, MG',
    price: 'Sob consulta',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=400&fit=crop',
    tags: ['Teatro', 'Performance', 'Eventos Corporativos'],
  },
  {
    id: 4,
    name: 'DJ Anderson',
    type: 'DJ & Produtor Musical',
    category: 'DJ',
    rating: 4.7,
    reviews: 203,
    location: 'Curitiba, PR',
    price: 'A partir de R$ 800',
    verified: true,
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=400&fit=crop',
    tags: ['House', 'Techno', 'Pop'],
  },
  {
    id: 5,
    name: 'Studio Arte Visual',
    type: 'Fotografia & Vídeo',
    category: 'Fotografia',
    rating: 4.9,
    reviews: 178,
    location: 'Salvador, BA',
    price: 'A partir de R$ 2.000',
    verified: true,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop',
    tags: ['Fotografia', 'Vídeo', 'Edição'],
  },
  {
    id: 6,
    name: 'Ballet Contemporâneo SP',
    type: 'Dança & Coreografia',
    category: 'Dança',
    rating: 4.8,
    reviews: 67,
    location: 'São Paulo, SP',
    price: 'Sob consulta',
    verified: true,
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop',
    tags: ['Ballet', 'Contemporâneo', 'Shows'],
  },
]

export function FeaturedSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-primary font-medium mb-3">Destaques</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Profissionais em Alta
            </h2>
          </div>
          <Link href="/explorar">
            <Button variant="outline" className="border-border hover:bg-secondary">
              Ver todos
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/servico/${service.id}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                    {service.category}
                  </Badge>
                </div>
                {service.verified && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.type}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-secondary rounded-lg px-2 py-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-xs text-muted-foreground">({service.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {service.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">{service.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
