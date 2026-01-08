"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  key: string;
  title: string;
  image: string;
  description: string;
  list: string[];
};

const SERVICES: Service[] = [
  {
    key: "web",
    title: "WEB",
    image: "https://cdn.shopify.com/s/files/1/0706/7887/2109/files/web.webp?v=1767825004",
    description:
      "A high-performing website is the backbone of your brand. Whether you need a revamp or a full build from scratch, we create stunning, conversion-focused websites that drive sales.",
    list: ["UI/UX DESIGN", "CRO", "DEVELOPMENT"],
  },
  {
    key: "creative",
    title: "CREATIVE",
    image: "https://cdn.shopify.com/s/files/1/0706/7887/2109/files/creative.webp?v=1767825004",
    description:
      "It’s not just about looking good and sounding clever. Good creative needs to earn attention and convert that into sales. We develop brand systems and performance creative that stop the scroll and move people to act.",
    list: ["BRAND IDENTITY", "STATIC & VIDEO ADS"],
  },
  {
    key: "paid-media",
    title: "PAID MEDIA",
    image: "https://cdn.shopify.com/s/files/1/0706/7887/2109/files/paid-media.webp?v=1767825003",
    description:
      "Media is only as strong as the strategy behind it. We plan, launch, and optimize paid media with a singular focus on efficient growth.",
    list: ["MEDIA STRATGEY", "CHANNEL MANAGMENT", "OPTIMIZATION & SCALING"],
  },
  {
    key: "retention",
    title: "RETENTION",
    image: "https://cdn.shopify.com/s/files/1/0706/7887/2109/files/retention.webp?v=1767825004",
    description:
      "Acquisition gets attention. Retention builds businesses. We design retention systems that turn first-time buyers into long-term customers.",
    list: [
      "GROWTH STRATEGY",
      "EMAIL & SMS",
      "SUBSCRIPTION OPTIMIZATION",
      "LOYALTY & REPEAT PURCHASE SYSTEMS",
    ],
  },
  {
    key: "tiktok-shop",
    title: "TIKTOK SHOP",
    image: "https://cdn.shopify.com/s/files/1/0706/7887/2109/files/tiktok-shop.webp?v=1767825004",
    description:
      "TikTok Shop is not just another channel. It has become a supercharged revenue engine.",
    list: ["SHOP SETUP", "CREATOR STRATEGY", "CONTENT-TO-CONVERSION FLOWS"],
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(0);
  const prevIndex = useRef(0);

  const animateContent = () => {
    if (!contentRef.current) return;
    gsap.killTweensOf(contentRef.current);
    if (listRef.current) {
      gsap.killTweensOf(listRef.current.children);
    }

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: "auto" }
    );

    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: -8 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const total = SERVICES.length;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${total * 400}`,
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const index = Math.min(
            total - 1,
            Math.floor(self.progress * total)
          );

          if (index !== prevIndex.current) {
            prevIndex.current = index;
            setActiveIndex(index);
            animateContent();
          }
        },
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    accordionRefs.current.forEach((el, index) => {
      if (!el) return;

      const isOpen = mobileActiveIndex === index;

      gsap.to(el, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, [mobileActiveIndex]);

  const activeService = SERVICES[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="min-h-screen bg-[#f4f7f8] flex items-center max-sm:py-12 overflow-hidden"
    >
      <div className="page-width w-full flex flex-col gap-12 lg:gap-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-baseline text-black pt-12">
          <h2 className="text-[16px] lg:text-[20px] font-medium leading-[0.84]">
            WHAT WE DO
          </h2>

          <p className="w-full lg:max-w-[50%] text-[14px] lg:text-[18px] font-medium leading-[1.4] lg:leading-[1.1] tracking-[0.18px]">
            We combine all key growth services inside one “lab” - not to upsell,
            but to choose what your brand actually needs. No fluff. No unnecessary
            add-ons. Just the formulas that drive real, sustainable growth.
          </p>
        </div>

        <div className="block lg:hidden space-y-4">
          {SERVICES.map((service, index) => {
            const isActive = mobileActiveIndex === index;

            return (
              <div key={service.key} className="border-b border-[#d5dadd] pb-4">
                <button
                  onClick={() =>
                    setMobileActiveIndex(isActive ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span
                    className={`text-[28px] font-medium ${
                      isActive ? "text-black" : "text-[#AFB6BA]"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`transition-transform ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                    ref={(el) => {
                      accordionRefs.current[index] = el;
                    }}
                    className="overflow-hidden h-0 opacity-0"
                  >
                  <div className="mt-6 space-y-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={900}
                      className="rounded-lg"
                    />

                    <p className="text-[15px] leading-[1.5] text-black">
                      {service.description}
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                      {service.list.map((item) => (
                        <li
                          key={item}
                          className="uppercase text-[14px] font-medium text-[#47494a]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
          <div
            ref={contentRef}
            className="space-y-6 w-full lg:w-1/2 min-h-[520px]"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-lg">
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-[18px] font-medium leading-[1.1] tracking-[0.18px] text-black w-full lg:max-w-[70%]">
              {activeService.description}
            </p>

            <ul ref={listRef} className="space-y-1 list-disc ml-4 pl-4">
              {activeService.list.map((item) => (
                <li
                  key={item}
                  className="text-[18px] font-medium uppercase text-[#47494a]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul className=" w-full lg:w-1/2">
            {SERVICES.map((service, index) => (
              <li
                key={service.key}
                className={`text-[85px] font-medium leading-[1.05] tracking-[-0.85px] ${
                  index === activeIndex ? "text-black" : "text-[#AFB6BA]"
                }`}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
