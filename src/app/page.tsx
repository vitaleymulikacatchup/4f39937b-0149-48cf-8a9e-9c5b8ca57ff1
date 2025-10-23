"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, BarChart3, Car, DollarSign, FileText, HelpCircle, Heart, Linkedin, MessageCircle, MessageSquare, Settings, Shield, Star, ThumbsUp, TrendingUp, Users } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Inventory", id: "inventory" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoDealer Pro"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="PIDOR"
          description="Discover premium vehicles with competitive financing, expert service, and unmatched customer satisfaction at our trusted dealership."
          tag="Premium Dealership"
          tagIcon={Car}
          imageSrc="https://images.pexels.com/photos/7144181/pexels-photo-7144181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Three business professionals discussing car purchase details inside a modern dealership."
          imagePosition="right"
          buttons={[
            { text: "View Inventory", href: "inventory" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About AutoDealer Pro"
          description={[
            "For over 15 years, we've been helping customers find their perfect vehicle with transparency, integrity, and exceptional service.",
            "Our experienced team provides personalized guidance through every step of your car buying journey, from selection to financing to ongoing support."
          ]}
          showBorder={true}
          buttons={[
            { text: "Learn More", href: "services" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Why Choose Us"
          description="Experience the difference with our comprehensive automotive services"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              id: "01",
              title: "Quality Inspection",
              description: "Every vehicle undergoes rigorous 150-point inspection to ensure reliability and safety standards",
              imageSrc: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "02",
              title: "Competitive Financing",
              description: "Flexible financing options with competitive rates and terms tailored to your budget",
              imageSrc: "https://images.pexels.com/photos/29289483/pexels-photo-29289483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "03",
              title: "Lifetime Support",
              description: "Ongoing maintenance support and warranty services to keep your vehicle running smoothly",
              imageSrc: "https://images.pexels.com/photos/8265582/pexels-photo-8265582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles"
          tag="Inventory"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "BMW",
              name: "330i Sedan",
              price: "$45,990",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "BMW 330i Sedan"
            },
            {
              id: "2",
              brand: "Mercedes-Benz",
              name: "C-Class Coupe",
              price: "$52,500",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/29289483/pexels-photo-29289483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mercedes-Benz C-Class Coupe"
            },
            {
              id: "3",
              brand: "Audi",
              name: "Q5 SUV",
              price: "$48,750",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/8265582/pexels-photo-8265582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Audi Q5 SUV"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Financing Options"
          description="Choose the financing plan that works best for you"
          tag="Financing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "standard",
              badge: "Popular Choice",
              badgeIcon: TrendingUp,
              price: "3.9% APR",
              subtitle: "Standard financing for qualified buyers",
              features: [
                "Up to 72 months financing",
                "No prepayment penalties",
                "Quick approval process",
                "Competitive interest rates"
              ]
            },
            {
              id: "premium",
              badge: "Best Value",
              badgeIcon: Award,
              price: "2.9% APR",
              subtitle: "Premium financing with exclusive benefits",
              features: [
                "Up to 84 months financing",
                "Extended warranty included",
                "Priority service appointments",
                "Gap insurance coverage"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Track Record"
          description="Numbers that speak to our commitment and success"
          tag="Statistics"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "5,000+",
              title: "Cars Sold",
              description: "Vehicles delivered to satisfied customers",
              icon: Car
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Customer satisfaction rating",
              icon: ThumbsUp
            },
            {
              id: "3",
              value: "15+",
              title: "Years",
              description: "Years of automotive expertise",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced professionals dedicated to helping you find the perfect vehicle"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Sales Manager",
              description: "15+ years in automotive sales with expertise in luxury vehicles and customer relations.",
              imageSrc: "https://images.pexels.com/photos/7144236/pexels-photo-7144236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michael" }
              ]
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Finance Director",
              description: "Specialist in automotive financing with a track record of securing the best rates for customers.",
              imageSrc: "https://images.pexels.com/photos/4895435/pexels-photo-4895435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarah" }
              ]
            },
            {
              id: "3",
              name: "David Chen",
              role: "Service Manager",
              description: "Certified automotive technician ensuring every vehicle meets our quality standards.",
              imageSrc: "https://images.pexels.com/photos/4895435/pexels-photo-4895435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/david" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Customer Reviews"
          description="Hear what our customers have to say about their experience"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Robert Martinez",
              role: "Business Owner",
              testimonial: "Outstanding service from start to finish. The team helped me find the perfect vehicle within my budget and made the financing process seamless.",
              imageSrc: "https://images.pexels.com/photos/5264922/pexels-photo-5264922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Star
            },
            {
              id: "2",
              name: "Emily Davis",
              role: "Marketing Manager",
              testimonial: "Professional, transparent, and incredibly helpful. I felt confident in my purchase and would definitely recommend AutoDealer Pro to anyone.",
              imageSrc: "https://images.pexels.com/photos/5413728/pexels-photo-5413728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: ThumbsUp
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Engineer",
              testimonial: "The quality inspection process gave me peace of mind. My car has been running perfectly, and the ongoing support is exceptional.",
              imageSrc: "https://images.pexels.com/photos/9520199/pexels-photo-9520199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Shield
            },
            {
              id: "4",
              name: "Lisa Thompson",
              role: "Teacher",
              testimonial: "Great financing options and no pressure sales approach. The team really listened to my needs and found the perfect match.",
              imageSrc: "https://images.pexels.com/photos/6169027/pexels-photo-6169027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Heart
            },
            {
              id: "5",
              name: "Mark Anderson",
              role: "Consultant",
              testimonial: "Excellent customer service and fair pricing. The entire experience exceeded my expectations from test drive to delivery.",
              imageSrc: "https://images.pexels.com/photos/7621263/pexels-photo-7621263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about buying, financing, and our services"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What financing options do you offer?",
              content: "We offer competitive financing through multiple lenders with rates starting as low as 2.9% APR for qualified buyers. Our finance team works with all credit levels to find the best solution for your budget."
            },
            {
              id: "2",
              title: "Do you accept trade-ins?",
              content: "Yes, we accept trade-ins and provide fair market value assessments. Our team will evaluate your current vehicle and apply its value toward your new purchase."
            },
            {
              id: "3",
              title: "What warranty coverage is included?",
              content: "All our vehicles come with comprehensive warranty coverage. New vehicles include manufacturer warranties, while pre-owned vehicles receive our certified pre-owned warranty with roadside assistance."
            },
            {
              id: "4",
              title: "Can I schedule a test drive online?",
              content: "Absolutely! You can schedule test drives through our website or by calling our showroom. We recommend scheduling in advance to ensure your preferred vehicle is available."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Automotive Insights"
          description="Stay informed with the latest automotive news and tips"
          tag="Blog"
          tagIcon={FileText}
          blogs={[
            {
              id: "1",
              category: "Maintenance",
              title: "Essential Car Maintenance Tips",
              excerpt: "Keep your vehicle running smoothly with these essential maintenance guidelines and seasonal care tips.",
              imageSrc: "https://images.pexels.com/photos/20867316/pexels-photo-20867316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Mike Rodriguez",
              authorAvatar: "https://images.pexels.com/photos/7144236/pexels-photo-7144236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Buying Guide",
              title: "First-Time Car Buyer's Guide",
              excerpt: "Everything you need to know about purchasing your first vehicle, from budgeting to financing options.",
              imageSrc: "https://images.pexels.com/photos/4895421/pexels-photo-4895421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Sarah Johnson",
              authorAvatar: "https://images.pexels.com/photos/4895435/pexels-photo-4895435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Industry News",
              title: "2025 Automotive Trends",
              excerpt: "Discover the latest trends shaping the automotive industry and what they mean for car buyers.",
              imageSrc: "https://images.pexels.com/photos/34392837/pexels-photo-34392837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "David Chen",
              authorAvatar: "https://images.pexels.com/photos/4895435/pexels-photo-4895435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact Us"
          tagIcon={MessageSquare}
          title="Ready to Find Your Perfect Car?"
          description="Get in touch with our team for personalized assistance, test drives, and financing options tailored to your needs."
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By submitting, you agree to receive communications about our vehicles and services. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Cars", href: "inventory" },
                { label: "Pre-Owned", href: "inventory" },
                { label: "Luxury Vehicles", href: "inventory" },
                { label: "Featured Deals", href: "inventory" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "services" },
                { label: "Trade-Ins", href: "services" },
                { label: "Service Center", href: "services" },
                { label: "Parts & Accessories", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Careers", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 AutoDealer Pro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}