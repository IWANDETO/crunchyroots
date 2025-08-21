import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Shield, Users, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-card py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  100% Natural & Healthy
                </Badge>
                <h1 className="font-serif font-black text-4xl lg:text-6xl text-foreground leading-tight">
                  Crunchy Roots
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Premium healthy snacks that fuel your active lifestyle
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover our range of natural, value-added snacks crafted for health-conscious consumers across Kenya.
                  From nutritious nuts to wholesome dried fruits, every bite delivers quality and taste.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg bg-transparent">
                  <Link href="/stores">Find Stores</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <img
                  src="/healthy-snacks-display.png"
                  alt="Crunchy Roots healthy snacks assortment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Why Choose Crunchy Roots?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality natural snacks that support your healthy lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">100% Natural</h3>
                <p className="text-muted-foreground">
                  No artificial preservatives, colors, or flavors. Just pure, natural goodness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Heart Healthy</h3>
                <p className="text-muted-foreground">
                  Rich in nutrients, vitamins, and healthy fats to support your wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control ensures every product meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Community Focused</h3>
                <p className="text-muted-foreground">Supporting local communities and sustainable farming practices.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">
                Ready to Experience Healthy Snacking?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Find Crunchy Roots products at stores across Kenya or get in touch for bulk orders and partnership
                opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Available at major supermarkets across Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Bulk orders and partnerships welcome</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/stores">Find Stores Near You</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/partners">Partner With Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                <img
                  src="/kenyan-supermarket-snacks.png"
                  alt="Crunchy Roots products in store"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <p className="text-background/60">© 2024 Crunchy Roots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
