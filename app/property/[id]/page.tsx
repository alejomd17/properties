import { PropertyDetails } from "@/components/property-details"
import { Header } from "@/components/header"
import { properties } from "@/lib/data"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PropertyDetails property={property} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
