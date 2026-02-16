import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3"><span className="text-accent">📦</span> U-MOVE</h3>
          <p className="text-muted text-sm">Perth's trusted shipping container experts. 25+ years of experience delivering quality container solutions across Western Australia.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <Link href="/storage" className="hover:text-white transition-colors">Self Storage</Link>
            <Link href="/sales" className="hover:text-white transition-colors">Container Sales</Link>
            <Link href="/hire" className="hover:text-white transition-colors">Container Hire</Link>
            <Link href="/modifications" className="hover:text-white transition-colors">Modifications</Link>
            <Link href="/mining" className="hover:text-white transition-colors">Mining & Ops</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <p>📍 836 Cockburn Road, Henderson WA 6166</p>
            <p>📞 (08) 9459 8888</p>
            <p>✉️ sales@u-move.com.au</p>
            <p>🕐 Mon-Fri 8am-4pm</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com/umoveaustralia" target="_blank" rel="noopener" className="hover:text-accent transition-colors">📘</a>
            <a href="https://instagram.com/umove_australia" target="_blank" rel="noopener" className="hover:text-accent transition-colors">📸</a>
            <a href="https://tiktok.com/@u.move.australia" target="_blank" rel="noopener" className="hover:text-accent transition-colors">🎵</a>
          </div>
          <div className="mt-6">
            <Link href="/quote" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border text-center py-4 text-sm text-muted">
        © {new Date().getFullYear()} U-Move Australia. All rights reserved.
      </div>
    </footer>
  );
}
