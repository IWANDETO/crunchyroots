import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Handshake, TrendingUp, Users, Award, Package, Truck, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

const partnershipBenefits = [
  {
    icon: TrendingUp,
    title: "Growing Market",
    description: "Tap into Kenya's expanding health-conscious consumer market with premium products.",
  },
  {
    icon: Award,
    title: "Premium Brand",
    description: "Partner with a trusted brand known for quality, natural ingredients, and customer satisfaction.",
  },
  {
    icon: Package,
    title: "Diverse Product Range",
    description: "Offer your customers a complete selection of nuts, dried fruits, and trail mixes.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Consistent product availability with flexible delivery schedules to meet your needs.",
  },
  {
    icon: Users,
    title: "Marketing Support",
    description: "Benefit from our marketing campaigns, promotional materials, and brand recognition.",
  },
  {
    icon: Handshake,
    title: "Partnership Support",
    description: "Dedicated account management and ongoing support to help your business grow.",
  },
]

const partnershipTypes = [
  {
    title: "Retail Partners",
    description: "Supermarkets, convenience stores, and specialty health food retailers",
    requirements: [
      "Established retail presence",
      "Commitment to product quality",
      "Adequate storage facilities",
      "Customer service excellence",
    ],
    benefits: [
      "Competitive wholesale pricing",
      "Marketing support materials",
      "Regular product training",
      "Flexible payment terms",
    ],
  },
  {
    title: "Distributors",
    description: "Regional distributors and wholesalers serving multiple retail outlets",
    requirements: [
      "Distribution network in place",
      "Warehouse and logistics capability",
      "Sales team and market knowledge",
      "Financial stability",
    ],
    benefits: [
      "Exclusive territory rights",
      "Volume-based pricing tiers",
      "Co-marketing opportunities",
      "Priority product allocation",
    ],
  },
  {
    title: "Corporate Partners",
    description: "Offices, gyms, hotels, and institutions seeking healthy snack options",
    requirements: [
      "Regular bulk order commitment",
      "Suitable storage conditions",
      "Payment reliability",
      "Brand alignment",
    ],
    benefits: ["Custom packaging options", "Direct delivery service", "Corporate pricing", "Flexible order scheduling"],
  },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted to-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Business Partnerships
            </Badge>
            <h1 className="font-serif font-black text-4xl lg:text-5xl text-foreground">Partner With Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join the Crunchy Roots family and grow your business with Kenya's premium healthy snack brand. We offer
              attractive partnership opportunities for retailers, distributors, and corporate clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">
              Why Partner With Crunchy Roots?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to building mutually beneficial partnerships that drive growth for both parties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit) => (
              <Card key={benefit.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-xl">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer flexible partnership models to suit different business types and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => (
              <Card key={type.title} className="h-full">
                <CardHeader>
                  <CardTitle className="font-serif font-bold text-xl text-center">{type.title}</CardTitle>
                  <p className="text-muted-foreground text-center">{type.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-serif font-bold text-lg mb-3 text-foreground">Requirements</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-lg mb-3 text-foreground">Benefits</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Get Started Today</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to partner with Crunchy Roots? Fill out the form and our partnership team will get back to you
                  within 24 hours to discuss opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">Call Us</h3>
                    <p className="text-muted-foreground">+254 700 000 100</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">partners@crunchyroots.co.ke</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">Visit Us</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-serif font-bold text-2xl">Partnership Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+254 700 000 000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnershipType">Partnership Type</Label>
                    <select
                      id="partnershipType"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select partnership type</option>
                      <option value="retail">Retail Partner</option>
                      <option value="distributor">Distributor</option>
                      <option value="corporate">Corporate Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and partnership interests..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="font-serif font-black text-3xl lg:text-4xl">Ready to Grow Together?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join our network of successful partners and be part of Kenya's healthy snacking revolution. Together, we
              can bring premium nutrition to more consumers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">View Our Products</Link>
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
            <p className="text-background/60">© 2024 Crunchy Roots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
