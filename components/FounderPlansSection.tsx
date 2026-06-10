"use client";

import { KeyboardEvent, TouchEvent, useRef, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";

type CardPosition = "left" | "center" | "right";

const positionClasses: Record<CardPosition, string> = {
  left: "z-10 -translate-x-[126%] scale-[0.84] opacity-55",
  center: "z-30 -translate-x-1/2 scale-100 opacity-100",
  right: "z-10 translate-x-[26%] scale-[0.84] opacity-55",
};

const permanenceToneClasses: Record<string, string> = {
  steel: "text-steel-light",
  bronze: "text-[#9b7658]",
  silver: "text-[#bdcbd1]",
  gold: "text-[#b7a06a]",
};

function getCardPosition(index: number, activeIndex: number): CardPosition {
  const offset = (index - activeIndex + 3) % 3;
  if (offset === 0) return "center";
  return offset === 1 ? "right" : "left";
}

function WolfMark({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={className}
      fill="none"
    >
      <path
        d="M8 8 19 14 24 9 29 14 40 8 36 28 24 40 12 28 8 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m12 13 9 9-5 7M36 13l-9 9 5 7M19 31l5 4 5-4M24 9v26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path d="m17 23 4 2M31 23l-4 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function FounderPlansSection() {
  const { founderPlans, whatsapp } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function activatePrevious() {
    setActiveIndex((current) => (current + founderPlans.formats.length - 1) % founderPlans.formats.length);
  }

  function activateNext() {
    setActiveIndex((current) => (current + 1) % founderPlans.formats.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      activatePrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      activateNext();
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) activatePrevious();
    else activateNext();
  }

  return (
    <section
      id="planes-fundadores"
      aria-labelledby="founder-plans-title"
      className="overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="section-shell">
        <div className="max-w-4xl">
          <h2
            id="founder-plans-title"
            className="text-4xl font-black leading-tight text-foreground sm:text-5xl"
          >
            {founderPlans.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-silver-cold sm:text-lg">
            {founderPlans.text}
          </p>
        </div>

        <div
          className="relative mt-10 h-[570px] touch-pan-y sm:h-[550px] lg:h-[570px]"
          aria-label="Formatos de ingreso ULF"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {founderPlans.formats.map((format, index) => {
            const position = getCardPosition(index, activeIndex);
            const isActive = position === "center";

            return (
              <article
                className={`absolute left-1/2 top-4 flex h-[530px] w-[calc(100%-3rem)] cursor-pointer flex-col border bg-petrol p-6 shadow-[0_20px_65px_rgba(0,0,0,0.36)] transition-[transform,opacity,border-color] duration-500 ease-out motion-reduce:transition-none sm:h-[510px] sm:w-[76%] sm:p-7 lg:h-[530px] lg:w-[42%] ${
                  positionClasses[position]
                } ${
                  isActive
                    ? "border-steel-light/70"
                    : "border-steel-dark/35 hover:opacity-80"
                }`}
                key={format.code}
                role="button"
                tabIndex={0}
                aria-current={isActive ? "true" : undefined}
                aria-pressed={isActive}
                aria-label={`${format.title}${isActive ? ", formato activo" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={handleKeyDown}
              >
                <div className="min-h-7">
                  {format.featured ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-cold">
                      {format.label}
                    </p>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-light">
                      Formato {format.code}
                    </p>
                  )}
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                  {format.title}
                </h3>
                <p className="mt-5 leading-7 text-silver-cold">{format.text}</p>

                <div className="mt-7 border-t border-steel-dark/40 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-light">
                    Ideal para
                  </p>
                  <p className="mt-3 leading-7 text-foreground/85">{format.ideal}</p>
                </div>

                <div className="mt-auto pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-light">
                    Frecuencias disponibles
                  </p>
                  <p className="mt-3 font-semibold text-silver-cold">
                    {format.frequency}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-steel-light">
          <span className="hidden md:inline">Selecciona un formato con hover, click o teclado</span>
          <span className="md:hidden">Desliza o toca una tarjeta para explorar formatos</span>
        </p>

        <div className="mt-12 border border-steel-dark/45 bg-graphite/55 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              {founderPlans.permanence.title}
            </h3>
            <p className="mt-5 text-xl font-semibold leading-tight text-silver-cold sm:text-2xl">
              {founderPlans.permanence.featuredText}
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-steel-light">
              {founderPlans.permanence.text}
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {founderPlans.permanence.options.map((option) => (
              <li
                className="group border border-steel-dark/40 bg-petrol/65 p-5 transition-colors duration-300 hover:border-steel-light/45"
                key={option.title}
              >
                <WolfMark
                  className={`h-11 w-11 ${permanenceToneClasses[option.tone]}`}
                />
                <h4 className="mt-5 text-2xl font-black leading-none text-foreground">
                  {option.title}
                </h4>
                <p className="mt-4 leading-7 text-silver-cold">{option.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-steel-dark/40 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {whatsapp.consultTitle}
            </h3>
            <p className="mt-2 max-w-2xl leading-7 text-silver-cold">
              {whatsapp.consultText}
            </p>
          </div>
          <WhatsAppButton
            label={whatsapp.consultLabel}
            className="w-full shrink-0 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
