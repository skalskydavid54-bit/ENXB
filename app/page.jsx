"use client";

import { useMemo, useState } from "react";

const offers = [
  { name: "Forex", icon: "📈", color: "#f5b942", text: "Щоденні торгові можливості на валютному ринку." },
  { name: "Gold", icon: "🥇", color: "#facc15", text: "Стабільність, захист капіталу та довгострокова цінність." },
  { name: "Silver", icon: "⚪", color: "#93c5fd", text: "Доступна інвестиція з промисловим потенціалом." },
  { name: "Crypto", icon: "₿", color: "#22d3ee", text: "Високий потенціал росту цифрових активів." },
  { name: "AI & Technology", icon: "🤖", color: "#38bdf8", text: "Інвестиції у майбутнє: AI, NVIDIA, OpenAI, Microsoft." },
  { name: "Stocks", icon: "🏢", color: "#22c55e", text: "Apple, NVIDIA, Microsoft, Tesla та інші лідери ринку." },
  { name: "Energy", icon: "⚡", color: "#0ea5e9", text: "Електрика, зелена енергетика та глобальна трансформація." },
  { name: "Oil & Gas", icon: "🛢️", color: "#f59e0b", text: "Стабільні сектори з попитом у світовій економіці." },
  { name: "Real Metal", icon: "🏭", color: "#d97706", text: "Металургія, промисловість, реальні активи та виробництво." },
];

const plans = [
  {
    name: "Standard",
    min: 150,
    profit: "10% – 15%",
    fee: "10%",
    badge: "Start",
    features: [
      "Базовий доступ до ринку",
      "До 2 позицій за 24 години",
      "Доступ до Forex",
      "Підходить для знайомства",
      "Без персонального аналітика",
    ],
  },
  {
    name: "Complete",
    min: 2500,
    profit: "35% – 45%",
    fee: "9%",
    badge: "Recommended",
    bonus: "+100 € бонус",
    features: [
      "Особистий аналітик 24/7",
      "Фундаментальна і технічна аналітика",
      "Диверсифікація портфеля",
      "Forex, Crypto, Commodities",
      "До 5 позицій за 24 години",
      "Торгові сигнали входу/виходу",
      "Швидше проведення транзакцій",
      "Навчальні матеріали",
    ],
  },
  {
    name: "Silver",
    min: 10000,
    profit: "40% – 65%",
    fee: "8%",
    badge: "Advanced",
    features: [
      "Усе з Complete",
      "Розширена аналітика",
      "Більше торгових сигналів",
      "Частковий доступ до commodities",
      "Пріоритетна підтримка",
      "Персональні зустрічі",
      "Преміальний супровід",
    ],
  },
  {
    name: "Gold",
    min: 25000,
    profit: "70%",
    fee: "7%",
    badge: "Premium",
    features: [
      "Усе з попередніх пакетів",
      "Повний доступ до всіх ринків",
      "Індивідуальна стратегія",
      "Доступ до insider-аналітики",
      "Ексклюзивні семінари",
      "Пріоритет великих угод",
      "Підвищений рівень сигналів",
    ],
  },
  {
    name: "Platinum",
    min: 80000,
    profit: "70% – 90%",
    fee: "6%",
    badge: "Elite",
    features: [
      "Максимальна диверсифікація",
      "Щоденні консультації",
      "Пріоритетні угоди",
      "Розширені торгові можливості",
      "Персональний ментор",
      "Доступ до закритих звітів",
      "Автоматизація торгівлі",
    ],
  },
  {
    name: "VIP",
    min: 150000,
    profit: "100%+",
    fee: "5%",
    badge: "VIP",
    features: [
      "Особистий фінансовий аналітик",
      "Індивідуальна структура портфеля",
      "Доступ до закритих можливостей",
      "Максимальна швидкість операцій",
      "Ексклюзивні сигнали",
      "Прямий контакт з топ-аналітиком",
      "VIP підтримка 24/7",
    ],
  },
];

const managers = [
  "David Skalský — Senior Financial Broker",
  "Anna — Client Support Manager",
  "Martin — Market Analyst",
  "Katarína — Investment Consultant",
];

const rates = { EUR: 1, USD: 1.08, CZK: 25.2, PLN: 4.32 };

export default function Home() {
  const [amount, setAmount] = useState(2500);
  const [currency, setCurrency] = useState("EUR");
  const [planIndex, setPlanIndex] = useState(1);
  const [months, setMonths] = useState(1);
  const [payment, setPayment] = useState("bank");
  const [manager, setManager] = useState(managers[0]);

  const plan = plans[planIndex];

  const result = useMemo(() => {
    const eur = Number(amount || 0) / rates[currency];
    const min = parseFloat(plan.profit);
    const max = plan.profit.includes("–") ? parseFloat(plan.profit.split("–")[1]) : min;
    const profitMin = eur * (min / 100) * months;
    const profitMax = eur * (max / 100) * months;
    return {
      profit: `${fmt(profitMin * rates[currency], currency)} – ${fmt(profitMax * rates[currency], currency)}`,
      total: `${fmt((eur + profitMin) * rates[currency], currency)} – ${fmt((eur + profitMax) * rates[currency], currency)}`,
    };
  }, [amount, currency, plan, months]);

  return (
    <main style={s.page}>
      <section style={s.hero}>
        <div>
          <div style={s.logo}>DS</div>
          <h1>Invest with Confidence. Grow Your Wealth.</h1>
          <p>
            Преміальні інвестиційні рішення, торгові плани, аналітика ринку,
            оплата, документи та персональний супровід в одному місці.
          </p>
          <div style={s.actions}>
            <a style={s.goldBtn} href="#plans">Обрати рахунок</a>
            <a style={s.darkBtn} href="#payment">Оплата</a>
            <a style={s.darkBtn} href="#contact">Зв’язок</a>
          </div>
        </div>
      </section>

      <section>
        <h2>Інвестиційні пропозиції</h2>
        <div style={s.offerGrid}>
          {offers.map((o) => (
            <div key={o.name} style={{ ...s.offerCard, borderColor: o.color }}>
              <div style={{ fontSize: 34 }}>{o.icon}</div>
              <h3 style={{ color: o.color }}>{o.name}</h3>
              <p>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" style={s.section}>
        <h2>Типи інвестиційних рахунків</h2>
        <p style={s.muted}>Кожен наступний пакет відкриває більше можливостей, аналітики, підтримки та доступу до ринків.</p>

        <div style={s.planGrid}>
          {plans.map((p, i) => (
            <div key={p.name} style={i === planIndex ? s.planActive : s.plan}>
              <div style={s.badge}>{p.badge}</div>
              <h3>{p.name}</h3>
              <h2>{p.min.toLocaleString()} €</h2>
              <p style={s.gold}>Очікуваний місячний результат: {p.profit}</p>
              <p>Комісія брокера: {p.fee}</p>
              {p.bonus && <p style={s.bonus}>{p.bonus}</p>}
              <ul>
                {p.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <button style={s.goldBtn} onClick={() => { setPlanIndex(i); setAmount(p.min); }}>
                Вибрати план
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={s.section}>
        <h2>Порівняння пакетів</h2>
        <div style={s.tableWrap}>
          <table style={s.table}>
            <thead>
              <tr>
                <th>Можливість</th>
                {plans.map((p) => <th key={p.name}>{p.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ["Мінімальна інвестиція", "150€", "2 500€", "10 000€", "25 000€", "80 000€", "150 000€"],
                ["Персональний аналітик", "—", "✓", "✓", "✓", "✓", "VIP"],
                ["Ринки", "Forex", "Forex/Crypto/Commodities", "Розширені", "Усі", "Усі + Private", "Закриті можливості"],
                ["Кількість позицій", "2/24h", "5/24h", "Більше", "Пріоритет", "Пріоритет+", "Максимум"],
                ["Підтримка", "Базова", "24/7", "Пріоритет", "Преміум", "Ментор", "Особистий супровід"],
                ["Комісія", "10%", "9%", "8%", "7%", "6%", "5%"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => <td key={i}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="calculator" style={s.calc}>
        <h2>Калькулятор потенційного результату</h2>
        <div style={s.form}>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {Object.keys(rates).map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={planIndex} onChange={(e) => setPlanIndex(Number(e.target.value))}>
            {plans.map((p, i) => <option key={p.name} value={i}>{p.name}</option>)}
          </select>
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))}>
            <option value={0.5}>2 тижні</option>
            <option value={1}>1 місяць</option>
            <option value={3}>3 місяці</option>
          </select>
        </div>
        <div style={s.result}>
          <p>Пакет: {plan.name}</p>
          <h3>Потенційний результат: {result.profit}</h3>
          <h3>Разом з інвестицією: {result.total}</h3>
        </div>
      </section>

      <section style={s.section}>
        <h2>Торгові плани та аналіз ринку</h2>
        <div style={s.marketGrid}>
          {[
            ["Технічний аналіз", "Графіки, тренди, рівні підтримки та опору."],
            ["Фундаментальний аналіз", "Новини, ставки, інфляція, економічні показники."],
            ["Forex плани", "EUR/USD, GBP/USD, USD/JPY, XAU/USD."],
            ["Commodities", "Gold, Silver, Oil, Gas, Energy."],
            ["Stocks", "Apple, NVIDIA, Microsoft, Tesla, AI сектор."],
            ["Crypto", "Bitcoin, Ethereum, Solana, DeFi сектор."],
          ].map(([title, text]) => (
            <div style={s.marketCard} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="payment" style={s.section}>
        <h2>Оплата та реквізити</h2>

        <div style={s.tabs}>
          <button style={payment === "bank" ? s.activeTab : s.tab} onClick={() => setPayment("bank")}>Банківський переказ</button>
          <button style={payment === "crypto" ? s.activeTab : s.tab} onClick={() => setPayment("crypto")}>Криптовалюта</button>
        </div>

        {payment === "bank" ? (
          <div style={s.payBox}>
            <h3>Банківські реквізити</h3>
            <p>IBAN: додати ваш IBAN</p>
            <p>SWIFT/BIC: додати SWIFT</p>
            <p>Призначення платежу: Investment account activation</p>
          </div>
        ) : (
          <div style={s.payBox}>
            <h3>Crypto payment</h3>
            <p>USDT TRC20: додати гаманець</p>
            <p>BTC: додати гаманець</p>
            <p>ETH/ERC20: додати гаманець</p>
          </div>
        )}
      </section>

      <section id="contact" style={s.section}>
        <h2>Зв’язок та вибір менеджера</h2>

        <select style={s.manager} value={manager} onChange={(e) => setManager(e.target.value)}>
          {managers.map((m) => <option key={m}>{m}</option>)}
        </select>

        <div style={s.contactGrid}>
          <a style={s.contactBtn} href="https://wa.me/" target="_blank">WhatsApp</a>
          <a style={s.contactBtn} href="https://t.me/" target="_blank">Telegram</a>
          <a style={s.contactBtn} href="https://meet.google.com/" target="_blank">Google Meet</a>
        </div>

        <p style={s.muted}>Обраний менеджер: {manager}</p>
      </section>

      <footer style={s.footer}>
        Увага: інвестування пов’язане з ризиком. Результати є орієнтовними і не є гарантією майбутнього прибутку.
      </footer>
    </main>
  );
}

function fmt(v, c) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(v) + " " + c;
}

const s = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top right,#5b4100,#06101f 35%,#020617)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: 32,
  },
  hero: {
    minHeight: 440,
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg,rgba(255,215,0,.15),rgba(0,0,0,.3))",
    border: "1px solid rgba(255,215,0,.3)",
    borderRadius: 28,
    padding: 40,
    marginBottom: 50,
    boxShadow: "0 0 70px rgba(255,215,0,.15)",
  },
  logo: {
    width: 70,
    height: 70,
    border: "2px solid gold",
    borderRadius: 18,
    color: "gold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: 28,
    marginBottom: 20,
  },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 25 },
  goldBtn: {
    background: "linear-gradient(135deg,#facc15,#b7791f)",
    color: "#020617",
    border: 0,
    borderRadius: 12,
    padding: "13px 20px",
    fontWeight: 900,
    textDecoration: "none",
    cursor: "pointer",
  },
  darkBtn: {
    background: "rgba(255,255,255,.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,.15)",
    borderRadius: 12,
    padding: "13px 20px",
    textDecoration: "none",
  },
  section: { marginTop: 55 },
  muted: { color: "#94a3b8" },
  gold: { color: "#facc15", fontWeight: 800 },
  bonus: { color: "#22c55e", fontWeight: 900 },
  offerGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 },
  offerCard: {
    background: "rgba(15,23,42,.82)",
    border: "1px solid",
    borderRadius: 20,
    padding: 22,
    boxShadow: "0 0 30px rgba(0,0,0,.35)",
  },
  planGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 },
  plan: {
    background: "rgba(15,23,42,.82)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 22,
    padding: 22,
  },
  planActive: {
    background: "rgba(15,23,42,.92)",
    border: "1px solid gold",
    borderRadius: 22,
    padding: 22,
    boxShadow: "0 0 35px rgba(255,215,0,.28)",
  },
  badge: {
    display: "inline-block",
    background: "rgba(250,204,21,.18)",
    border: "1px solid gold",
    color: "gold",
    borderRadius: 999,
    padding: "5px 10px",
    fontSize: 12,
    fontWeight: 800,
  },
  tableWrap: { overflowX: "auto" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "rgba(15,23,42,.85)",
    borderRadius: 16,
    overflow: "hidden",
  },
  calc: {
    marginTop: 60,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,215,0,.25)",
    borderRadius: 24,
    padding: 28,
  },
  form: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 },
  result: { color: "gold", marginTop: 25 },
  marketGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 },
  marketCard: {
    background: "rgba(2,6,23,.75)",
    border: "1px solid rgba(56,189,248,.25)",
    borderRadius: 18,
    padding: 22,
  },
  tabs: { display: "flex", gap: 12, flexWrap: "wrap" },
  tab: {
    background: "rgba(255,255,255,.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,.15)",
    padding: "12px 18px",
    borderRadius: 12,
  },
  activeTab: {
    background: "gold",
    color: "#020617",
    border: "1px solid gold",
    padding: "12px 18px",
    borderRadius: 12,
    fontWeight: 900,
  },
  payBox: {
    marginTop: 20,
    background: "rgba(15,23,42,.85)",
    border: "1px solid rgba(255,215,0,.25)",
    borderRadius: 18,
    padding: 22,
  },
  manager: {
    padding: 14,
    borderRadius: 12,
    width: "100%",
    maxWidth: 520,
    marginBottom: 20,
  },
  contactGrid: { display: "flex", gap: 12, flexWrap: "wrap" },
  contactBtn: {
    background: "rgba(255,255,255,.08)",
    color: "white",
    border: "1px solid rgba(255,215,0,.35)",
    borderRadius: 14,
    padding: "14px 20px",
    textDecoration: "none",
  },
  footer: {
    marginTop: 60,
    paddingTop: 30,
    borderTop: "1px solid rgba(255,255,255,.12)",
    color: "#94a3b8",
    fontSize: 13,
  },
};
