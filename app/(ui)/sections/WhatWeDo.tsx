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
    image: "/web.webp",
    description:
      "A high-performing website is the backbone of your brand. Whether you need a revamp or a full build from scratch, we create stunning, conversion-focused websites that drive sales.",
    list: ["UI/UX DESIGN", "CRO", "DEVELOPMENT"],
  },
  {
    key: "creative",
    title: "CREATIVE",
    image: "/creative.webp",
    description:
      "It’s not just about looking good and sounding clever. Good creative needs to earn attention and convert that into sales. We develop brand systems and performance creative that stop the scroll and move people to act.",
    list: ["BRAND IDENTITY", "STATIC & VIDEO ADS"],
  },
  {
    key: "paid-media",
    title: "PAID MEDIA",
    image: "/paid-media.webp",
    description: "Media is only as strong as the strategy behind it. We plan, launch, and optimize paid media with a singular focus on efficient growth. From testing to scaling, we treat media as a living system that is constantly adapting and improving.",
    list: ["MEDIA STRATGEY", "CHANNEL MANAGMENT", "OPTIMIZATION & SCALING"],
  },
  {
    key: "retention",
    title: "RETENTION",
    image: "/retention.webp",
    description: "Acquisition gets attention. Retention builds businesses. We design retention systems that turn first-time buyers into long-term customers by creating consistent, valuable touchpoints across the entire customer lifecycle.",
    list: ["GROWTH STRATEGY", "EMAIL & SMS", "SUBSCRIPTION OPTIMIZATION", "LOYALTY & REPEAT PURCHASE SYSTEMS"],
  },
  {
    key: "tiktok-shop",
    title: "TIKTOK SHOP",
    image: "/tiktok-shop.webp",
    description: "TikTok Shop is not just another channel. It has become a supercharged revenue engine where culture and commerce collide. We help brands launch, optimize, and scale inside the platform with content-led strategies that drive discovery, trust, and conversion.",
    list: ["SHOP SETUP", "CREATOR STRATEGY", "CONTENT-TO-CONVERSION FLOWS"],
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = useRef(0);

  const animateContent = () => {
    if (!contentRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    if (listRef.current) {
      tl.fromTo(
        listRef.current.children,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const total = SERVICES.length;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${total * 600}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
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

    return () => {
      trigger.kill();
    };
  }, []);

  const activeService = SERVICES[activeIndex];

  return (
    <section
        ref={sectionRef}
        id="what-we-do"
        className="min-h-screen bg-[#f4f7f8] flex items-center"
      >
        <div className="page-width w-full flex flex-col gap-12 lg:gap-20  max-sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-baseline text-black">
            <h2 className="text-[16px] lg:text-[20px] font-medium leading-[0.84]">
              WHAT WE DO
            </h2>

            <p className="w-full lg:max-w-[50%] text-[14px] lg:text-[18px] font-medium leading-[1.4] lg:leading-[1.1] tracking-[0.18px]">
              We combine all key growth services inside one “lab” – not to upsell,
              but to choose what your brand actually needs. No fluff. No unnecessary
              add-ons. Just the formulas that drive real, sustainable growth.
            </p>
          </div>

          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
            <div
              ref={contentRef}
              className="space-y-6 w-full lg:w-1/2 max-sm:order-2"
            >
              <div className="relative w-full max-w-full lg:max-w-md overflow-hidden rounded-lg">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>

              <p className="text-[14px] lg:text-[18px] font-medium leading-[1.4] lg:leading-[1.1] tracking-[0.18px] text-black w-full lg:max-w-[70%]">
                {activeService.description}
              </p>

              <ul
                ref={listRef}
                className="space-y-1 list-disc ml-4 pl-4 max-sm:order-1"
              >
                {activeService.list.map((item) => (
                  <li
                    key={item}
                    className="text-[16px] lg:text-[18px] font-medium leading-[1.4] lg:leading-[1.1] tracking-[0.18px] uppercase text-[#47494a]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-2 lg:space-y-4 w-full lg:w-1/2">
              {SERVICES.map((service, index) => (
                <li
                  key={service.key}
                  className={`text-[36px] sm:text-[44px] lg:text-[85px] font-medium leading-[1.05] tracking-[-0.85px] transition-all m-0 ${
                    index === activeIndex
                      ? "text-black"
                      : "text-[#AFB6BA]"
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
