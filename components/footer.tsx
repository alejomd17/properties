import { Building2, Phone, Instagram, Facebook, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">M2 Propiedades</span>
            </div>
            <p className="text-gray-300 text-sm">
              Tu socio de confianza en bienes raíces. Encontramos la propiedad perfecta para ti.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/m2propiedades"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://facebook.com/m2propiedades"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Venta de Propiedades</li>
              <li className="text-gray-300">Alquiler de Propiedades</li>
              <li className="text-gray-300">Asesoría Inmobiliaria</li>
              <li className="text-gray-300">Valuación de Propiedades</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+57 310 416 1610</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-gray-300">
                  Calle Principal 123
                  <br />
                  Ciudad, País
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 M2 Propiedades. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
