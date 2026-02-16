"use client";
import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "bot"; text: string };

const KB: [RegExp, string][] = [
  [/\b(hour|open|close|time)\b/i, "We're open Monday to Friday, 8am–4pm. Closed on weekends and public holidays."],
  [/\b(where|location|address|henderson|find)\b/i, "We're located at 836 Cockburn Road, Henderson WA 6166. Our facility is fully secured with a workshop on-site."],
  [/\b(phone|call|number)\b/i, "You can reach us at (08) 9459 8888 during business hours (Mon-Fri 8am-4pm)."],
  [/\b(email|mail)\b/i, "Send us an email at sales@u-move.com.au and we'll get back to you ASAP!"],
  [/\b(storage|store|storing)\b/i, "We offer secure self-storage at our Henderson facility in 10ft, 20ft, and 40ft containers. Short and long-term options available. We can even deliver a container to your site!"],
  [/\b(hire|rent|rental|lease)\b/i, "We hire containers in 10ft, 20ft, and 40ft sizes with flexible short and long-term options. Rates start from competitive prices — request a quote for exact pricing!"],
  [/\b(sale|buy|purchase|sell)\b/i, "We sell new and used shipping containers — 10ft, 20ft, 40ft, and high-cube options. Prices vary by condition and size. Want a quote?"],
  [/\b(modif|custom|fitout|office|workshop|ablution|cool room)\b/i, "We do custom container modifications! Site offices, workshops, ablutions, cool rooms, pop-up shops — you name it. Our process: Consult → Design → Build → Deliver."],
  [/\b(mining|mine|site office|crib|remote)\b/i, "We specialise in mining and remote operations — site offices, crib rooms, ablution blocks, and dangerous goods storage. We deliver Australia-wide!"],
  [/\b(price|cost|how much|rate|pricing)\b/i, "Pricing depends on container size, condition, and service type. For an accurate quote, call (08) 9459 8888 or fill out our quote form!"],
  [/\b(size|dimension|10ft|20ft|40ft|high.?cube)\b/i, "We offer 10ft, 20ft, 40ft, and 40ft high-cube containers. 20ft is the most popular for general use, while 40ft high-cube gives maximum space."],
  [/\b(deliver|transport|ship)\b/i, "We deliver containers across Western Australia and beyond. Delivery costs vary by location — contact us for a delivery quote!"],
  [/\b(hi|hello|hey|g'day)\b/i, "G'day! 👋 Welcome to U-Move Australia. How can I help you today? Ask me about storage, sales, hire, modifications, or anything container-related!"],
];

const FALLBACK = "For specific quotes and detailed info, call us at (08) 9459 8888 or email sales@u-move.com.au. You can also fill out our quote form!";

function getReply(input: string): string {
  for (const [re, reply] of KB) {
    if (re.test(input)) return reply;
  }
  return FALLBACK;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: "G'day! 👋 I'm the U-Move assistant. Ask me about our containers, services, pricing, or location!" }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: getReply(userMsg) }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-white w-14 h-14 rounded-full shadow-lg shadow-accent/30 flex items-center justify-center text-2xl transition-transform hover:scale-110 pulse-glow">
          💬
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ height: 480 }}>
          <div className="bg-accent px-4 py-3 flex items-center justify-between">
            <div>
              <div className="font-bold text-white">U-Move Support</div>
              <div className="text-xs text-white/80">Ask us anything about containers</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-xl">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${m.role === "user" ? "bg-accent text-white rounded-br-sm" : "bg-navy text-slate-200 rounded-bl-sm"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-navy px-4 py-3 rounded-xl rounded-bl-sm flex gap-1">
                  <span className="typing-dot w-2 h-2 bg-muted rounded-full inline-block" />
                  <span className="typing-dot w-2 h-2 bg-muted rounded-full inline-block" />
                  <span className="typing-dot w-2 h-2 bg-muted rounded-full inline-block" />
                </div>
              </div>
            )}
            <div ref={bottom} />
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 bg-navy border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent"
            />
            <button onClick={send} className="bg-accent hover:bg-accent-hover text-white px-4 rounded-lg font-semibold text-sm transition-colors">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
