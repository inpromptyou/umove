import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const sizes = [
  { size: "10ft", dims: "2.9m × 2.4m × 2.6m", daily: "$8", weekly: "$40", monthly: "$120", best: "Tools & small storage" },
  { size: "20ft", dims: "6.0m × 2.4m × 2.6m", daily: "$12", weekly: "$60", monthly: "$180", best: "Construction sites, events" },
  { size: "40ft", dims: "12.0m × 2.4m × 2.6m", daily: "$18", weekly: "$90", monthly: "$270", best: "Large projects, warehousing" },
  { size: "40ft HC", dims: "12.0m × 2.4m × 2.9m", daily: "$20", weekly: "$100", monthly: "$300", best: "Maximum height clearance" },
];

export default function HirePage() {
  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Container Hire</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Hire a Shipping <span className="text-accent">Container</span></h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">Flexible hire terms with competitive rates. From a few weeks to a few years — we&apos;ve got you covered.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Rates" title="Hire Rates Comparison" desc="All rates are indicative. Contact us for exact pricing based on your requirements." />
          <div className="overflow-x-auto">
            <table className="w-full bg-surface border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Size</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Dimensions</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Daily</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Weekly</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Monthly</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s) => (
                  <tr key={s.size} className="border-t border-border hover:bg-navy/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-accent">{s.size}</td>
                    <td className="px-6 py-4 text-sm text-muted">{s.dims}</td>
                    <td className="px-6 py-4 font-semibold">{s.daily}</td>
                    <td className="px-6 py-4 font-semibold">{s.weekly}</td>
                    <td className="px-6 py-4 font-semibold">{s.monthly}</td>
                    <td className="px-6 py-4 text-sm text-muted">{s.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: "📅", title: "Flexible Terms", desc: "Hire for days, weeks, months, or years. No lock-in contracts." },
            { icon: "🚚", title: "Delivery Included Options", desc: "We can deliver and pick up your container at competitive rates." },
            { icon: "🔄", title: "Easy Extensions", desc: "Need it longer? Just call us. Extending your hire is hassle-free." },
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
          <h2 className="text-3xl font-bold">Ready to Hire?</h2>
          <p className="text-muted mt-4">Get a personalised hire quote in minutes.</p>
          <Link href="/quote" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
