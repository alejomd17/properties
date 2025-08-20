import { PropertyFilters } from "@/components/property-filters"
import { PropertyGrid } from "@/components/property-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Encuentra tu Propiedad Ideal</h1>
          <p className="text-muted-foreground">
            Descubre increíbles apartamentos y propiedades en las mejores ubicaciones con M2 Propiedades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <PropertyFilters />
          </aside>
          <div className="lg:col-span-3">
            <PropertyGrid />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
