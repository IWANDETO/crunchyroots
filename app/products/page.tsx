import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Zap, Award } from "lucide-react"
import Link from "next/link"

const productCategories = [
  {
    id: "nuts",
    name: "Premium Nuts",
    description: "Roasted and seasoned nuts packed with protein and healthy fats",
    image: "/premium-nuts-collection.png",
    products: [
      {
        name: "Honey Roasted Cashews",
        description: "Creamy cashews lightly roasted with natural honey",
        benefits: ["High Protein", "Heart Healthy", "Natural Sweetener"],
        image: "/honey-cashews.png",
      },
      {
        name: "Spiced Peanuts",
        description: "Crunchy peanuts with a blend of traditional Kenyan spices",
        benefits: ["High Protein", "Energy Boost", "Local Spices"],
        image: "/spiced-peanuts.png",
      },
      {
        name: "Mixed Nuts Deluxe",
        description: "Premium mix of cashews, almonds, and macadamia nuts",
        benefits: ["Omega-3", "Antioxidants", "Premium Quality"],
        image: "/mixed-nuts.png",
      },
    ],
  },
  {
    id: "fruits",
    name: "Dried Fruits",
    description: "Naturally dried fruits with no added sugars or preservatives",
    image: "/dried-fruits-collection.png",
    products: [
      {
        name: "Mango Strips",
        description: "Sweet and chewy mango strips from Kenyan mangoes",
        benefits: ["Vitamin C", "Natural Sugars", "No Preservatives"],
        image: "/mango-strips.png",
      },
      {
        name: "Pineapple Rings",
        description: "Tangy pineapple rings dried to perfection",
        benefits: ["Vitamin C", "Digestive Health", "Natural Energy"],
        image: "/pineapple-rings.png",
      },
      {
        name: "Banana Chips",
        description: "Crispy banana chips with a natural sweet taste",
        benefits: ["Potassium", "Natural Fiber", "Energy Boost"],
        image: "/banana-chips.png",
      },
    ],
  },
  {
    id: "mixes",
    name: "Trail Mixes",
    description: "Perfect combinations of nuts, fruits, and seeds for active lifestyles",
    image: "/trail-mix-collection.png",
    products: [
      {
        name: "Energy Trail Mix",
        description: "Power-packed mix of nuts, dried fruits, and seeds",
        benefits: ["High Energy", "Balanced Nutrition", "Perfect for Sports"],
        image: "/energy-trail-mix.png",
      },
      {
        name: "Tropical Mix",
        description: "Exotic blend of tropical fruits and coconut flakes",
        benefits: ["Tropical Flavors", "Natural Sweetness", "Vitamin Rich"],
        image: "/tropical-mix.png",
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted to-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Premium Quality Snacks
            </Badge>
            <h1 className="font-serif font-black text-4xl lg:text-5xl text-foreground">Our Product Range</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our carefully curated selection of healthy, natural snacks. Each product is crafted with the
              finest ingredients to fuel your active lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className={`mb-20 ${categoryIndex !== 0 ? "border-t border-border pt-20" : ""}`}>
              {/* Category Header */}
              <div className="text-center space-y-4 mb-12">
                <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">{category.name}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Category Hero Image */}
              <div className="mb-12">
                <div className="aspect-[16/6] rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.name} collection`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <Card
                    key={product.name}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="p-0">
                      <div className="aspect-square rounded-t-lg overflow-hidden bg-gradient-to-br from-muted to-card">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <CardTitle className="font-serif font-bold text-xl text-foreground">{product.name}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit) => (
                          <Badge key={benefit} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Button asChild className="w-full">
                          <Link href="/stores">Find in Stores</Link>
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

      {/* Nutritional Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Why Our Snacks Are Better</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every Crunchy Roots product is designed with your health and satisfaction in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">All Natural</h3>
                <p className="text-muted-foreground text-sm">
                  No artificial colors, flavors, or preservatives. Just pure, natural ingredients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Heart Healthy</h3>
                <p className="text-muted-foreground text-sm">
                  Rich in healthy fats, fiber, and nutrients that support cardiovascular health.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Energy Boost</h3>
                <p className="text-muted-foreground text-sm">
                  Perfect for pre-workout, post-workout, or anytime you need sustained energy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully sourced ingredients and rigorous quality control ensure excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="font-serif font-black text-3xl lg:text-4xl">Ready to Try Crunchy Roots?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Find our products at stores across Kenya or contact us for bulk orders and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/stores">Find Stores</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/partners">Become a Partner</Link>
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
            <p className="text-background/60">© 2024 Crunchy Roots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
