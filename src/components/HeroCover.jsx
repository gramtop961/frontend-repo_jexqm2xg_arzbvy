import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[360px] md:h-[420px] bg-neutral-950 overflow-hidden rounded-2xl border border-neutral-800">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950/90 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-start justify-end p-6 md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs font-medium mb-3">
          Live • Crypto Signals Platform
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
          Actionable Signals. Confident Decisions.
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-300">
          Real‑time insights for your portfolio with a sleek, responsive dashboard. Dark mode by default, built with Tailwind.
        </p>
      </div>
    </section>
  );
};

export default HeroCover;
