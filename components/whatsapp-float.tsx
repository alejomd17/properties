"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573104161610?text=Hola%2C%20estoy%20interesado%20en%20sus%20propiedades.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white rounded-full p-3 shadow-lg z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
