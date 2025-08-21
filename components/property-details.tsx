"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Phone,
  Heart,
  Warehouse,
  Car,
  Share2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import type { Property } from "@/lib/data"
import { GoogleMap } from "@/components/google-map"

interface PropertyDetailsProps {
  property: Property
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery */}
      <div className="relative mb-8">
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
          <Image
            src={property.images[currentImageIndex] || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover"
          />

          {property.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          <div className="absolute top-4 left-4">
            <Badge className="bg-primary">{property.status}</Badge>
          </div>

          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/80 hover:bg-white"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="flex space-x-2 mt-4 overflow-x-auto">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                index === currentImageIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${property.title} ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.location}</span>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2" />
                <span className="font-medium">{property.area} m²</span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                <span className="font-medium">{property.garage} Parq.</span>
              </div>
              <div className="flex items-center">
                <Warehouse className="h-5 w-5 mr-2" />
                <span className="font-medium">{property.storageroom} C.Útil</span>
              </div>
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                <span className="font-medium">{property.bedrooms} Habitaciones</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2" />
                <span className="font-medium">{property.bathrooms} Baños</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-medium">Construido en {property.yearBuilt}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">Descripción</h2>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">Características y Comodidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
            <GoogleMap address={property.location} />
          </div>
        </div>

        {/* Contact Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">${property.price.toLocaleString()}</CardTitle>
              <p className="text-sm text-muted-foreground">  ${new Intl.NumberFormat("es-CO").format(Math.round(property.price / property.area))}/m²</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <a
                    href={`https://wa.me/573104161610?text=Hola%2C%20estoy%20interesado%20en%20la%20propiedad%3A%20${encodeURIComponent(property.title)}%20-%20%24${property.price.toLocaleString()}%0A%0A%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button className="w-full" size="lg" asChild>
                  <a
                    href={`https://wa.me/573104161610?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20para%20la%20propiedad%3A%20${encodeURIComponent(property.title)}%20en%20${encodeURIComponent(property.location)}%0A%0A%C2%BFCu%C3%A1ndo%20estar%C3%ADa%20disponible%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Visita
                  </a>
                </Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="font-semibold">Agente de Contacto</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">M2</span>
                  </div>
                  <div>
                    <p className="font-medium">Jorge Eliécer Moscoso</p>
                    <p className="text-sm text-muted-foreground">Agente Inmobiliario</p>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +57 310 416 1610
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
