"use client";
import { useState } from "react";

const faqs = [
  { q: "What sizes of containers do you offer?", a: "We offer 10ft, 20ft, 40ft, and 40ft high-cube containers. The 20ft is our most popular for general storage, while 40ft high-cube provides maximum space for larger projects." },
  { q: "Do you deliver containers?", a: "Yes! We deliver across Western Australia — from Perth metro to remote mine sites. Delivery costs vary by location, so contact us for a quote." },
  { q: "Can I buy a used container?", a: "Absolutely. We stock quality used containers that have been inspected and are wind and watertight. They're a great budget-friendly option." },
  { q: "How long can I hire a container for?", a: "Our hire terms are flexible — from a few weeks to several years. We offer competitive daily, weekly, and monthly rates." },
  { q: "What modifications can you do?", a: "Almost anything! We build site offices, workshops, ablution blocks, cool rooms, pop-up shops, dangerous goods storage, and more. If you can imagine it, we can build it." },
  { q: "Is your storage facility secure?", a: "Yes. Our Henderson facility is fully secured with restricted access. Your belongings are safe with us." },
  { q: "What are your opening hours?", a: "We're open Monday to Friday, 8am to 4pm. We're closed on weekends and public holidays." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-navy/50 transition-colors">
            <span className="font-semibold pr-4">{f.q}</span>
            <span className="text-accent text-xl flex-shrink-0">{openIdx === i ? "−" : "+"}</span>
          </button>
          {openIdx === i && (
            <div className="px-6 pb-4 text-muted text-sm">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
