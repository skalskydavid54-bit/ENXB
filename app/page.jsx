"use client";

import { useMemo, useState } from "react";

const DATA = {
  en: {
    nav: ["Accounts", "Calculator", "Documents", "Contact"],
    heroTitle: "Invest with confidence. Grow your wealth.",
    heroText: "Professional investment solutions, account levels, documents and profit calculator in one place.",
    accounts: "Investment Accounts",
    calculator: "Profit Calculator",
    amount: "Investment amount",
    currency: "Currency",
    plan: "Account type",
    period: "Period",
    profit: "Estimated profit",
    final: "Estimated total",
    documents: "Licenses & Documents",
    contact: "Contact",
    button: "Request consultation",
    warning: "Investments involve risk. Estimated returns are not guaranteed.",
  },
  cz: {
    nav: ["Účty", "Kalkulačka", "Dokumenty", "Kontakt"],
    heroTitle: "Investujte s důvěrou. Budujte svůj kapitál.",
    heroText: "Profesionální investiční řešení, úrovně účtů, dokumenty a kalkulačka zisku na jednom místě.",
    accounts: "Investiční účty",
    calculator: "Kalkulačka zisku",
    amount: "Investovaná částka",
    currency: "Měna",
    plan: "Typ účtu",
    period: "Období",
    profit: "Odhadovaný zisk",
    final: "Odhadovaný celkem",
    documents: "Licence a dokumenty",
    contact: "Kontakt",
    button: "Požádat o konzultaci",
    warning: "Investice jsou spojeny s rizikem. Odhadované výnosy nejsou garantované.",
  },
  pl: {
    nav: ["Konta", "Kalkulator", "Dokumenty", "Kontakt"],
    heroTitle: "Inwestuj z pewnością. Buduj swój kapitał.",
    heroText: "Profesjonalne rozwiązania inwestycyjne, poziomy kont, dokumenty i kalkulator zysku w jednym miejscu.",
    accounts: "Konta inwestycyjne",
    calculator: "Kalkulator zysku",
    amount: "Kwota inwestycji",
    currency: "Waluta",
    plan: "Typ konta",
    period: "Okres",
    profit: "Szacowany zysk",
    final: "Szacowana suma",
    documents: "Licencje i dokumenty",
    contact: "Kontakt",
    button: "Poproś o konsultację",
    warning: "Inwestycje wiążą się z ryzykiem. Szacowane zyski nie są gwarantowane.",
  },
  sk: {
    nav: ["Účty", "Kalkulačka", "Dokumenty", "Kontakt"],
    heroTitle: "Investujte s dôverou. Budujte svoj kapitál.",
    heroText: "Profesionálne investičné riešenia, úrovne účtov, dokumenty a kalkulačka zisku na jednom mieste.",
    accounts: "Investičné účty",
    calculator: "Kalkulačka zisku",
    amount: "Investovaná suma",
    currency: "Mena",
    plan: "Typ účtu",
    period: "Obdobie",
    profit: "Odhadovaný zisk",
    final: "Odhadovaný celkom",
    documents: "Licencie a dokumenty",
    contact: "Kontakt",
    button: "Požiadať o konzultáciu",
    warning: "Investície sú spojené s rizikom. Odhadované výnosy nie sú garantované.",
  },
};

const plans = [
  { name: "Standard", min: 150, minP: 10, maxP: 15, fee: 10 },
  { name: "Complete", min: 2500, minP: 35, maxP: 45, fee: 9, recommended: true, bonus: 100 },
  { name: "Silver", min: 10000, minP: 40, maxP: 65, fee: 8 },
  { name: "Gold", min: 25000, minP: 70, maxP: 70, fee: 7 },
  { name: "Platinum", min: 80000, minP: 70, maxP: 90, fee: 6 },
  { name: "VIP", min: 150000, minP: 100, maxP: 100, fee: 5 },
];

const rates = { EUR: 1, USD: 1.08, CZK: 25.2, PLN: 4.32 };

export default function Home() {
  const [lang, setLang] = useState("en");
  const [amount, setAmount] = useState(2500);
  const [currency, setCurrency] = useState("EUR");
  const [planIndex, setPlanIndex] = useState(1);
  const [months, setMonths] = useState(1);

  const t = DATA[lang];
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
        <div>
          <div style={styles.logo}>DS</div>
          <b>Davíd Slačkovský</b>
          <p style={styles.small}>Financial Broker</p>
        </div>

        <div style={styles.langs}>
          {["cz", "pl", "sk", "en"].map((l) => (
            <button key={l} onClick={() => setLang(l)} style={lang === l ? styles.activeBtn : styles.btn}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <section style={styles.hero}>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroText}</p>
        <a href="#calculator" style={styles.goldBtn}>{t.button}</a>
      </section>

      <section>
        <h2>{t.accounts}</h2>
        <div style={styles.grid}>
          {plans.map((p, i) => (
            <div key={p.name} style={p.recommended ? styles.cardGold : styles.card}>
              {p.recommended && <div style={styles.badge}>RECOMMENDED</div>}
              <h3>{p.name}</h3>
              <h2>{p.min.toLocaleString()} €</h2>
              <p style={styles.blue}>{p.minP}% – {p.maxP}% / month</p>
              <p>Broker fee: {p.fee}%</p>
              <button onClick={() => { setPlanIndex(i); setAmount(p.min); }} style={styles.btn}>
                Select
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" style={styles.calc}>
        <h2>{t.calculator}</h2>

        <div style={styles.form}>
          <label>{t.amount}</label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />

          <label>{t.currency}</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {Object.keys(rates).map((c) => <option key={c}>{c}</option>)}
          </select>

          <label>{t.plan}</label>
          <select value={planIndex} onChange={(e) => setPlanIndex(Number(e.target.value))}>
            {plans.map((p, i) => <option key={p.name} value={i}>{p.name}</option>)}
          </select>

          <label>{t.period}</label>
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))}>
            <option value={0.5}>2 weeks</option>
            <option value={1}>1 month</option>
            <option value={3}>3 months</option>
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
          </select>
        </div>

        <div style={styles.result}>
          <p>{t.profit}</p>
          <h2>{result.profit}</h2>
          <p>{t.final}</p>
          <h2>{result.final}</h2>
        </div>
      </section>

      <section>
        <h2>{t.documents}</h2>
        <div style={styles.docs}>
          {["License", "Company Documents", "Risk Policy", "Agreement", "KYC / AML"].map((d) => (
            <div style={styles.doc} key={d}>📄 {d}</div>
          ))}
        </div>
      </section>

      <section style={styles.contact}>
        <h2>{t.contact}</h2>
        <p>WhatsApp / Telegram / Email</p>
        <button style={styles.goldBtn}>{t.button}</button>
      </section>

      <footer style={styles.footer}>{t.warning}</footer>
    </main>
  );
}

function format(v, c) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(v) + " " + c;
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top right,#5b4100,#07111f 35%,#030712)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: 40,
  },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 70 },
  logo: {
    width: 60, height: 60, border: "1px solid gold", borderRadius: 16,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "gold", fontSize: 26, fontWeight: "bold", marginBottom: 10
  },
  small: { color: "#94a3b8", margin: 0 },
  langs: { display: "flex", gap: 10 },
  btn: {
    background: "rgba(255,255,255,.08)", color: "white", border: "1px solid rgba(255,255,255,.15)",
    padding: "10px 16px", borderRadius: 10, cursor: "pointer"
  },
  activeBtn: {
    background: "gold", color: "#020617", border: "1px solid gold",
    padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontWeight: "bold"
  },
  hero: { maxWidth: 850, marginBottom: 80 },
  goldBtn: {
    display: "inline-block", background: "gold", color: "#020617", padding: "15px 24px",
    borderRadius: 14, textDecoration: "none", fontWeight: "bold", border: 0, cursor: "pointer"
  },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 },
  card: { background: "rgba(15,23,42,.75)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 22, padding: 25 },
  cardGold: { background: "rgba(15,23,42,.85)", border: "1px solid gold", borderRadius: 22, padding: 25, boxShadow: "0 0 30px rgba(255,215,0,.25)" },
  badge: { color: "#020617", background: "gold", display: "inline-block", padding: "5px 10px", borderRadius: 999, fontSize: 12, fontWeight: "bold" },
  blue: { color: "#38bdf8", fontWeight: "bold" },
  calc: { marginTop: 80, background: "rgba(255,255,255,.05)", padding: 30, borderRadius: 25, border: "1px solid rgba(255,255,255,.12)" },
  form: { display: "grid", gap: 12, maxWidth: 500 },
  result: { marginTop: 30, color: "gold" },
  docs: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 15 },
  doc: { background: "rgba(255,255,255,.06)", padding: 20, borderRadius: 16, border: "1px solid rgba(255,255,255,.1)" },
  contact: { marginTop: 70 },
  footer: { marginTop: 80, color: "#94a3b8", fontSize: 13 },
};
