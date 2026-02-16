"use client";
import { useState } from "react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-16 corrugated">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get a Quote</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Request a <span className="text-accent">Free Quote</span></h1>
          <p className="text-muted mt-4 max-w-2xl text-lg">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-surface border border-accent/50 rounded-xl p-12 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold">Thanks for your enquiry!</h2>
                <p className="text-muted mt-3">Our team will review your request and get back to you within 24 hours.</p>
                <p className="text-muted mt-2">Need an urgent response? Call us at <a href="tel:0894598888" className="text-accent font-semibold">(08) 9459 8888</a></p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-surface border border-border rounded-xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input required type="text" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <input required type="tel" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="Your phone number" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input required type="email" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="your@email.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service *</label>
                    <select required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                      <option value="">Select a service</option>
                      <option>Self Storage</option>
                      <option>Container Sales</option>
                      <option>Container Hire</option>
                      <option>Custom Modifications</option>
                      <option>Mining & Operations</option>
                      <option>Removals</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Container Size</label>
                    <select className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                      <option value="">Select size (optional)</option>
                      <option>10ft</option>
                      <option>20ft</option>
                      <option>40ft</option>
                      <option>40ft High Cube</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white py-3.5 rounded-xl font-semibold text-lg transition-colors">
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-3">📍 <span>836 Cockburn Road<br />Henderson WA 6166</span></p>
                <p className="flex items-center gap-3">📞 <a href="tel:0894598888" className="text-accent hover:underline">(08) 9459 8888</a></p>
                <p className="flex items-center gap-3">✉️ <a href="mailto:sales@u-move.com.au" className="text-accent hover:underline">sales@u-move.com.au</a></p>
                <p className="flex items-center gap-3">🕐 Mon-Fri 8am-4pm</p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">📍 Our Location</h3>
              <div className="bg-navy border border-border rounded-lg h-48 flex items-center justify-center text-muted text-sm">
                <div className="text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <p>836 Cockburn Road</p>
                  <p>Henderson WA 6166</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2 text-accent">Quick Response</h3>
              <p className="text-sm text-muted">Need an answer fast? Call us during business hours and we&apos;ll give you a quote on the spot.</p>
              <a href="tel:0894598888" className="mt-4 inline-block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
