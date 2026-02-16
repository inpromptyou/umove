import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  { icon: "🏢", title: "Site Offices", desc: "Climate-controlled offices built for harsh conditions with full electrical and data fitouts." },
  { icon: "🍽️", title: "Crib Rooms", desc: "Comfortable break and meal rooms with kitchenette, seating, and air conditioning." },
  { icon: "🚿", title: "Ablution Blocks", desc: "Compliant shower, toilet, and laundry facilities rated for remote site use." },
  { icon: "⚠️", title: "DG Storage", desc: "Dangerous goods containers with bunding, ventilation, signage, and compliance documentation." },
  { icon: "🔧", title: "Workshop Units", desc: "Portable workshops with workbenches, tool storage, lighting, and power." },
  { icon: "📦", title: "Laydown Storage", desc: "Secure general storage containers for equipment, parts, and consumables." },
];

export default function MiningPage() {
  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Mining & Operations</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Mining <span className="text-accent">Container</span> Solutions</h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">Purpose-built container solutions for mining sites and remote operations across Western Australia.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Solutions" title="Mining & Remote Site Containers" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-muted mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface corrugated">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Built for the Australian Outback</h2>
            <ul className="mt-6 space-y-4">
              {[
                "🌡️ Engineered for extreme heat and harsh conditions",
                "✅ Safety compliance and documentation included",
                "🚛 Remote delivery anywhere in Australia",
                "⚡ Full electrical, plumbing, and data fitouts",
                "🔒 Secure, lockable, and weatherproof",
                "📋 Customised to your site-specific requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-navy border border-border rounded-xl h-64 flex items-center justify-center text-6xl corrugated">⛏️</div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Need Mining Containers?</h2>
          <p className="text-muted mt-4">We understand the mining industry. Let&apos;s talk about your site requirements.</p>
          <Link href="/quote" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
