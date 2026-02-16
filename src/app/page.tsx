import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";

const services = [
  { icon: "🏗️", title: "Self Storage", desc: "Secure container storage at our Henderson facility. Short and long-term options.", href: "/storage" },
  { icon: "🚛", title: "Container Sales", desc: "New and used shipping containers in 10ft, 20ft, 40ft, and high-cube sizes.", href: "/sales" },
  { icon: "📋", title: "Container Hire", desc: "Flexible hire terms to suit your project. Competitive daily, weekly, and monthly rates.", href: "/hire" },
  { icon: "🔧", title: "Modifications", desc: "Custom container fitouts — offices, workshops, ablutions, cool rooms, and more.", href: "/modifications" },
  { icon: "⛏️", title: "Mining & Ops", desc: "Purpose-built container solutions for mining sites and remote operations.", href: "/mining" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "5,000+", label: "Containers Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "WA-Wide", label: "Delivery Coverage" },
];

const whyUs = [
  { icon: "🏆", title: "25+ Years Experience", desc: "Decades of industry knowledge means you get the right container solution, first time." },
  { icon: "💰", title: "Competitive Pricing", desc: "Affordable container solutions without compromising on quality or service." },
  { icon: "🚚", title: "WA-Wide Delivery", desc: "We deliver containers anywhere in Western Australia, from Perth CBD to remote mine sites." },
  { icon: "🔧", title: "Custom Solutions", desc: "Our fully equipped workshop can modify any container to your exact specifications." },
];

const industries = [
  { icon: "⛏️", name: "Mining" },
  { icon: "🛢️", name: "Oil & Gas" },
  { icon: "🏗️", name: "Construction" },
  { icon: "🏪", name: "Retail" },
  { icon: "🏠", name: "Residential" },
  { icon: "🌾", name: "Rural" },
  { icon: "🏭", name: "Industrial" },
  { icon: "📦", name: "Logistics" },
];

const testimonials = [
  { name: "Mark Thompson", role: "Site Manager, BHP Contractor", text: "U-Move delivered 12 modified site offices to our Pilbara operation on time and on budget. Their understanding of mining requirements is second to none." },
  { name: "Sarah Chen", role: "Owner, Pop-Up Café", text: "They turned a 20ft container into my dream café! The team was professional, creative, and made the whole process incredibly easy." },
  { name: "Dave Richardson", role: "Builder, Richardson Homes", text: "We've used U-Move for on-site storage for 8 years. Reliable, affordable, and their customer service is always excellent." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden corrugated">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue/10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">Perth&apos;s #1 Container Experts</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Shipping Container <span className="text-accent">Solutions</span> That Move With You
            </h1>
            <p className="text-lg md:text-xl text-muted mt-6 max-w-2xl">
              From secure storage to custom-built modifications, U-Move Australia has been delivering quality container solutions across Western Australia for over 25 years.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/quote" className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors pulse-glow">
                Get a Free Quote
              </Link>
              <Link href="/sales" className="border border-border hover:border-white text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
                Browse Containers
              </Link>
            </div>
          </div>
          {/* Decorative container shape */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 h-48 border-2 border-accent/30 rounded-lg corrugated opacity-60">
            <div className="absolute -top-3 left-4 w-16 h-3 bg-accent/40 rounded-sm" />
            <div className="absolute -top-3 right-4 w-16 h-3 bg-accent/40 rounded-sm" />
            <div className="absolute inset-4 border border-accent/20 rounded flex items-center justify-center text-accent/40 text-6xl">📦</div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Our Services" title="Container Solutions for Every Need" desc="Whether you need to store, buy, hire, or customise — we've got you covered." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted mt-2 text-sm">{s.desc}</p>
                <span className="inline-block mt-4 text-accent text-sm font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Why U-Move" title="Why Choose U-Move Australia?" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center p-6">
                <div className="text-5xl mb-4">{w.icon}</div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="text-muted mt-2 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Industries" title="Serving Every Industry" desc="From mining giants to homeowners, our containers work everywhere." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-surface border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors">
                <div className="text-4xl mb-2">{ind.icon}</div>
                <div className="font-semibold">{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Testimonials" title="What Our Customers Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-navy border border-border rounded-xl p-6">
                <div className="text-accent text-3xl mb-3">★★★★★</div>
                <p className="text-muted text-sm italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted mt-4 text-lg">Get a free, no-obligation quote today. Our team is ready to find the perfect container solution for you.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/quote" className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:0894598888" className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
              📞 (08) 9459 8888
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="FAQ" title="Frequently Asked Questions" />
          <FAQ />
        </div>
      </section>
    </>
  );
}
