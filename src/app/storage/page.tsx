import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const options = [
  { size: "10ft", dims: "2.9m × 2.4m × 2.6m", desc: "Perfect for small household storage or tools.", price: "From $30/week" },
  { size: "20ft", dims: "6.0m × 2.4m × 2.6m", desc: "Our most popular — fits a 1-2 bedroom home.", price: "From $45/week" },
  { size: "40ft", dims: "12.0m × 2.4m × 2.6m", desc: "Maximum space for large moves or commercial storage.", price: "From $65/week" },
];

export default function StoragePage() {
  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Self Storage</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Secure Container <span className="text-accent">Storage</span></h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">Safe, affordable, and flexible self-storage solutions at our secured Henderson facility.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Options" title="Storage Sizes & Rates" desc="Choose the container size that suits your needs." />
          <div className="grid md:grid-cols-3 gap-6">
            {options.map((o) => (
              <div key={o.size} className="bg-surface border border-border rounded-xl p-8 text-center hover:border-accent/50 transition-colors">
                <div className="text-5xl font-bold text-accent">{o.size}</div>
                <div className="text-muted text-sm mt-2">{o.dims}</div>
                <p className="mt-4 text-sm text-muted">{o.desc}</p>
                <div className="mt-6 text-2xl font-bold">{o.price}</div>
                <Link href="/quote" className="mt-6 inline-block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface corrugated">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Henderson Facility</h2>
            <p className="text-muted mt-4">Our secure storage yard is located at 836 Cockburn Road, Henderson — just 20 minutes south of Perth CBD. The facility features restricted access, CCTV monitoring, and a fully equipped workshop for any container needs.</p>
            <ul className="mt-6 space-y-3">
              {["🔒 Restricted access & CCTV", "📦 Multiple container sizes", "🚛 Delivery & pickup available", "📋 Flexible short & long-term leases", "📦 Packing materials available"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy border border-border rounded-xl h-64 flex items-center justify-center text-6xl corrugated">🏭</div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Need Storage? Let&apos;s Talk.</h2>
          <p className="text-muted mt-4">We&apos;ll help you find the right storage solution at the right price.</p>
          <Link href="/quote" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
