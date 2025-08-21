import { Building2, Phone, Instagram, Facebook, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo placeholder - you can replace this with your actual logo */}
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-slate-800" />
            </div>
            <span className="text-xl font-bold">M2 Propiedades</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Propiedades
            </Link>
            {/* <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link> */}
            <Link href="cerradas" className="text-sm font-medium hover:text-primary transition-colors">
              Cerradas
            </Link>
            <Link href="/amortization" className="text-sm font-medium hover:text-primary transition-colors">
              Cálcula tu préstamo
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+57 310 416 1610</span>
              </div>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-2 ml-4">
                <a
                  href="https://instagram.com/m2propiedades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com/m2propiedades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a
                href="https://wa.me/573104161610?text=Hola%2C%20estoy%20interesado%20en%20sus%20propiedades.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
