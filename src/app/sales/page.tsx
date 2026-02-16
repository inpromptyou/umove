import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const containers = [
  { size: "10ft", type: "Standard", dims: "2.9m × 2.4m × 2.6m", newPrice: "$2,800", usedPrice: "$1,800", popular: false },
  { size: "20ft", type: "Standard", dims: "6.0m × 2.4m × 2.6m", newPrice: "$4,200", usedPrice: "$2,800", popular: true },
  { size: "40ft", type: "Standard", dims: "12.0m × 2.4m × 2.6m", newPrice: "$6,500", usedPrice: "$4,200", popular: false },
  { size: "40ft", type: "High Cube", dims: "12.0m × 2.4m × 2.9m", newPrice: "$7,200", usedPrice: "$4,800", popular: false },
];

export default function SalesPage() {
  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Container Sales</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Buy Shipping <span className="text-accent">Containers</span></h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">New and used shipping containers at competitive prices. All containers inspected and certified wind & watertight.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Our Range" title="Container Sizes & Pricing" desc="Prices are indicative — contact us for current stock and exact quotes." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {containers.map((c, i) => (
              <div key={i} className={`bg-surface border rounded-xl p-6 relative ${c.popular ? "border-accent" : "border-border"}`}>
                {c.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>}
                <div className="text-3xl font-bold text-accent">{c.size}</div>
                <div className="text-sm text-muted">{c.type}</div>
                <div className="text-xs text-muted mt-1">{c.dims}</div>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm"><span>New</span><span className="font-bold">{c.newPrice}</span></div>
                  <div className="flex justify-between text-sm"><span>Used</span><span className="font-bold">{c.usedPrice}</span></div>
                </div>
                <Link href="/quote" className="mt-6 block text-center bg-accent hover:bg-accent-hover text-white py-2.5 rounded-lg font-semibold text-sm transition-colors">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: "✅", title: "Quality Guaranteed", desc: "Every container is inspected and certified wind & watertight before sale." },
            { icon: "🚚", title: "WA-Wide Delivery", desc: "We'll deliver your container anywhere in Western Australia." },
            { icon: "🔧", title: "Modifications Available", desc: "Need custom doors, ventilation, or a full fitout? We do it all." },
          ].map((f) => (
            <div key={f.title} className="text-center p-6">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-muted mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Find Your Perfect Container</h2>
          <p className="text-muted mt-4">Talk to our team about current stock and pricing.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/quote" className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">Get a Quote</Link>
            <a href="tel:0894598888" className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">📞 (08) 9459 8888</a>
          </div>
        </div>
      </section>
    </>
  );
}
