import Link from "next/link";

const values = [
  { icon: "🤝", title: "Reliability", desc: "When we say we'll deliver, we deliver. On time, every time." },
  { icon: "🛡️", title: "Safety", desc: "Safety is non-negotiable in everything we build and deliver." },
  { icon: "💰", title: "Value", desc: "Quality container solutions at prices that make sense." },
  { icon: "🌟", title: "Excellence", desc: "We take pride in every container that leaves our workshop." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">About <span className="text-accent">U-Move</span> Australia</h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">Perth-founded. WA-operated. 25+ years of delivering container solutions across Western Australia.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>For over 25 years, U-Move Australia has been providing quality shipping container solutions to businesses and individuals across Western Australia.</p>
              <p>What started as a small operation in Perth has grown into one of WA&apos;s most trusted container companies. From our fully equipped Henderson facility, we handle everything from simple container sales to complex custom modifications for the mining industry.</p>
              <p>Our team brings decades of combined experience, and our commitment to quality, reliability, and fair pricing has earned us a reputation as Perth&apos;s go-to container experts.</p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl h-72 flex items-center justify-center text-8xl corrugated">📦</div>
        </div>
      </section>

      <section className="py-20 bg-surface corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="text-muted mt-2 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-surface border border-border rounded-xl h-64 flex items-center justify-center text-6xl corrugated">🏭</div>
          <div>
            <h2 className="text-3xl font-bold">Our Henderson Facility</h2>
            <p className="text-muted mt-4">Our base at 836 Cockburn Road, Henderson houses our container yard, sales office, and fully equipped modification workshop. Just 20 minutes south of Perth CBD, the facility features secure access and everything we need to deliver world-class container solutions.</p>
            <div className="mt-6">
              <Link href="/quote" className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">Visit Us or Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
