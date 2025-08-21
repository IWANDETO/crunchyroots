import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Leaf, Heart, Users, Target } from "lucide-react"
import Link from "next/link"

const companyValues = [
  {
    icon: Leaf,
    title: "Natural & Pure",
    description: "We believe in the power of natural ingredients, free from artificial additives and preservatives.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Every product is crafted with your health and wellbeing as our top priority.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Supporting local farmers and communities while building lasting relationships with our customers.",
  },
  {
    icon: Target,
    title: "Quality Excellence",
    description: "Uncompromising commitment to quality in every step of our production process.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted to-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get in Touch
            </Badge>
            <h1 className="font-serif font-black text-4xl lg:text-5xl text-foreground">Contact & About Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn more about Crunchy Roots and get in touch with our team. We're here to help with any questions about
              our products, partnerships, or bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crunchy Roots was born from a simple belief: healthy snacking shouldn't mean compromising on taste or
                  quality. Founded in Kenya, we set out to create premium snacks that fuel active lifestyles while
                  supporting local communities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey began with a passion for natural, wholesome ingredients sourced from trusted local
                  farmers. Today, we're proud to offer a diverse range of nuts, dried fruits, and trail mixes that meet
                  the highest standards of quality and nutrition.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every Crunchy Roots product represents our commitment to health, sustainability, and community
                  development. We're not just creating snacks – we're building a healthier future for Kenya, one bite at
                  a time.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <img
                  src="/crunchy-roots-story.png"
                  alt="Crunchy Roots company story and mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do, from sourcing ingredients to serving our customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value) => (
                <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-xl">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products, interested in partnerships, or need bulk orders? We'd love to hear from
              you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+254 700 000 100</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@crunchyroots.co.ke</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg">Address</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                    <p className="text-sm text-muted-foreground">Visit by appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl">Quick Contact</h3>
                <div className="grid gap-3">
                  <Button asChild className="justify-start bg-transparent" variant="outline">
                    <Link href="tel:+254700000100">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </Link>
                  </Button>
                  <Button asChild className="justify-start bg-transparent" variant="outline">
                    <Link href="mailto:info@crunchyroots.co.ke">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                  <Button asChild className="justify-start bg-transparent" variant="outline">
                    <Link href="/partners">
                      <Users className="w-4 h-4 mr-2" />
                      Partnership Inquiries
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-serif font-bold text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
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
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="bulk">Bulk Orders</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
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
            <h2 className="font-serif font-black text-3xl lg:text-4xl">Ready to Experience Crunchy Roots?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Discover our premium healthy snacks at stores across Kenya or get in touch to explore partnership
              opportunities.
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
                <Link href="/products">View Products</Link>
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
