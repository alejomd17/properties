"use client"

interface GoogleMapProps {
  address: string
}

export function GoogleMap({ address }: GoogleMapProps) {
  // In a real application, you would integrate with Google Maps API
  // For this demo, we'll show a placeholder
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`

  return (
    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground mb-2">Google Maps Integration</p>
        <p className="text-sm text-muted-foreground">Location: {address}</p>
        <p className="text-xs text-muted-foreground mt-2">Add your Google Maps API key to enable interactive map</p>
      </div>
    </div>
  )
}
