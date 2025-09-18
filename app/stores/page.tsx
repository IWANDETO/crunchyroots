import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, NavigationIcon, Store } from "lucide-react"
import Link from "next/link"

const storeLocations = [
  {
    id: "leester-kihunguro",
    name: "Leester Supermarket",
    location: "Kihunguro",
    address: "Kihunguro Shopping Center, Kiambu County",
    phone: "+254 700 000 001",
    hours: "Mon-Sun: 7:00 AM - 9:00 PM",
    region: "Kiambu County",
    description: "Full range of Crunchy Roots products available",
    image: "/market.png",
  },
  {
    id: "leester-kinoo",
    name: "Leester Supermarket",
    location: "Kinoo",
    address: "Kinoo Shopping Mall, Kiambu County",
    phone: "+254 700 000 002",
    hours: "Mon-Sun: 7:00 AM - 9:00 PM",
    region: "Kiambu County",
    description: "Complete selection of healthy snacks and trail mixes",
    image: "/market.png",
  },
  {
    id: "juja-ecomart",
    name: "Juja Ecomart",
    location: "Juja",
    address: "Juja Town Center, Kiambu County",
    phone: "+254 700 000 003",
    hours: "Mon-Sun: 6:30 AM - 10:00 PM",
    region: "Kiambu County",
    description: "Eco-friendly store with premium natural snacks",
    image: "/market.png",
  },
  {
    id: "juja-uniquemart",
    name: "Juja Uniquemart",
    location: "Juja",
    address: "Juja Main Road, Kiambu County",
    phone: "+254 700 000 004",
    hours: "Mon-Sun: 7:00 AM - 9:30 PM",
    region: "Kiambu County",
    description: "Unique selection of healthy snacks and dried fruits",
    image: "/market.png",
  },
  {
    id: "thika-homeways",
    name: "Thika Homeways",
    location: "Thika",
    address: "Thika Town, Kiambu County",
    phone: "+254 700 000 005",
    hours: "Mon-Sun: 7:00 AM - 9:00 PM",
    region: "Kiambu County",
    description: "Family-friendly store with nutritious snack options",
    image: "/market.png",
  },
  {
    id: "kenyatta-homeways",
    name: "Kenyatta Road Homeways",
    location: "Kenyatta Road",
    address: "Kenyatta Road, Nairobi County",
    phone: "+254 700 000 006",
    hours: "Mon-Sun: 7:00 AM - 10:00 PM",
    region: "Nairobi County",
    description: "Convenient city location with full product range",
    image: "/market.png",
  },
]

const regions = [...new Set(storeLocations.map((store) => store.region))]

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted to-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Find Us Near You
            </Badge>
            <h1 className="font-serif font-black text-4xl lg:text-5xl text-foreground">Where to Buy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find Crunchy Roots products at these trusted retailers across Kenya. Visit your nearest store to discover
              our full range of healthy snacks.
            </p>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {regions.map((region) => (
            <div key={region} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="font-serif font-black text-2xl lg:text-3xl text-foreground">{region}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storeLocations
                  .filter((store) => store.region === region)
                  .map((store) => (
                    <Card
                      key={store.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader className="p-0">
                        <div className="aspect-[16/10] rounded-t-lg overflow-hidden bg-gradient-to-br from-muted to-card">
                          <img
                            src={store.image || "/placeholder.svg"}
                            alt={`${store.name} ${store.location}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <CardTitle className="font-serif font-bold text-xl text-foreground flex items-center gap-2">
                            <Store className="w-5 h-5 text-primary" />
                            {store.name}
                          </CardTitle>
                          <Badge variant="outline" className="w-fit">
                            {store.location}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground text-sm">{store.description}</p>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{store.address}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{store.phone}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{store.hours}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button className="w-full" size="sm">
                            <NavigationIcon className="w-4 h-4 mr-2" />
                            Get Directions
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">What to Expect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our partner stores are committed to providing you with the freshest Crunchy Roots products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Full Product Range</h3>
                <p className="text-muted-foreground">
                  Find our complete selection of nuts, dried fruits, and trail mixes at every location.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Fresh Stock</h3>
                <p className="text-muted-foreground">
                  Regular deliveries ensure you always get the freshest products with optimal taste and nutrition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <NavigationIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Easy to Find</h3>
                <p className="text-muted-foreground">
                  Conveniently located in major shopping centers and easily accessible by public transport.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="font-serif font-black text-3xl lg:text-4xl">Need Larger Quantities?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Looking for bulk orders for your office, event, or business? We offer special pricing and direct delivery
              for larger quantities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/partners">Bulk Orders</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-black text-sm">CR</span>
                </div>
                <span className="font-serif font-black text-xl">Crunchy Roots</span>
              </div>
              <p className="text-background/80">Premium healthy snacks for health-conscious consumers across Kenya.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/products" className="block text-background/80 hover:text-background transition-colors">
                  Products
                </Link>
                <Link href="/stores" className="block text-background/80 hover:text-background transition-colors">
                  Where to Buy
                </Link>
                <Link href="/partners" className="block text-background/80 hover:text-background transition-colors">
                  Partners
                </Link>
                <Link href="/contact" className="block text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg">Get in Touch</h3>
              <p className="text-background/80">
                Ready to stock our products or place bulk orders? We'd love to hear from you.
              </p>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">© 2025 Crunchy Roots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
