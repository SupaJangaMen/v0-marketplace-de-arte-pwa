import { useState } from 'react'
import { Link } from 'wouter'
import { Search, SlidersHorizontal, MapPin, Star, CheckCircle, Grid3X3, List, X, Sparkles } from 'lucide-react'
import { Header } from '@/components/header'
import { MobileNav } from '@/components/mobile-nav'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { AIFilter, type Service } from '@/components/ai-filter'
import { cn } from '@/lib/utils'

const categories = [
  { value: 'todos', label: 'Todas Categorias' },
  { value: 'cantores', label: 'Cantores' },
  { value: 'musicos', label: 'Músicos' },
  { value: 'bandas', label: 'Bandas' },
  { value: 'djs', label: 'DJs' },
  { value: 'atores', label: 'Atores' },
  { value: 'dancarinos', label: 'Dançarinos' },
  { value: 'artistas-visuais', label: 'Artistas Visuais' },
  { value: 'iluminacao', label: 'Iluminação' },
  { value: 'som', label: 'Som' },
  { value: 'fotografia', label: 'Fotografia' },
  { value: 'video', label: 'Vídeo' },
  { value: 'espacos', label: 'Espaços' },
  { value: 'palco', label: 'Palco e Estrutura' },
]

const services: Service[] = [
  {
    id: 1,
    name: 'Maria Silva',
    type: 'Cantora & Compositora',
    category: 'Músico',
    rating: 4.9,
    reviews: 127,
    location: 'São Paulo, SP',
    priceValue: 1500,
    price: 'A partir de R$ 1.500',
    priceLabel: 'A partir de R$ 1.500',
    verified: true,
    image: 'https://i.pravatar.cc/600?img=47',
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
    priceValue: 3000,
    price: 'A partir de R$ 3.000',
    priceLabel: 'A partir de R$ 3.000',
    verified: true,
    image: 'https://picsum.photos/seed/sound-events/600/400',
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
    priceValue: 5000,
    price: 'Sob consulta',
    priceLabel: 'Sob consulta',
    verified: true,
    image: 'https://picsum.photos/seed/theater-aurora/600/400',
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
    priceValue: 800,
    price: 'A partir de R$ 800',
    priceLabel: 'A partir de R$ 800',
    verified: true,
    image: 'https://picsum.photos/seed/dj-anderson/600/400',
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
    priceValue: 2000,
    price: 'A partir de R$ 2.000',
    priceLabel: 'A partir de R$ 2.000',
    verified: true,
    image: 'https://picsum.photos/seed/photo-studio/600/400',
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
    priceValue: 4000,
    price: 'Sob consulta',
    priceLabel: 'Sob consulta',
    verified: true,
    image: 'https://picsum.photos/seed/ballet-sp/600/400',
    tags: ['Ballet', 'Contemporâneo', 'Shows'],
  },
  {
    id: 7,
    name: 'Banda Rock Revolution',
    type: 'Banda de Rock',
    category: 'Músico',
    rating: 4.6,
    reviews: 145,
    location: 'Porto Alegre, RS',
    priceValue: 2500,
    price: 'A partir de R$ 2.500',
    priceLabel: 'A partir de R$ 2.500',
    verified: true,
    image: 'https://picsum.photos/seed/rock-band/600/400',
    tags: ['Rock', 'Pop Rock', 'Covers'],
  },
  {
    id: 8,
    name: 'Espaço Cultural Jardins',
    type: 'Espaço para Eventos',
    category: 'Espaço',
    rating: 4.9,
    reviews: 234,
    location: 'São Paulo, SP',
    priceValue: 8000,
    price: 'A partir de R$ 8.000',
    priceLabel: 'A partir de R$ 8.000',
    verified: true,
    image: 'https://picsum.photos/seed/venue-jardins/600/400',
    tags: ['Shows', 'Teatro', 'Exposições'],
  },
  {
    id: 9,
    name: 'Paulo Arte Urbana',
    type: 'Arte Urbana & Murais',
    category: 'Artista Visual',
    rating: 5.0,
    reviews: 45,
    location: 'Recife, PE',
    priceValue: 1200,
    price: 'A partir de R$ 1.200',
    priceLabel: 'A partir de R$ 1.200',
    verified: true,
    image: 'https://picsum.photos/seed/urban-art/600/400',
    tags: ['Grafite', 'Murais', 'Arte Urbana'],
  },
  {
    id: 10,
    name: 'Rodrigo Vasconcelos',
    type: 'Cantor Sertanejo',
    category: 'Músico',
    rating: 4.8,
    reviews: 312,
    location: 'Goiânia, GO',
    priceValue: 3500,
    price: 'A partir de R$ 3.500',
    priceLabel: 'A partir de R$ 3.500',
    verified: true,
    image: 'https://i.pravatar.cc/600?img=52',
    tags: ['Sertanejo', 'Universitário', 'Festas'],
  },
  {
    id: 11,
    name: 'DJ Fernanda Beats',
    type: 'DJ & Produtora',
    category: 'DJ',
    rating: 4.9,
    reviews: 88,
    location: 'São Paulo, SP',
    priceValue: 1200,
    price: 'A partir de R$ 1.200',
    priceLabel: 'A partir de R$ 1.200',
    verified: true,
    image: 'https://i.pravatar.cc/600?img=25',
    tags: ['Eletrônica', 'Deep House', 'Festas'],
  },
  {
    id: 12,
    name: 'Circo das Artes',
    type: 'Acrobacia & Circo',
    category: 'Teatro',
    rating: 4.9,
    reviews: 73,
    location: 'Florianópolis, SC',
    priceValue: 6000,
    price: 'A partir de R$ 6.000',
    priceLabel: 'A partir de R$ 6.000',
    verified: true,
    image: 'https://picsum.photos/seed/circus-arts/600/400',
    tags: ['Circo', 'Acrobacia', 'Shows'],
  },
  {
    id: 13,
    name: 'Felipe Acoustic',
    type: 'Violonista & Cantor',
    category: 'Músico',
    rating: 4.7,
    reviews: 196,
    location: 'Brasília, DF',
    priceValue: 900,
    price: 'A partir de R$ 900',
    priceLabel: 'A partir de R$ 900',
    verified: true,
    image: 'https://i.pravatar.cc/600?img=65',
    tags: ['Acústico', 'Pop', 'Casamentos'],
  },
  {
    id: 14,
    name: 'LensArt Cinema',
    type: 'Videomaker Profissional',
    category: 'Fotografia',
    rating: 5.0,
    reviews: 41,
    location: 'Rio de Janeiro, RJ',
    priceValue: 4500,
    price: 'A partir de R$ 4.500',
    priceLabel: 'A partir de R$ 4.500',
    verified: true,
    image: 'https://picsum.photos/seed/lens-cinema/600/400',
    tags: ['Vídeo', 'Casamento', 'Corporativo'],
  },
  {
    id: 15,
    name: 'Banda Forró Raiz',
    type: 'Forró & Música Nordestina',
    category: 'Músico',
    rating: 4.8,
    reviews: 224,
    location: 'Fortaleza, CE',
    priceValue: 2200,
    price: 'A partir de R$ 2.200',
    priceLabel: 'A partir de R$ 2.200',
    verified: true,
    image: 'https://picsum.photos/seed/forro-band/600/400',
    tags: ['Forró', 'Nordestina', 'Festas'],
  },
  {
    id: 16,
    name: 'ProLight Iluminação',
    type: 'Iluminação Cênica Profissional',
    category: 'Equipamento',
    rating: 4.7,
    reviews: 119,
    location: 'São Paulo, SP',
    priceValue: 2800,
    price: 'A partir de R$ 2.800',
    priceLabel: 'A partir de R$ 2.800',
    verified: true,
    image: 'https://picsum.photos/seed/prolight/600/400',
    tags: ['Iluminação', 'LED', 'Shows'],
  },
  {
    id: 17,
    name: 'Ana Claudia Soprano',
    type: 'Soprano Lírica',
    category: 'Músico',
    rating: 5.0,
    reviews: 38,
    location: 'São Paulo, SP',
    priceValue: 2000,
    price: 'A partir de R$ 2.000',
    priceLabel: 'A partir de R$ 2.000',
    verified: true,
    image: 'https://i.pravatar.cc/600?img=31',
    tags: ['Lírica', 'Ópera', 'Casamentos'],
  },
  {
    id: 18,
    name: 'Palco & Estrutura RJ',
    type: 'Montagem de Palco',
    category: 'Equipamento',
    rating: 4.6,
    reviews: 157,
    location: 'Rio de Janeiro, RJ',
    priceValue: 5500,
    price: 'A partir de R$ 5.500',
    priceLabel: 'A partir de R$ 5.500',
    verified: true,
    image: 'https://picsum.photos/seed/stage-rj/600/400',
    tags: ['Palco', 'Estrutura', 'Tendas'],
  },
  {
    id: 19,
    name: 'Studio Dança Contemporânea',
    type: 'Dança Moderna',
    category: 'Dança',
    rating: 4.8,
    reviews: 82,
    location: 'Curitiba, PR',
    priceValue: 3200,
    price: 'A partir de R$ 3.200',
    priceLabel: 'A partir de R$ 3.200',
    verified: true,
    image: 'https://picsum.photos/seed/dance-studio/600/400',
    tags: ['Contemporâneo', 'Moderno', 'Shows'],
  },
  {
    id: 20,
    name: 'Vitória Santos',
    type: 'Cantora Pop & R&B',
    category: 'Músico',
    rating: 4.9,
    reviews: 167,
    location: 'São Paulo, SP',
    priceValue: 1800,
    price: 'A partir de R$ 1.800',
    priceLabel: 'A partir de R$ 1.800',
    verified: true,
    image: 'https://i.pravatar.cc/600?img=36',
    tags: ['Pop', 'R&B', 'Soul'],
  },
  {
    id: 21,
    name: 'Espaço Vila Nova',
    type: 'Casa de Shows',
    category: 'Espaço',
    rating: 4.7,
    reviews: 298,
    location: 'Belo Horizonte, MG',
    priceValue: 6500,
    price: 'A partir de R$ 6.500',
    priceLabel: 'A partir de R$ 6.500',
    verified: true,
    image: 'https://picsum.photos/seed/venue-nova/600/400',
    tags: ['Shows', 'Festas', 'Capacidade 300'],
  },
]

export default function ExplorarPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false)
  const [sortBy, setSortBy] = useState('relevancia')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [aiFilterResult, setAiFilterResult] = useState<{
    matchedIds: number[]
    highlights: Record<number, string>
  } | null>(null)
  const [isAiFiltering, setIsAiFiltering] = useState(false)

  const filteredServices = services.filter((service) => {
    if (aiFilterResult) return aiFilterResult.matchedIds.includes(service.id)
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory =
      selectedCategory === 'todos' || service.category.toLowerCase().includes(selectedCategory)
    const matchesPrice =
      (service.priceValue ?? 0) >= priceRange[0] && (service.priceValue ?? 0) <= priceRange[1]
    const matchesVerified = !showVerifiedOnly || service.verified
    return matchesSearch && matchesCategory && matchesPrice && matchesVerified
  })

  const sortedServices = aiFilterResult
    ? [...filteredServices].sort(
        (a, b) => aiFilterResult.matchedIds.indexOf(a.id) - aiFilterResult.matchedIds.indexOf(b.id)
      )
    : [...filteredServices].sort((a, b) => {
        switch (sortBy) {
          case 'preco-menor': return (a.priceValue ?? 0) - (b.priceValue ?? 0)
          case 'preco-maior': return (b.priceValue ?? 0) - (a.priceValue ?? 0)
          case 'avaliacao': return b.rating - a.rating
          case 'reviews': return b.reviews - a.reviews
          default: return 0
        }
      })

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-foreground font-medium mb-4 block">Faixa de Preço</Label>
        <Slider value={priceRange} onValueChange={setPriceRange} max={10000} step={100} className="mb-2" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>R$ {priceRange[0].toLocaleString()}</span>
          <span>R$ {priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="verified" checked={showVerifiedOnly} onCheckedChange={(checked) => setShowVerifiedOnly(checked as boolean)} />
        <Label htmlFor="verified" className="text-sm text-foreground cursor-pointer">Apenas verificados</Label>
      </div>
      <div>
        <Label className="text-foreground font-medium mb-3 block">Categorias</Label>
        <div className="space-y-2">
          {categories.slice(0, 9).map((cat) => (
            <div key={cat.value} className="flex items-center gap-2">
              <Checkbox id={cat.value} checked={selectedCategory === cat.value} onCheckedChange={() => setSelectedCategory(cat.value)} />
              <Label htmlFor={cat.value} className="text-sm text-foreground cursor-pointer">{cat.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24 pb-24 lg:pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Explorar Marketplace</h1>
            <p className="text-muted-foreground">Encontre artistas, equipamentos e serviços para seu evento</p>
          </div>

          <AIFilter
            services={services}
            onFilter={(result) => setAiFilterResult(result)}
            isFiltering={isAiFiltering}
            setIsFiltering={setIsAiFiltering}
          />

          {!aiFilterResult && !isAiFiltering && (
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input type="text" placeholder="Buscar artistas, equipamentos, serviços..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-12 h-12 bg-card border-border" />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-12 bg-card border-border"><SelectValue placeholder="Categoria" /></SelectTrigger>
                <SelectContent>{categories.map((cat) => <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>)}</SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 h-12 bg-card border-border"><SelectValue placeholder="Ordenar por" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Relevância</SelectItem>
                  <SelectItem value="avaliacao">Melhor avaliação</SelectItem>
                  <SelectItem value="preco-menor">Menor preço</SelectItem>
                  <SelectItem value="preco-maior">Maior preço</SelectItem>
                  <SelectItem value="reviews">Mais avaliações</SelectItem>
                </SelectContent>
              </Select>
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" className="h-12 border-border"><SlidersHorizontal className="w-5 h-5 mr-2" />Filtros</Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-background border-border">
                  <SheetHeader><SheetTitle>Filtros</SheetTitle></SheetHeader>
                  <div className="mt-6"><FilterContent /></div>
                  <div className="mt-8"><Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setIsFilterOpen(false)}>Aplicar Filtros</Button></div>
                </SheetContent>
              </Sheet>
              <div className="hidden lg:flex items-center gap-1 bg-card border border-border rounded-lg p-1">
                <Button variant={viewMode === 'grid' ? 'default' : 'ghost'} size="icon" className={viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''} onClick={() => setViewMode('grid')}><Grid3X3 className="w-4 h-4" /></Button>
                <Button variant={viewMode === 'list' ? 'default' : 'ghost'} size="icon" className={viewMode === 'list' ? 'bg-primary text-primary-foreground' : ''} onClick={() => setViewMode('list')}><List className="w-4 h-4" /></Button>
              </div>
            </div>
          )}

          {!aiFilterResult && (selectedCategory !== 'todos' || showVerifiedOnly || searchQuery) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory !== 'todos' && <Badge variant="secondary" className="gap-1">{categories.find(c => c.value === selectedCategory)?.label}<X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('todos')} /></Badge>}
              {showVerifiedOnly && <Badge variant="secondary" className="gap-1">Verificados<X className="w-3 h-3 cursor-pointer" onClick={() => setShowVerifiedOnly(false)} /></Badge>}
              {searchQuery && <Badge variant="secondary" className="gap-1">{`"${searchQuery}"`}<X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} /></Badge>}
            </div>
          )}

          <div className="flex gap-8">
            {!aiFilterResult && (
              <aside className="hidden lg:block w-64 shrink-0">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
                  <h3 className="font-semibold text-foreground mb-6">Filtros</h3>
                  <FilterContent />
                </div>
              </aside>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {isAiFiltering ? (
                    <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin inline-block" />Analisando com IA...</span>
                  ) : (
                    <>{sortedServices.length} resultado{sortedServices.length !== 1 ? 's' : ''} encontrado{sortedServices.length !== 1 ? 's' : ''}{aiFilterResult && <span className="ml-2 inline-flex items-center gap-1 text-primary"><Sparkles className="w-3 h-3" />filtrado por IA</span>}</>
                  )}
                </p>
                {aiFilterResult && (
                  <div className="flex items-center gap-1 bg-card border border-border rounded-lg p-1">
                    <Button variant={viewMode === 'grid' ? 'default' : 'ghost'} size="icon" className={viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''} onClick={() => setViewMode('grid')}><Grid3X3 className="w-4 h-4" /></Button>
                    <Button variant={viewMode === 'list' ? 'default' : 'ghost'} size="icon" className={viewMode === 'list' ? 'bg-primary text-primary-foreground' : ''} onClick={() => setViewMode('list')}><List className="w-4 h-4" /></Button>
                  </div>
                )}
              </div>

              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
                {sortedServices.map((service, index) => {
                  const highlight = aiFilterResult?.highlights[service.id]
                  return (
                    <Link
                      key={service.id}
                      href={`/servico/${service.id}`}
                      className={cn(
                        'group bg-card border rounded-2xl overflow-hidden transition-all duration-300',
                        viewMode === 'list' ? 'flex' : '',
                        aiFilterResult ? 'border-primary/30 hover:border-primary/60 shadow-sm shadow-primary/5' : 'border-border hover:border-primary/50',
                        aiFilterResult && index === 0 ? 'ring-1 ring-primary/30' : ''
                      )}
                    >
                      <div className={cn('relative overflow-hidden bg-muted', viewMode === 'list' ? 'w-40 h-40 shrink-0' : 'aspect-[4/3]')}>
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-3 left-3"><Badge className="bg-background/90 text-foreground backdrop-blur-sm">{service.category}</Badge></div>
                        {service.verified && <div className="absolute top-3 right-3"><div className="bg-primary text-primary-foreground rounded-full p-1"><CheckCircle className="w-4 h-4" /></div></div>}
                        {aiFilterResult && index === 0 && <div className="absolute bottom-3 left-3"><Badge className="bg-primary text-primary-foreground gap-1 text-xs"><Sparkles className="w-3 h-3" />Melhor match</Badge></div>}
                      </div>
                      <div className={cn('p-5', viewMode === 'list' ? 'flex-1' : '')}>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.type}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-secondary rounded-lg px-2 py-1 shrink-0">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="text-sm font-medium">{service.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3"><MapPin className="w-4 h-4" />{service.location}</div>
                        <div className="flex flex-wrap gap-2 mb-4">{service.tags.slice(0, 3).map((tag) => <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">{tag}</span>)}</div>
                        {highlight && (
                          <div className="mb-3 flex items-start gap-1.5 text-xs text-primary bg-primary/8 border border-primary/15 rounded-lg px-3 py-2">
                            <Sparkles className="w-3 h-3 mt-0.5 shrink-0" /><span>{highlight}</span>
                          </div>
                        )}
                        <div className="pt-4 border-t border-border"><p className="text-sm text-muted-foreground">{service.priceLabel}</p></div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {sortedServices.length === 0 && !isAiFiltering && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4"><Sparkles className="w-8 h-8 text-muted-foreground" /></div>
                  <p className="text-foreground font-medium mb-1">Nenhum resultado encontrado</p>
                  <p className="text-muted-foreground text-sm mb-6">Tente reformular sua busca ou use outros termos</p>
                  <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('todos'); setShowVerifiedOnly(false); setPriceRange([0, 10000]); setAiFilterResult(null) }}>Limpar filtros</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
