"use client";

import { useMemo, useState } from "react";

const TEXT = {
  en: {
    heroTitle: "Invest with confidence. Grow your wealth.",
    heroText: "Premium investment solutions, account levels, market offers, payment options and profit calculator in one place.",
    accounts: "Investment Accounts",
    offers: "Investment Offers",
    calculator: "Profit Calculator",
    compare: "Account Comparison",
    market: "Trading Plans & Market Analysis",
    payment: "Payment",
    documents: "Licenses & Documents",
    contact: "Contact & Manager Selection",
    amount: "Investment amount",
    currency: "Currency",
    plan: "Account type",
    period: "Period",
    profit: "Estimated profit",
    final: "Estimated total",
    warning: "Investments involve risk. Estimated returns are not guaranteed.",
    choose: "Choose plan",
    consult: "Request consultation",
  },
  cz: {
    heroTitle: "Investujte s důvěrou. Budujte svůj kapitál.",
    heroText: "Prémiová investiční řešení, úrovně účtů, tržní nabídky, platby a kalkulačka zisku na jednom místě.",
    accounts: "Investiční účty",
    offers: "Investiční nabídky",
    calculator: "Kalkulačka zisku",
    compare: "Porovnání účtů",
    market: "Obchodní plány a analýza trhu",
    payment: "Platba",
    documents: "Licence a dokumenty",
    contact: "Kontakt a výběr manažera",
    amount: "Investovaná částka",
    currency: "Měna",
    plan: "Typ účtu",
    period: "Období",
    profit: "Odhadovaný zisk",
    final: "Odhadovaný celkem",
    warning: "Investice jsou spojeny s rizikem. Odhadované výnosy nejsou garantované.",
    choose: "Vybrat plán",
    consult: "Požádat o konzultaci",
  },
  pl: {
    heroTitle: "Inwestuj z pewnością. Buduj swój kapitał.",
    heroText: "Premium rozwiązania inwestycyjne, poziomy kont, oferty rynkowe, płatności i kalkulator zysku w jednym miejscu.",
    accounts: "Konta inwestycyjne",
    offers: "Oferty inwestycyjne",
    calculator: "Kalkulator zysku",
    compare: "Porównanie kont",
    market: "Plany handlowe i analiza rynku",
    payment: "Płatność",
    documents: "Licencje i dokumenty",
    contact: "Kontakt i wybór menedżera",
    amount: "Kwota inwestycji",
    currency: "Waluta",
    plan: "Typ konta",
    period: "Okres",
    profit: "Szacowany zysk",
    final: "Szacowana suma",
    warning: "Inwestycje wiążą się z ryzykiem. Szacowane zyski nie są gwarantowane.",
    choose: "Wybierz plan",
    consult: "Poproś o konsultację",
  },
  sk: {
    heroTitle: "Investujte s dôverou. Budujte svoj kapitál.",
    heroText: "Prémiové investičné riešenia, úrovne účtov, trhové ponuky, platby a kalkulačka zisku na jednom mieste.",
    accounts: "Investičné účty",
    offers: "Investičné ponuky",
    calculator: "Kalkulačka zisku",
    compare: "Porovnanie účtov",
    market: "Obchodné plány a analýza trhu",
    payment: "Platba",
    documents: "Licencie a dokumenty",
    contact: "Kontakt a výber manažéra",
    amount: "Investovaná suma",
    currency: "Mena",
    plan: "Typ účtu",
    period: "Obdobie",
    profit: "Odhadovaný zisk",
    final: "Odhadovaný celkom",
    warning: "Investície sú spojené s rizikom. Odhadované výnosy nie sú garantované.",
    choose: "Vybrať plán",
    consult: "Požiadať o konzultáciu",
  },
};

const offers = [
  { name: "Forex", icon: "📈", color: "#f5b942", text: "Daily opportunities on EUR/USD, GBP/USD, USD/JPY and XAU/USD." },
  { name: "Gold", icon: "🥇", color: "#facc15", text: "Stability, capital protection and long-term value." },
  { name: "Silver", icon: "⚪", color: "#93c5fd", text: "Affordable metal exposure with industrial demand." },
  { name: "Crypto", icon: "₿", color: "#22d3ee", text: "High-growth digital assets and blockchain sectors." },
  { name: "AI & Technology", icon: "🤖", color: "#38bdf8", text: "AI, NVIDIA, OpenAI, Microsoft, cloud and automation." },
  { name: "Stocks", icon: "🏢", color: "#22c55e", text: "Apple, NVIDIA, Microsoft, Tesla and global leaders." },
  { name: "Energy", icon: "⚡", color: "#0ea5e9", text: "Electricity, clean energy and global transformation." },
  { name: "Oil & Gas", icon: "🛢️", color: "#f59e0b", text: "Stable energy sectors with global demand." },
  { name: "Real Metal", icon: "🏭", color: "#d97706", text: "Metallurgy, production, real assets and industry." },
];

const plans = [
  { name: "Standard", min: 150, minP: 10, maxP: 15, fee: 10, badge: "Start", features: ["Basic market access", "Max. 2 positions / 24h", "Forex access", "Beginner period", "No personal analyst"] },
  { name: "Complete", min: 2500, minP: 35, maxP: 45, fee: 9, badge: "Recommended", bonus: 100, features: ["Personal analyst 24/7", "Technical & fundamental analysis", "Portfolio diversification", "Forex, crypto, commodities", "Up to 5 positions / 24h", "Trading signals", "Educational materials"] },
  { name: "Silver", min: 10000, minP: 40, maxP: 65, fee: 8, badge: "Advanced", features: ["Everything from Complete", "Extended analytics", "More trading signals", "Partial commodities access", "Priority support", "Personal meetings", "Premium service"] },
  { name: "Gold", min: 25000, minP: 70, maxP: 70, fee: 7, badge: "Premium", features: ["Everything from previous plans", "Full market access", "Individual strategy", "Insider analytics access", "Exclusive webinars", "Priority large trades", "Higher signal level"] },
  { name: "Platinum", min: 80000, minP: 70, maxP: 90, fee: 6, badge: "Elite", features: ["Maximum diversification", "Daily consultations", "Priority trades", "Advanced opportunities", "Personal mentor", "Closed reports", "Trading automation"] },
  { name: "VIP", min: 150000, minP: 100, maxP: 100, fee: 5, badge: "VIP", features: ["Personal financial analyst", "Individual portfolio structure", "Closed investment access", "Maximum execution speed", "Exclusive signals", "Direct contact with top analyst", "VIP support 24/7"] },
];

const managers = [
  "David Skalský — Senior Financial Broker",
  "Anna — Client Support Manager",
  "Martin — Market Analyst",
  "Katarína — Investment Consultant",
];

const rates = { EUR: 1, USD: 1.08, CZK: 25.2, PLN: 4.32 };

export default function Home() {
  const [lang, setLang] = useState("en");
  const [amount, setAmount] = useState(2500);
  const [currency, setCurrency] = useState("EUR");
  const [planIndex, setPlanIndex] = useState(1);
  const [months, setMonths] = useState(1);
  const [payment, setPayment] = useState("bank");
  const [manager, setManager] = useState(managers[0]);

  const t = TEXT[lang];
  const plan = plans[planIndex];

  const result = useMemo(() => {
    const eur = Number(amount || 0) / rates[currency];
    const minProfit = eur * (plan.minP / 100) * months;
    const maxProfit = eur * (plan.maxP / 100) * months;
    const bonus = plan.bonus || 0;
    const finalMin = eur + minProfit - minProfit * (plan.fee / 100) + bonus;
    const finalMax = eur + maxProfit - maxProfit * (plan.fee / 100) + bonus;
    return {
      profit: `${format(minProfit * rates[currency], currency)} – ${format(maxProfit * rates[currency], currency)}`,
      final: `${format(finalMin * rates[currency], currency)} – ${format(finalMax * rates[currency], currency)}`,
    };
  }, [amount, currency, plan, months]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}><div style={styles.logo}>DS</div><div><b>Davíd Slačkovský</b><p style={styles.small}>Financial Broker</p></div></div>
        <div style={styles.langs}>{["cz", "pl", "sk", "en"].map((l) => <button key={l} onClick={() => setLang(l)} style={lang === l ? styles.activeBtn : styles.btn}>{l.toUpperCase()}</button>)}</div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroGlow}></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={styles.kicker}>Premium Investment Solutions</p>
          <h1 style={styles.h1}>{t.heroTitle}</h1>
          <p style={styles.heroText}>{t.heroText}</p>
          <div style={styles.actions}><a href="#plans" style={styles.goldBtn}>{t.choose}</a><a href="#calculator" style={styles.darkBtn}>{t.calculator}</a><a href="#payment" style={styles.darkBtn}>{t.payment}</a></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>{t.offers}</h2>
        <div style={styles.offerGrid}>{offers.map((o) => <div key={o.name} style={{ ...styles.offerCard, borderColor: o.color, boxShadow: `0 0 28px ${o.color}22` }}><div style={{ fontSize: 36 }}>{o.icon}</div><h3 style={{ color: o.color }}>{o.name}</h3><p style={styles.small}>{o.text}</p></div>)}</div>
      </section>

      <section id="plans" style={styles.section}>
        <h2>{t.accounts}</h2>
       <p style={styles.small}>
  {lang === "cz"
    ? "Každá další úroveň nabízí více analytiky, podpory, trhů a priority provedení."
    : lang === "pl"
    ? "Każdy kolejny poziom daje więcej analityki, wsparcia, rynków i priorytetu realizacji."
    : lang === "sk"
    ? "Každá ďalšia úroveň ponúka viac analytiky, podpory, trhov a priority realizácie."
    : "Each next level gives more analytics, support, markets and execution priority."}
</p>
        <div style={styles.planGrid}>{plans.map((p, i) => <div key={p.name} style={i === planIndex ? styles.planActive : styles.plan}><div style={styles.badge}>{p.badge}</div><h3>{p.name}</h3><h2>{p.min.toLocaleString()} €</h2><p style={styles.blue}>{p.minP}% – {p.maxP}% / month</p><p>Broker fee: {p.fee}%</p>{p.bonus && <p style={styles.bonus}>+{p.bonus} € bonus</p>}<ul style={styles.list}>{p.features.map((f) => <li key={f}>✓ {f}</li>)}</ul><button onClick={() => { setPlanIndex(i); setAmount(p.min); }} style={styles.goldBtn}>{t.choose}</button></div>)}</div>
      </section>

      <section style={styles.section}>
        <h2>{t.compare}</h2>
        <div style={styles.tableWrap}><table style={styles.table}><thead><tr><th>Feature</th>{plans.map((p) => <th key={p.name}>{p.name}</th>)}</tr></thead><tbody>{[["Minimum", "150€", "2 500€", "10 000€", "25 000€", "80 000€", "150 000€"], ["Expected return", "10–15%", "35–45%", "40–65%", "70%", "70–90%", "100%+"], ["Personal analyst", "—", "✓", "✓", "✓", "✓", "VIP"], ["Markets", "Forex", "Forex/Crypto/Commodities", "Extended", "All", "All + Private", "Closed access"], ["Positions", "2/24h", "5/24h", "More", "Priority", "Priority+", "Maximum"], ["Support", "Basic", "24/7", "Priority", "Premium", "Mentor", "Direct top contact"], ["Broker fee", "10%", "9%", "8%", "7%", "6%", "5%"]].map((row) => <tr key={row[0]}>{row.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
      </section>

      <section id="calculator" style={styles.calc}>
        <h2>{t.calculator}</h2>
        <div style={styles.form}>
          <label>{t.amount}<input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" style={styles.input} /></label>
          <label>{t.currency}<select value={currency} onChange={(e) => setCurrency(e.target.value)} style={styles.input}>{Object.keys(rates).map((c) => <option key={c}>{c}</option>)}</select></label>
          <label>{t.plan}<select value={planIndex} onChange={(e) => setPlanIndex(Number(e.target.value))} style={styles.input}>{plans.map((p, i) => <option key={p.name} value={i}>{p.name}</option>)}</select></label>
          <label>{t.period}<select value={months} onChange={(e) => setMonths(Number(e.target.value))} style={styles.input}><option value={0.5}>2 weeks</option><option value={1}>1 month</option><option value={3}>3 months</option><option value={6}>6 months</option><option value={12}>12 months</option></select></label>
        </div>
        <div style={styles.result}><p>{plan.name}</p><h2>{t.profit}: {result.profit}</h2><h2>{t.final}: {result.final}</h2></div>
      </section>

      <section style={styles.section}>
        <h2>{t.market}</h2>
        <div style={styles.marketGrid}>{[["Technical Analysis", "Charts, trend, support and resistance levels, indicators."], ["Fundamental Analysis", "Rates, inflation, central banks, global events and news."], ["Forex Plans", "EUR/USD, GBP/USD, USD/JPY and XAU/USD trading outlook."], ["Commodities", "Gold, silver, oil, gas and energy market opportunities."], ["Stocks", "Apple, NVIDIA, Microsoft, Tesla and AI sector leaders."], ["Crypto", "Bitcoin, Ethereum, Solana and digital assets."]].map(([title, text]) => <div style={styles.marketCard} key={title}><h3>{title}</h3><p style={styles.small}>{text}</p></div>)}</div>
      </section>

      <section id="payment" style={styles.section}>
        <h2>{t.payment}</h2>
        <div style={styles.tabs}><button style={payment === "bank" ? styles.activeTab : styles.tab} onClick={() => setPayment("bank")}><button>
  {lang === "cz"
    ? "Bankovní převod"
    : lang === "pl"
    ? "Przelew bankowy"
    : lang === "sk"
    ? "Bankový prevod"
    : "Bank transfer"}
</button></button><button style={payment === "crypto" ? styles.activeTab : styles.tab} onClick={() => setPayment("crypto")}><button>
  {lang === "cz"
    ? "Bankovní převod"
    : lang === "pl"
    ? "Przelew bankowy"
    : lang === "sk"
    ? "Bankový prevod"
    : "Bank transfer"}
</button></button></div>
        <div style={styles.payBox}>{payment === "bank" ? <><h3>
  {lang === "cz"
    ? "Bankovní údaje"
    : lang === "pl"
    ? "Dane bankowe"
    : lang === "sk"
    ? "Bankové údaje"
    : "Bank details"}
</h3><p>IBAN: add your IBAN</p><p>SWIFT/BIC: add your SWIFT</p><p>Payment reference: Investment account activation</p></> : <><h3>
  {lang === "cz"
    ? "Bankovní údaje"
    : lang === "pl"
    ? "Dane bankowe"
    : lang === "sk"
    ? "Bankové údaje"
    : "Bank details"}
</h3><p>USDT TRC20: add wallet</p><p>BTC: add wallet</p><p>ETH/ERC20: add wallet</p></>}</div>
      </section>

      <section style={styles.section}><h2>{t.documents}</h2><div style={styles.docs}>{["ČNB Certificate", "Company Documents", "Risk Policy", "Agreement", "KYC / AML"].map((d) => <div style={styles.doc} key={d}>📄 {d}</div>)}</div></section>

      <section id="contact" style={styles.section}>
        <h2>{t.contact}</h2>
        <select style={styles.manager} value={manager} onChange={(e) => setManager(e.target.value)}>{managers.map((m) => <option key={m}>{m}</option>)}</select>
        <div style={styles.contactGrid}><a style={styles.contactBtn} href="https://wa.me/" target="_blank">WhatsApp</a><a style={styles.contactBtn} href="https://t.me/" target="_blank">Telegram</a><a style={styles.contactBtn} href="https://meet.google.com/" target="_blank">Google Meet</a></div>
        <p style={styles.small}><button>
  {lang === "cz"
    ? "Bankovní převod"
    : lang === "pl"
    ? "Przelew bankowy"
    : lang === "sk"
    ? "Bankový prevod"
    : "Bank transfer"}
</button>: {manager}</p>
      </section>

      <footer style={styles.footer}>{t.warning}</footer>
    </main>
  );
}

function format(v, c) { return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(v) + " " + c; }

const styles = {
  page: { minHeight: "100vh", background: "radial-gradient(circle at top right,#5b4100,#07111f 35%,#030712)", color: "white", fontFamily: "Arial, sans-serif", padding: 32 },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, gap: 20, flexWrap: "wrap" },
  brand: { display: "flex", alignItems: "center", gap: 14 },
  logo: { width: 62, height: 62, border: "1px solid gold", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "gold", fontSize: 26, fontWeight: "bold" },
  small: { color: "#94a3b8", margin: 0, lineHeight: 1.55 },
  langs: { display: "flex", gap: 10 },
  btn: { background: "rgba(255,255,255,.08)", color: "white", border: "1px solid rgba(255,255,255,.15)", padding: "10px 16px", borderRadius: 10, cursor: "pointer" },
  activeBtn: { background: "gold", color: "#020617", border: "1px solid gold", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontWeight: "bold" },
  hero: { position: "relative", overflow: "hidden", minHeight: 440, display: "flex", alignItems: "center", background: "linear-gradient(135deg,rgba(255,215,0,.16),rgba(0,0,0,.32))", border: "1px solid rgba(255,215,0,.3)", borderRadius: 28, padding: 42, marginBottom: 55, boxShadow: "0 0 70px rgba(255,215,0,.15)" },
  heroGlow: { position: "absolute", right: -80, top: -80, width: 300, height: 300, background: "gold", filter: "blur(120px)", opacity: .28 },
  kicker: { color: "gold", fontWeight: 900, letterSpacing: 2, textTransform: "uppercase" },
  h1: { fontSize: "clamp(38px,6vw,78px)", lineHeight: .95, maxWidth: 900, margin: "12px 0" },
  heroText: { maxWidth: 720, fontSize: 19, color: "#dbeafe", lineHeight: 1.55 },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 25 },
  goldBtn: { display: "inline-block", background: "linear-gradient(135deg,#facc15,#b7791f)", color: "#020617", padding: "14px 22px", borderRadius: 14, textDecoration: "none", fontWeight: "bold", border: 0, cursor: "pointer" },
  darkBtn: { background: "rgba(255,255,255,.08)", color: "white", border: "1px solid rgba(255,255,255,.15)", borderRadius: 14, padding: "14px 22px", textDecoration: "none" },
  section: { marginTop: 62 },
  offerGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 },
  offerCard: { background: "rgba(15,23,42,.82)", border: "1px solid", borderRadius: 20, padding: 22 },
  planGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 },
  plan: { background: "rgba(15,23,42,.82)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 22, padding: 22 },
  planActive: { background: "rgba(15,23,42,.92)", border: "1px solid gold", borderRadius: 22, padding: 22, boxShadow: "0 0 35px rgba(255,215,0,.28)" },
  badge: { display: "inline-block", background: "rgba(250,204,21,.18)", border: "1px solid gold", color: "gold", borderRadius: 999, padding: "5px 10px", fontSize: 12, fontWeight: 800 },
  blue: { color: "#38bdf8", fontWeight: "bold" },
  bonus: { color: "#22c55e", fontWeight: 900 },
  list: { paddingLeft: 18, color: "#e2e8f0", lineHeight: 1.7 },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", background: "rgba(15,23,42,.85)", borderRadius: 16, overflow: "hidden" },
  calc: { marginTop: 62, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,215,0,.25)", borderRadius: 24, padding: 28 },
  form: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 },
  input: { display: "block", width: "100%", marginTop: 8, padding: 12, borderRadius: 12, border: "1px solid #334155", background: "#020617", color: "white" },
  result: { color: "gold", marginTop: 25 },
  marketGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 },
  marketCard: { background: "rgba(2,6,23,.75)", border: "1px solid rgba(56,189,248,.25)", borderRadius: 18, padding: 22 },
  tabs: { display: "flex", gap: 12, flexWrap: "wrap" },
  tab: { background: "rgba(255,255,255,.08)", color: "white", border: "1px solid rgba(255,255,255,.15)", padding: "12px 18px", borderRadius: 12 },
  activeTab: { background: "gold", color: "#020617", border: "1px solid gold", padding: "12px 18px", borderRadius: 12, fontWeight: 900 },
  payBox: { marginTop: 20, background: "rgba(15,23,42,.85)", border: "1px solid rgba(255,215,0,.25)", borderRadius: 18, padding: 22 },
  docs: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 15 },
  doc: { background: "rgba(255,255,255,.06)", padding: 20, borderRadius: 16, border: "1px solid rgba(255,255,255,.1)" },
  manager: { padding: 14, borderRadius: 12, width: "100%", maxWidth: 520, marginBottom: 20 },
  contactGrid: { display: "flex", gap: 12, flexWrap: "wrap" },
  contactBtn: { background: "rgba(255,255,255,.08)", color: "white", border: "1px solid rgba(255,215,0,.35)", borderRadius: 14, padding: "14px 20px", textDecoration: "none" },
  footer: { marginTop: 70, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,.12)", color: "#94a3b8", fontSize: 13 },
};
