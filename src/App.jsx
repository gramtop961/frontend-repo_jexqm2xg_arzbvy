import React from 'react';
import HeroCover from './components/HeroCover';
import AllocationDonut from './components/AllocationDonut';
import TopHoldingsGrid from './components/TopHoldingsGrid';
import RecentActivityTable from './components/RecentActivityTable';

const MOCK_ALLOCATIONS = [
  { label: 'BTC', value: 48000, color: '#4f46e5' },
  { label: 'ETH', value: 26000, color: '#10b981' },
  { label: 'SOL', value: 12000, color: '#f59e0b' },
  { label: 'ALT', value: 8000, color: '#fb7185' },
];

const MOCK_HOLDINGS = [
  { symbol: 'BTC', name: 'Bitcoin', change: 2.4, weight: 0.48, amount: 0.72, value: 48000 },
  { symbol: 'ETH', name: 'Ethereum', change: -1.2, weight: 0.26, amount: 6.2, value: 26000 },
  { symbol: 'SOL', name: 'Solana', change: 5.8, weight: 0.12, amount: 190, value: 12000 },
  { symbol: 'ALT', name: 'Alts', change: 0.9, weight: 0.14, amount: 1, value: 8000 },
];

const MOCK_ACTIVITY = [
  { date: '2025-10-01', asset: 'BTC', type: 'Buy', amount: '0.10', value: 6500 },
  { date: '2025-10-02', asset: 'ETH', type: 'Sell', amount: '1.20', value: 4200 },
  { date: '2025-10-03', asset: 'SOL', type: 'Stake', amount: '25', value: 2200 },
  { date: '2025-10-03', asset: 'BTC', type: 'Buy', amount: '0.05', value: 3400 },
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-tight">Crypto Signals</span>
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-sm">
            Settings
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <HeroCover />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AllocationDonut allocations={MOCK_ALLOCATIONS} />
          </div>
          <div className="lg:col-span-1">
            <TopHoldingsGrid holdings={MOCK_HOLDINGS} />
          </div>
        </section>

        <section>
          <RecentActivityTable rows={MOCK_ACTIVITY} />
        </section>
      </main>

      <footer className="border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} Crypto Signals Platform — Built for fast insights.
        </div>
      </footer>
    </div>
  );
}

export default App;
