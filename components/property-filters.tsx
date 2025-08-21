"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([0, 2000000000])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtrar Propiedades</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-sm font-medium">Tipo de Propiedad</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartamento</SelectItem>
              <SelectItem value="house">Casa</SelectItem>
              <SelectItem value="condo">Finca</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium">Rango de Precio</Label>
          <div className="mt-2 space-y-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={2000000000}
              min={0}
              step={50000000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium">Habitaciones</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Cualquiera" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Cualquiera</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium">Baños</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Cualquiera" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Cualquiera</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium">Ubicación</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Seleccionar ubicación" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="centro">Zona Centro</SelectItem> */}
              <SelectItem value="occidente">Zona Occidente</SelectItem>
              {/* <SelectItem value="norte">Zona Sur</SelectItem> */}
              <SelectItem value="sur">Zona Sur</SelectItem>
              <SelectItem value="este">Zona Oriente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium">Entorno</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Seleccionar entorno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unidad">Unidad cerrada</SelectItem>
              <SelectItem value="edificio">Edificio</SelectItem>
              <SelectItem value="barrio">Barrio</SelectItem>
              <SelectItem value="finca">Finca</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Comodidades</Label>
          <div className="space-y-2">
            {["Piscina", "Gimnasio", "Parqueadero"].map(
              (amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={amenity} />
                  <Label htmlFor={amenity} className="text-sm font-normal">
                    {amenity}
                  </Label>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full">Aplicar Filtros</Button>
          <Button variant="outline" className="w-full bg-transparent">
            Limpiar Todo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
