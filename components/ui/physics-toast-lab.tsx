"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ToastTone = "success" | "warning" | "error" | "info";

type ToastItem = {
  id: string;
  tone: ToastTone;
  title: string;
  message: string;
  createdAt: number;
  ttl: number;
};

type PhysicsState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotate: number;
  fade: number;
};

const MAX_TOASTS = 4;
const STAGE_HEIGHT = 74;

const toneStyles: Record<ToastTone, string> = {
  success: "from-emerald-300/45 via-emerald-200/20 to-transparent text-emerald-100",
  warning: "from-amber-300/45 via-amber-200/20 to-transparent text-amber-100",
  error: "from-rose-300/45 via-rose-200/20 to-transparent text-rose-100",
  info: "from-sky-300/45 via-sky-200/20 to-transparent text-sky-100",
};

export function PhysicsToastLab() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastRefs = useRef(new Map<string, HTMLDivElement>());
  const states = useRef(new Map<string, PhysicsState>());
  const raf = useRef<number | null>(null);

  const spawn = useCallback((tone: ToastTone, title: string, message: string) => {
    const next: ToastItem = {
      id: `${performance.now()}-${Math.random().toString(36).slice(2, 8)}`,
      tone,
      title,
      message,
      createdAt: performance.now(),
      ttl: 4200,
    };

    setToasts((current) => {
      const nextItems = [next, ...current].slice(0, MAX_TOASTS);

      nextItems.forEach((item) => {
        if (!states.current.has(item.id)) {
          states.current.set(item.id, {
            x: 32,
            y: 0,
            vx: 0,
            vy: 0,
            rotate: (Math.random() - 0.5) * 8,
            fade: 1,
          });
        }
      });

      return nextItems;
    });

    toasts.forEach((toast) => {
      if (!states.current.has(toast.id)) {
        states.current.set(toast.id, {
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          rotate: 0,
          fade: 1,
        });
      }
    });
  }, [toasts]);

  const remove = useCallback((id: string) => {
    setToasts((current) => current.filter((t) => t.id !== id));
    states.current.delete(id);
    toastRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const loop = () => {
      const now = performance.now();

      if (!toasts.length) {
        raf.current = null;
        return;
      }

      toasts.forEach((toast, index) => {
        const node = toastRefs.current.get(toast.id);
        const state = states.current.get(toast.id);
        if (!node || !state) return;

        const targetY = index * STAGE_HEIGHT;
        const stiffness = 0.09;
        const damping = 0.86;

        const dy = targetY - state.y;
        const dx = 0 - state.x;

        state.vy += dy * stiffness;
        state.vx += dx * stiffness;
        state.vy *= damping;
        state.vx *= damping;

        state.y += state.vy;
        state.x += state.vx;

        const age = now - toast.createdAt;
        const outStart = Math.max(0, toast.ttl - 700);
        if (age > toast.ttl) {
          remove(toast.id);
          return;
        }

        state.fade = age < outStart ? 1 : 1 - (age - outStart) / 700;
        node.style.transform = `translate3d(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px, 0) rotate(${(state.rotate * 0.9).toFixed(3)}deg)`;
        node.style.opacity = `${Math.max(0, state.fade).toFixed(3)}`;
      });

      if (!toasts.length) {
        raf.current = null;
        return;
      }

      raf.current = requestAnimationFrame(loop);
    };

    if (!raf.current) {
      raf.current = requestAnimationFrame(loop);
    }

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
  }, [toasts, remove]);

  return (
    <section className="w-full max-w-[360px] rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 backdrop-blur-xl text-white shadow-[0_16px_80px_rgba(13,28,58,0.28)]">
      <div className="relative isolate">
        <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <filter id="toastGlass" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12" result="glow" />
              <feBlend in="SourceGraphic" in2="glow" mode="screen" />
            </filter>

            <filter id="toastDistort" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="8" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
            </filter>
          </defs>
        </svg>

        <div className="mb-3">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/70">Physics toast lab</h2>
          <p className="text-xs text-white/50 mt-1">Opinionated spring stack + SVG filters</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            type="button"
            onClick={() => spawn("success", "Preset saved", "Layout persisted with stable hashes.")}
            className="text-xs px-3 py-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 hover:bg-emerald-300/20 transition-colors"
          >
            Success
          </button>
          <button
            type="button"
            onClick={() => spawn("warning", "Viewport high latency", "Recalculating spring damping")}
            className="text-xs px-3 py-2 rounded-full border border-amber-300/35 bg-amber-300/10 hover:bg-amber-300/20 transition-colors"
          >
            Warning
          </button>
          <button
            type="button"
            onClick={() => spawn("error", "Validation failed", "Physics constraint skipped for invalid input")}
            className="text-xs px-3 py-2 rounded-full border border-rose-300/35 bg-rose-300/10 hover:bg-rose-300/20 transition-colors"
          >
            Error
          </button>
          <button
            type="button"
            onClick={() => spawn("info", "Perf mode", "Frame budget check passed at 60fps target")}
            className="text-xs px-3 py-2 rounded-full border border-sky-300/35 bg-sky-300/10 hover:bg-sky-300/20 transition-colors"
          >
            Info
          </button>
        </div>

        <div className="relative min-h-[280px]" style={{ contain: "layout paint" }}>
          {toasts.map((toast) => (
            <article
              key={toast.id}
              ref={(node) => {
                if (node) {
                  toastRefs.current.set(toast.id, node);
                }
              }}
              className={`absolute left-1/2 w-full -translate-x-1/2 rounded-xl border border-white/15 bg-gradient-to-br ${toneStyles[toast.tone]} p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-[filter] will-change-transform`}
              style={{
                filter: "url(#toastGlass) url(#toastDistort)",
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-white/95">{toast.title}</p>
                <button
                  type="button"
                  aria-label="Dismiss toast"
                  onClick={() => remove(toast.id)}
                  className="text-white/50 hover:text-white/80"
                >
                  ×
                </button>
              </div>
              <p className="mt-1 text-xs text-white/75 leading-relaxed">{toast.message}</p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-white/75"
                  style={{
                    width: `${Math.max(0, 100 - Math.max(0, performance.now() - toast.createdAt) / toast.ttl * 100)}%`,
                    willChange: "width",
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

