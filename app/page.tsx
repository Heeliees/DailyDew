import { Coffee, Sprout } from "lucide-react";
import DailyGame from "./game-client";
import { CATALOG_VERSION } from "./data/catalog";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Daily Dew home">
            <img src="/daily-dew-chicken.png" alt="" />
            <div><span>Daily</span><strong>Dew</strong></div>
          </a>
          <div className="date-plaque">
            <Sprout aria-hidden="true" />
            <div><span>Eight clues</span><strong>One daily harvest</strong></div>
          </div>
          <a className="coffee-mini" href="https://donate.stripe.com/14A7sL20SbQke1v9CO04800" target="_blank" rel="noreferrer"><Coffee/> Support</a>
        </div>
      </header>
      <div className="landscape-strip" aria-hidden="true"><span className="cloud one" /><span className="cloud two" /><span className="hill far" /><span className="hill near" /></div>
      <div className="content-grid">
        <aside className="side-card almanac-card">
          <p className="eyebrow">Farmer&apos;s almanac</p><h2>Today&apos;s crop</h2>
          <div className="almanac-row"><span>🧑‍🌾</span><div><strong>3 villagers</strong><p>Gifts, schedules & heart events</p></div></div>
          <div className="almanac-row"><span>🌾</span><div><strong>5 valley clues</strong><p>Fish, items, places & more</p></div></div>
          <div className="almanac-row"><span>🌙</span><div><strong>Daily reset</strong><p>Midnight, New Zealand time</p></div></div>
          <div className="catalog-stamp">Catalogue {CATALOG_VERSION}<br/><span>Refreshed annually in January</span></div>
        </aside>
        <DailyGame />
        <aside className="side-card coffee-card">
          <div className="mug">☕</div><p className="eyebrow">Keep the farm growing</p><h2>Buy me a coffee</h2>
          <p>Enjoyed today&apos;s harvest? A small tip helps keep Daily Dew free and growing.</p>
          <div className="tip-chips"><span>$1</span><span>$2</span><span>$5</span><span>Custom</span></div>
          <a className="coffee-button" href="https://donate.stripe.com/14A7sL20SbQke1v9CO04800" target="_blank" rel="noreferrer"><Coffee/> Tip via Stripe</a>
          <small>Amounts shown in USD on the payment page.</small>
        </aside>
      </div>
      <footer>
        <p>Questions are based on the <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank" rel="noreferrer">Stardew Valley Wiki</a>.</p>
        <p>Daily Dew is a fan-made trivia game and is not affiliated with ConcernedApe.</p>
      </footer>
    </main>
  );
}
