import React, { useMemo } from 'react';

const size = 320;
const stroke = 28;
const radius = (size - stroke) / 2;
const circumference = 2 * Math.PI * radius;

const formatPct = (v) => `${(v * 100).toFixed(1)}%`;

const AllocationDonut = ({ allocations }) => {
  const total = useMemo(() => allocations.reduce((acc, a) => acc + a.value, 0), [allocations]);
  const normalized = useMemo(
    () =>
      allocations.map((a) => ({
        ...a,
        pct: total === 0 ? 0 : a.value / total,
      })),
    [allocations, total]
  );

  let offsetAcc = 0;

  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-medium">Allocation</h2>
        <span className="text-xs text-neutral-400">Donut view</span>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
          <g transform={`translate(${size / 2}, ${size / 2})`}>
            <circle
              r={radius}
              cx={0}
              cy={0}
              fill="none"
              stroke="#262626"
              strokeWidth={stroke}
            />
            {normalized.map((seg, idx) => {
              const dash = seg.pct * circumference;
              const gap = circumference - dash;
              const circle = (
                <circle
                  key={seg.label + idx}
                  r={radius}
                  cx={0}
                  cy={0}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={stroke}
                  strokeDasharray={`${dash} ${gap}`}
                  strokeDashoffset={-offsetAcc}
                  transform="rotate(-90)"
                  strokeLinecap="butt"
                />
              );
              offsetAcc += dash;
              return circle;
            })}
            <text
              x="0"
              y="-8"
              textAnchor="middle"
              className="fill-white font-semibold"
              style={{ fontSize: 20 }}
            >
              {total.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
            </text>
            <text x="0" y="18" textAnchor="middle" className="fill-neutral-400" style={{ fontSize: 12 }}>
              Portfolio value
            </text>
          </g>
        </svg>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {normalized.map((a) => (
            <div key={a.label} className="bg-neutral-950/50 border border-neutral-800 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: a.color }} />
                  <span className="text-sm text-white">{a.label}</span>
                </div>
                <div className="text-sm text-neutral-300">{formatPct(a.pct)}</div>
              </div>
              <div className="mt-2 h-2 w-full bg-neutral-800 rounded">
                <div
                  className="h-2 rounded"
                  style={{ width: `${a.pct * 100}%`, backgroundColor: a.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllocationDonut;
