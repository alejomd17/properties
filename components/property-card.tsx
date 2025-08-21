"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, BedDouble, Package, Car, Bath, Square, ChevronLeft, ChevronRight, MessageCircle, Warehouse } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Property } from "@/lib/data"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link href={`/property/${property.id}`}>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={property.images[currentImageIndex] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />

            {property.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  {property.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
        </Button>

        <Badge className="absolute top-2 left-2 bg-primary">{property.status}</Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
            <span className="text-xl font-bold text-primary">${property.price.toLocaleString()}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area} m²</span>
            </div>
            <div className="flex items-center">
              <Car className="h-4 w-4 mr-1" />
              <span>{property.garage} Parq</span>
            </div>
            <div className="flex items-center">
              <Warehouse className="h-4 w-4 mr-1" />
              <span>{property.storageroom} C.Util</span>
            </div>
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Habs</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Baños</span>
            </div>
          </div>


          <p className="text-sm text-muted-foreground line-clamp-2">{property.description}</p>

          <div className="pt-2 space-y-2">
            <Link href={`/property/${property.id}`}>
              <Button className="w-full">Ver Detalles</Button>
            </Link>
            <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
              <a
                href={`https://wa.me/573104161610?text=Hola%2C%20me%20interesa%20esta%20propiedad%3A%20${encodeURIComponent(property.title)}%20-%20%24${property.price.toLocaleString()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
