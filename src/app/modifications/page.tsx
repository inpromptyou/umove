import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const mods = [
  { icon: "🏢", title: "Site Offices", desc: "Fully fitted offices with insulation, power, lighting, and climate control." },
  { icon: "🔧", title: "Workshops", desc: "Custom workshop containers with workbenches, storage, and electrical fitouts." },
  { icon: "🚿", title: "Ablution Blocks", desc: "Shower, toilet, and laundry facilities built to compliance standards." },
  { icon: "❄️", title: "Cool Rooms", desc: "Temperature-controlled containers for food storage and cold chain logistics." },
  { icon: "🏪", title: "Pop-Up Shops", desc: "Retail-ready containers with servery windows, shelving, and branding." },
  { icon: "⚠️", title: "Dangerous Goods", desc: "Compliant DG storage containers with bunding, ventilation, and signage." },
];

const steps = [
  { num: "01", title: "Consult", desc: "Tell us what you need. We'll work with you to understand your requirements and budget." },
  { num: "02", title: "Design", desc: "Our team creates a custom design and provides a detailed quote for your approval." },
  { num: "03", title: "Build", desc: "Our skilled team builds your modification in our fully-equipped Henderson workshop." },
  { num: "04", title: "Deliver", desc: "We deliver your finished container to your site, anywhere in WA." },
];

export default function ModificationsPage() {
  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Custom Modifications</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Container <span className="text-accent">Modifications</span></h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">From simple additions to complete custom builds — if you can imagine it, we can build it.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="What We Build" title="Modification Types" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mods.map((m) => (
              <div key={m.title} className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="text-muted mt-2 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading tag="Our Process" title="How It Works" desc="From concept to delivery in four simple steps." />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative p-6">
                <div className="text-5xl font-bold text-accent/20">{s.num}</div>
                <h3 className="text-lg font-semibold mt-2">{s.title}</h3>
                <p className="text-muted mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Got a Custom Project in Mind?</h2>
          <p className="text-muted mt-4">Our team loves a challenge. Tell us what you need and we&apos;ll make it happen.</p>
          <Link href="/quote" className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
