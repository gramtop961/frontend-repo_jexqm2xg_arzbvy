import React from 'react';

const TopHoldingsGrid = ({ holdings }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-medium">Top Holdings</h2>
        <div className="text-xs text-neutral-400">Last 24h</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {holdings.map((h) => (
          <div key={h.symbol} className="bg-neutral-950/50 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 text-sm font-semibold">
                  {h.symbol.slice(0, 1)}
                </div>
                <div>
                  <div className="text-white font-medium">{h.symbol}</div>
                  <div className="text-xs text-neutral-400">{h.name}</div>
                </div>
              </div>
              <div className={`flex items-center gap-1 text-sm ${h.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: h.change >= 0 ? '#10b981' : '#fb7185' }} />
                {h.change >= 0 ? '+' : ''}{h.change}%
              </div>
            </div>
            <div className="mt-3">
              <div className="text-neutral-300 text-sm">{h.amount.toLocaleString()} • {h.value.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</div>
              <div className="mt-2 h-2 w-full bg-neutral-800 rounded">
                <div className="h-2 bg-indigo-500 rounded" style={{ width: `${h.weight * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHoldingsGrid;
