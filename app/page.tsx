'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/placeholder.svg?height=32&width=32" alt="Sparkle Logo" width={32} height={32} />
              <span className="hidden font-bold text-[#0077B6] sm:inline-block">Sparkle Cleaning</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#services" className="text-[#0077B6] hover:text-[#48CAE4]">Services</Link>
              <Link href="#pricing" className="text-[#0077B6] hover:text-[#48CAE4]">Pricing</Link>
              <Link href="#about" className="text-[#0077B6] hover:text-[#48CAE4]">About</Link>
              <Link href="#contact" className="text-[#0077B6] hover:text-[#48CAE4]">Contact</Link>
              <Link href="#faq" className="text-[#0077B6] hover:text-[#48CAE4]">FAQ</Link>
            </nav>
          </div>
          <Button className="ml-auto bg-[#90BE6D] text-white hover:bg-[#B5E48C] hover:text-[#2D6A4F]">Book Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#0077B6] to-[#48CAE4] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Sparkle Clean, Sparkle Bright
          </h1>
          <p className="mx-auto max-w-[700px] text-lg sm:text-xl mt-4 mb-8">
            Professional cleaning services that make your space shine. Book online in minutes!
          </p>
          <Button size="lg" className="bg-[#90BE6D] text-white hover:bg-[#B5E48C] hover:text-[#2D6A4F]">Get Started</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Residential Cleaning', 'Commercial Cleaning', 'Deep Cleaning', 'Move-in/Move-out Cleaning', 'Post-Construction Cleaning', 'Carpet Cleaning'].map((service, index) => (
              <Card key={index} className="border-[#90BE6D]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0077B6]">{service}</h3>
                  <p className="text-gray-600">Professional {service.toLowerCase()} tailored to your needs.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Book Your Cleaning</h2>
          <div className="max-w-md mx-auto">
            <Card className="border-[#90BE6D]">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input type="text" placeholder="Full Name" className="border-[#0077B6]" />
                  <Input type="email" placeholder="Email Address" className="border-[#0077B6]" />
                  <Input type="tel" placeholder="Phone Number" className="border-[#0077B6]" />
                  <select className="w-full p-2 border rounded border-[#0077B6]">
                    <option>Select Service</option>
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                  </select>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-[#0077B6]"
                  />
                  <Button className="w-full bg-[#90BE6D] text-white hover:bg-[#B5E48C] hover:text-[#2D6A4F]">Book Now</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Our Pricing</h2>
          <Tabs defaultValue="residential" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="residential" className="data-[state=active]:bg-[#0077B6] data-[state=active]:text-white">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="data-[state=active]:bg-[#0077B6] data-[state=active]:text-white">Commercial</TabsTrigger>
            </TabsList>
            <TabsContent value="residential" className="mt-6">
              <Card className="border-[#90BE6D]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#0077B6]">Residential Cleaning Rates</h3>
                  <ul className="space-y-2">
                    <li>Studio Apartment: $80</li>
                    <li>1 Bedroom Apartment: $100</li>
                    <li>2 Bedroom Apartment: $120</li>
                    <li>3 Bedroom House: $150</li>
                    <li>4+ Bedroom House: Custom Quote</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="commercial" className="mt-6">
              <Card className="border-[#90BE6D]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#0077B6]">Commercial Cleaning Rates</h3>
                  <p>Our commercial cleaning rates are customized based on your specific needs and the size of your space. Please contact us for a personalized quote.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John D.', text: 'Sparkle Cleaning transformed my home! Their attention to detail is unmatched.' },
              { name: 'Sarah M.', text: 'I have  been using Sparkle for my office, and the results are always impressive.' },
              { name: 'Robert L.', text: 'Professional, punctual, and thorough. Highly recommend their services!' },
            ].map((testimonial, index) => (
              <Card key={index} className="border-[#90BE6D]">
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600">"{testimonial.text}"</p>
                  <p className="font-semibold text-[#0077B6]">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Before and After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#0077B6]">Kitchen Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <Image src="/placeholder.svg?height=300&width=400" alt="Kitchen Before" width={400} height={300} className="rounded-lg" />
                <Image src="/placeholder.svg?height=300&width=400" alt="Kitchen After" width={400} height={300} className="rounded-lg" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#0077B6]">Living Room Makeover</h3>
              <div className="grid grid-cols-2 gap-4">
                <Image src="/placeholder.svg?height=300&width=400" alt="Living Room Before" width={400} height={300} className="rounded-lg" />
                <Image src="/placeholder.svg?height=300&width=400" alt="Living Room After" width={400} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">About Sparkle Cleaning</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-gray-600">
              Sparkle Cleaning has been providing top-notch cleaning services since 2010. Our team of experienced professionals is dedicated to making your space shine.
            </p>
            <p className="text-lg mb-6 text-gray-600">
              We use eco-friendly cleaning products and state-of-the-art equipment to ensure the best results while being kind to the environment.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to provide exceptional cleaning services that exceed our clients' expectations, creating healthier and more comfortable living and working environments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#90BE6D]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#0077B6]">Send Us a Message</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Full Name" className="border-[#0077B6]" />
                  <Input type="email" placeholder="Email Address" className="border-[#0077B6]" />
                  <Input type="tel" placeholder="Phone Number" className="border-[#0077B6]" />
                  <Textarea placeholder="Your Message" className="border-[#0077B6]" />
                  <Button type="submit" className="w-full bg-[#90BE6D] text-white hover:bg-[#B5E48C] hover:text-[#2D6A4F]">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <Card className="border-[#90BE6D]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#0077B6]">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                
                    <MapPin className="mr-2 text-[#0077B6]" />
                    123 Cleaning St, Sparkle City, SC 12345
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Phone className="mr-2 text-[#0077B6]" />
                    (555) 123-4567
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Mail className="mr-2 text-[#0077B6]" />
                    info@sparklecleaning.com
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Cleaning Tips & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '10 Quick Cleaning Hacks for Busy Professionals', excerpt: 'Discover time-saving cleaning tricks...' },
              { title: 'The Benefits of Green Cleaning Products', excerpt: 'Learn why eco-friendly cleaning is important...' },
              { title: 'How Often Should You Deep Clean Your Home?', excerpt: 'Find out the ideal frequency for deep cleaning...' },
            ].map((post, index) => (
              <Card key={index} className="border-[#90BE6D]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0077B6]">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href="#" className="text-[#90BE6D] hover:text-[#B5E48C]">Read More</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-[#90BE6D]">
              <AccordionTrigger className="text-[#0077B6]">What cleaning products do you use?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We use eco-friendly, non-toxic cleaning products that are safe for your family and pets while still providing excellent cleaning results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-[#90BE6D]">
              <AccordionTrigger className="text-[#0077B6]">How often should I schedule a cleaning service?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The frequency depends on your needs and lifestyle. We offer weekly, bi-weekly, and monthly cleaning services, as well as one-time deep cleans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#90BE6D]">
              <AccordionTrigger className="text-[#0077B6]">Are your cleaning staff insured and bonded?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, all our cleaning professionals are fully insured and bonded for your peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-[#90BE6D]">
              <AccordionTrigger className="text-[#0077B6]">What's your cancellation policy?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We require at least 24 hours notice for cancellations. Late cancellations may be subject to a fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-12 md:py-24 lg:py-32 bg-[#F0F8FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0077B6]">Our Service Area</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=450&width=800" alt="Service Area Map" width={800} height={450} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#023E8A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sparkle Cleaning</h3>
              <p>Professional cleaning services that make your space shine.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#services" className="hover:text-[#48CAE4]">Services</Link></li>
                <li><Link href="#pricing" className="hover:text-[#48CAE4]">Pricing</Link></li>
                <li><Link href="#about" className="hover:text-[#48CAE4]">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-[#48CAE4]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook" className="hover:text-[#48CAE4]"><Facebook /></Link>
                <Link href="#" aria-label="Twitter" className="hover:text-[#48CAE4]"><Twitter /></Link>
                <Link href="#" aria-label="Instagram" className="hover:text-[#48CAE4]"><Instagram /></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#48CAE4] text-center">
            <p>&copy; 2024 Sparkle Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Chat Button */}
      <Link
        href="https://wa.me/1234567890"
        className="fixed bottom-4 right-4 bg-[#90BE6D] text-white p-4 rounded-full shadow-lg hover:bg-[#B5E48C] hover:text-[#2D6A4F] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </Link>

      {/* Special Offer Popup */}
      <div className="fixed bottom-4 left-4 max-w-sm">
        <Card className="border-[#90BE6D]">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#0077B6]">Special Offer!</h3>
            <p className="mb-4 text-gray-600">Get 20% off your first cleaning service. Use code SPARKLE20 at checkout.</p>
            <Button className="w-full bg-[#90BE6D] text-white hover:bg-[#B5E48C] hover:text-[#2D6A4F]">Claim Offer</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}