export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  area: number
  garage: number
  storageroom: number
  bedrooms: number
  bathrooms: number
  yearBuilt: number
  status: "Venta" | "Arriendo" | "Vendida"
  images: string[]
  amenities: string[]
}

export const properties: Property[] = [
  {
    id: "31",
    title: "Casa en La Ceja",
    description:
      // "Hermosa casa de 154 mts2 en el corazón de La Ceja, en el oriente antioqueño. This spacious unit features high-end finishes, floor-to-ceiling windows, and access to premium building amenities including a rooftop terrace, fitness center, and concierge service.",
      "Hermosa casa de 154 mts2 en el oriente antioqueño. Muy cerca del CC Viva La Ceja",
    price: 805000000,
    location: "La Ceja",
    area: 154,
    garage: 1,
    storageroom: 2,
    bedrooms: 5,
    bathrooms: 3,
    yearBuilt: 2023,
    status: "Venta",
    images: [
      "/images/properties/31/1.jpg",
      "/images/properties/31/2.jpg",
      "/images/properties/31/3.jpg",
      "/images/properties/31/4.jpg",
      "/images/properties/31/5.jpg",
      "/images/properties/31/6.jpg",
      "/images/properties/31/7.jpg",
      "/images/properties/31/8.jpg",
      "/images/properties/31/9.jpg",
      "/images/properties/31/10.jpg",
      "/images/properties/31/11.jpg",
      "/images/properties/31/12.jpg",
      "/images/properties/31/13.jpg",
      "/images/properties/31/14.jpg",
      "/images/properties/31/15.jpg",
      "/images/properties/31/16.jpg",
      "/images/properties/31/17.jpg",
    ],
    amenities: [
      "3 Closets",
      "2 vestier",
      "Malacate para discapacidad",
      "Cocina integral",
      "2 Cuartos útiles",
      "Garaje eléctrico",
      "Air Conditioning",
      "Jardineras",
    ],
  },
  // {
  //   id: "2",
  //   title: "Luxury Waterfront Condo",
  //   description:
  //     "Stunning waterfront condominium with panoramic ocean views. This elegant residence offers premium finishes, a gourmet kitchen, and private balcony overlooking the marina. Building amenities include valet parking, spa, and private beach access.",
  //   price: 750000,
  //   location: "456 Ocean Drive, Waterfront, FL 33139",
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   area: 1800,
  //   yearBuilt: 2019,
  //   status: "Venta",
  //   images: [
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //   ],
  //   amenities: [
  //     "Ocean Views",
  //     "Private Balcony",
  //     "Valet Parking",
  //     "Spa",
  //     "Private Beach Access",
  //     "Gourmet Kitchen",
  //     "Marble Countertops",
  //     "Walk-in Closets",
  //     "24/7 Security",
  //     "Marina Access",
  //   ],
  // },
  // {
  //   id: "3",
  //   title: "Cozy Studio in Midtown",
  //   description:
  //     "Perfect starter home or investment property. This well-designed studio maximizes space with clever storage solutions and modern appliances. Located in vibrant Midtown with easy access to public transportation, restaurants, and entertainment.",
  //   price: 2500,
  //   location: "789 Park Avenue, Midtown, NY 10016",
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 500,
  //   yearBuilt: 2018,
  //   status: "Arriendo",
  //   images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  //   amenities: [
  //     "Modern Appliances",
  //     "Clever Storage",
  //     "Public Transportation",
  //     "Laundry Facility",
  //     "Doorman",
  //     "Elevator",
  //     "Near Restaurants",
  //     "Shopping Nearby",
  //   ],
  // },
  // {
  //   id: "4",
  //   title: "Spacious Family Home",
  //   description:
  //     "Beautiful family home in quiet suburban neighborhood. Features include a large backyard, updated kitchen, hardwood floors throughout, and a two-car garage. Perfect for families with children, close to top-rated schools and parks.",
  //   price: 650000,
  //   location: "321 Elm Street, Suburbs, CA 90210",
  //   bedrooms: 4,
  //   bathrooms: 3,
  //   area: 2500,
  //   yearBuilt: 2015,
  //   status: "Venta",
  //   images: [
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //   ],
  //   amenities: [
  //     "Large Backyard",
  //     "Updated Kitchen",
  //     "Hardwood Floors",
  //     "Two-Car Garage",
  //     "Near Schools",
  //     "Quiet Neighborhood",
  //     "Master Suite",
  //     "Walk-in Closets",
  //     "Fireplace",
  //     "Patio",
  //   ],
  // },
  // {
  //   id: "5",
  //   title: "Penthouse with City Views",
  //   description:
  //     "Exclusive penthouse apartment with breathtaking 360-degree city views. This luxury residence features premium finishes, a private elevator, wraparound terrace, and access to building's exclusive amenities including wine cellar and private dining room.",
  //   price: 1200000,
  //   location: "555 Fifth Avenue, Manhattan, NY 10017",
  //   bedrooms: 3,
  //   bathrooms: 3,
  //   area: 2200,
  //   yearBuilt: 2021,
  //   status: "Venta",
  //   images: [
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //     "/placeholder.svg?height=400&width=600",
  //   ],
  //   amenities: [
  //     "360-degree Views",
  //     "Private Elevator",
  //     "Wraparound Terrace",
  //     "Wine Cellar Access",
  //     "Private Dining Room",
  //     "Premium Finishes",
  //     "Smart Home Technology",
  //     "Marble Bathrooms",
  //     "Chef's Kitchen",
  //     "Concierge",
  //   ],
  // },
  // {
  //   id: "6",
  //   title: "Charming Garden Apartment",
  //   description:
  //     "Lovely ground-floor apartment with private garden access. This charming unit features exposed brick walls, high ceilings, and a cozy fireplace. The private garden is perfect for entertaining or quiet relaxation.",
  //   price: 3200,
  //   location: "147 Garden Street, Brooklyn, NY 11201",
  //   bedrooms: 1,
  //   bathrooms: 1,
  //   area: 800,
  //   yearBuilt: 2017,
  //   status: "Arriendo",
  //   images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  //   amenities: [
  //     "Private Garden",
  //     "Exposed Brick",
  //     "High Ceilings",
  //     "Fireplace",
  //     "Garden Access",
  //     "Quiet Street",
  //     "Near Subway",
  //     "Pet Friendly",
  //   ],
  // },
]
