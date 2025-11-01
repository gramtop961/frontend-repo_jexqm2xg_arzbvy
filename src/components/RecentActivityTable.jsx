import React from 'react';

const columns = [
  { key: 'date', label: 'Date' },
  { key: 'asset', label: 'Asset' },
  { key: 'type', label: 'Type' },
  { key: 'amount', label: 'Amount' },
  { key: 'value', label: 'Value (USD)' },
];

const RecentActivityTable = ({ rows }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-medium">Recent Activity</h2>
        <button className="px-3 py-1.5 text-xs rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition">
          Export CSV
        </button>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-neutral-400 border-b border-neutral-800">
              {columns.map((c) => (
                <th key={c.key} className="py-2 pr-6 font-normal">{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-b border-neutral-800/60 hover:bg-neutral-800/40">
                <td className="py-2 pr-6 text-neutral-200">{r.date}</td>
                <td className="py-2 pr-6 text-neutral-200">{r.asset}</td>
                <td className="py-2 pr-6">
                  <span className={`px-2 py-0.5 rounded text-xs border ${
                    r.type === 'Buy' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' :
                    r.type === 'Sell' ? 'bg-rose-500/10 text-rose-300 border-rose-500/30' :
                    'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  }`}>
                    {r.type}
                  </span>
                </td>
                <td className="py-2 pr-6 text-neutral-200">{r.amount}</td>
                <td className="py-2 pr-6 text-neutral-200">{r.value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivityTable;
