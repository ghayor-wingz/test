"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CLIENTS, Client } from "@/app/lib/constants/clients";

export default function ClientDetails() {
  const [activeClient, setActiveClient] = useState<Client>(CLIENTS[0]);
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const contentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabBgRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!tabsRef.current || !tabBgRef.current) return;
    const activeTab = tabsRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (!activeTab) return;
    gsap.to(tabBgRef.current, { x: activeTab.offsetLeft, width: activeTab.offsetWidth, duration: 0.45, ease: "power3.out" });
  }, [activeClient]);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".animate-item", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 });
    }, contentRef);
    return () => ctx.revert();
  }, [activeClient]);

  useLayoutEffect(() => {
    if (!imageWrapperRef.current) return;
    gsap.fromTo(imageWrapperRef.current, { x: direction * 80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" });
  }, [activeImage, direction]);

  return (
    <section className="bg-black text-white py-12 md:py-24" id="case-studies">
      <div className="page-width">
        <p className="text-[#E5EDF1] text-[20px] font-medium leading-[115%] mb-10">
          We don’t create for likes, <br /> we create for results.
        </p>

        <div className="relative mb-16 border-b border-neutral-800 w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible" ref={tabsRef}>
          <div ref={tabBgRef} className="absolute top-0 bottom-0 bg-[#F3F757] rounded-md" />
          <div className="inline-flex gap-2 min-w-max px-2 lg:px-0 touch-pan-x">
            {CLIENTS.map((client) => {
              const isActive = activeClient.id === client.id;
              return (
                <button
                  key={client.id}
                  data-active={isActive}
                  onClick={() => { setActiveClient(client); setActiveImage(0); }}
                  className={`relative z-10 px-6 py-4 text-[18px] uppercase transition-colors ${isActive ? "text-black font-semibold" : "text-[#e5edf1b5] hover:text-white"}`}
                >
                  {client.name}
                </button>
              );
            })}
          </div>
        </div>

        <div ref={contentRef}>
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
            <div className="animate-item">
              <h2 className="text-[#E5EDF1] text-[40px] md:text-[60px] font-medium leading-[84%] mb-3">{activeClient.name}</h2>
              <span className="text-[18px] text-[rgba(229,237,241,0.9)]">({activeClient.since})</span>
            </div>
            <p className="max-w-xl text-[18px] font-normal md:text-[20px] leading-[120%] animate-item">{activeClient.description}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 items-stretch md:max-h-[550px]">
            <div className="relative bg-neutral-900 rounded-xl overflow-hidden animate-item mx-auto w-full max-w-full h-[313px] lg:mx-0 lg:max-w-[569px] lg:h-[550px] flex-shrink-0">
              <div ref={imageWrapperRef} key={activeClient.images[activeImage]} className="absolute inset-0">
                <picture className="block lg:hidden w-full h-full">
                  <img src={activeClient.images[activeImage]} alt={activeClient.name} className="w-full h-full object-cover" loading="lazy"/>
                </picture>
                <div className="hidden lg:block">
                  <Image src={activeClient.images[activeImage]} alt={activeClient.name} fill className="object-cover" priority />
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-10">
                <button onClick={() => { setDirection(-1); setActiveImage((activeImage - 1 + activeClient.images.length) % activeClient.images.length); }} className="w-10 h-10 rounded-full bg-white border border-black text-black">←</button>
                <button onClick={() => { setDirection(1); setActiveImage((activeImage + 1) % activeClient.images.length); }} className="w-10 h-10 rounded-full bg-white border border-black text-black">→</button>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full stats-box lg:w-[325px]">
              {activeClient.stats.map((stat) => (
                <div key={stat.label} className="bg-[#F3F757] text-black rounded-xl p-4 animate-item flex-1">
                  <div className="text-[46px] tracking-normal md:text-[57px] flex gap-4 mb-2 stat-value">
                    <Image src="/trend-icon.png" alt="" width={50} height={50} className="object-contain max-sm:w-[40px] max-sm:h-[40px]"/>
                    {stat.value}
                  </div>
                  <p className="text-[#000] text-[20px] font-medium leading-[140%] tracking-normal">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className={`flex flex-col w-full lg:w-[290px] gap-4 flex-1`}>
              {activeClient.testimonial?.quote && (
                <div className="bg-[#F3F757] rounded-xl px-6 py-10 animate-item flex-shrink-0">
                  <p className="text-black text-[18px] font-medium leading-[110%] tracking-[0.18px] mb-6">“{activeClient.testimonial.quote}”</p>
                  <div className="flex items-center gap-3">
                    <Image src={activeClient.testimonial.avatar} alt={activeClient.testimonial.author} width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-medium text-black">{activeClient.testimonial.author}</p>
                      <span className="text-xs text-black">{activeClient.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="bg-[#F3F757] rounded-xl px-6 py-10 animate-item flex-1 text-black flex">
                <ul className="space-y-2 text-[21px] flex flex-col justify-center pl-6">
                  {activeClient.services.map((service) => (
                    <li key={service} className="text-black text-[22px] font-medium leading-[130%] tracking-[0.22px]">• &nbsp; {service}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
