'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'How is 551 different from other agencies?',
    answer:
      'Most agencies focus on isolated tactics. We build full-funnel systems that connect creative, media buying, and conversion optimization — all aligned to profitable growth, not vanity metrics.',
  },
  {
    question: 'Do you focus more on creative or on performance?',
    answer:
      'We believe creative is performance. Every creative decision is informed by data, testing, and measurable outcomes.',
  },
  {
    question: 'How fast can we expect to see results?',
    answer:
      'Initial traction typically happens within 30–60 days, depending on traffic volume and funnel complexity.',
  },
  {
    question: 'Can 551 work with brands outside the U.S.?',
    answer:
      'Yes. We work globally and adapt media strategies based on regional market dynamics.',
  },
  {
    question: 'Are you an agency or a long-term partner?',
    answer:
      'We position ourselves as long-term growth partners focused on sustainable profitability.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="w-full bg-black text-white max-sm:py-6 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-[#F3F757] text-[20px] font-medium mb-4 md:mb-6">
            FAQ
          </p>

          <p className="text-[#E5EDF1] text-[16px] md:text-[18px] font-medium mb-16 md:mb-28 max-w-md">
            We get it — choosing a growth partner is a big decision.
            Here are some answers that might help.
          </p>

          <div className="space-y-6">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-white/10 pb-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-6 text-left touch-manipulation"
                  >
                    <h3 className="text-[#E5EDF1] text-[20px] md:text-[22px] lg:text-[27px] font-medium leading-snug">
                      {item.question}
                    </h3>

                    <span
                      className={`flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-full border border-[#F3F757] transition-all duration-300 transform-gpu ${
                        isOpen
                          ? 'rotate-45 bg-[#F3F757] text-black'
                          : 'text-[#F3F757]'
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? 'max-h-40 opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[rgba(229,237,241,0.8)] text-[14px] md:text-[16px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[#F3F757] text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-tight mb-12">
            Hear our CEO explain how we built full-funnel strategies
            that drove <br className="max-sm:hidden" />
            <span className="font-semibold max-sm:font-medium">
              30% lower CPAs
            </span>{' '}
            <br className="max-sm:hidden" />
            and{' '}
            <span className="font-semibold max-sm:font-medium">
              50% cheaper add-to-carts
            </span>
          </p>

          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
            {!videoLoaded && (
              <Image
                src="/video-placeholder.webp"
                alt="Video preview"
                fill
                priority
                className="object-cover"
              />
            )}

            <iframe
              src="https://player.vimeo.com/video/1131698197?h=0&autoplay=0&loop=0&muted=1&title=0&byline=0&portrait=0"
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
            />
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Image
              src="/kainan.png"
              alt="Kainan Pires"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Kainan Pires</p>
              <p className="text-sm text-gray-400">
                CEO & Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
