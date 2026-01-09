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
      'We do not choose between creative and performance. We design for both at the same time. Strong creative earns attention and builds trust. Performance systems turn that attention into revenue. At 551, every concept is developed with a clear performance hypothesis and every performance insight feeds back into the creative. The result is work that looks intentional and scales efficiently.',
  },
  {
    question: 'How fast can we expect to see results?',
    answer:
      'Speed depends on the starting point, but momentum usually comes quickly. In the early phase, our focus is on learning fast. We test messaging, offers, and formats to identify clear signals. Most partners see directional performance insights within the first few weeks and measurable growth as winning patterns are refined and scaled over time.',
  },
  {
    question: 'Can 551 work with brands outside the U.S.?',
    answer:
      'Yes. We’re an international team with experience in many global markets. We adapt strategy and creative to the different platforms and consumer behaviors of specific regions. While the channels may change, the fundamentals stay the same. Clear positioning, strong creative, and disciplined testing translate across borders when executed with local nuance.',
  },
  {
    question: 'Are you an agency or a long-term partner?',
    answer:
      'We operate as a long-term growth partner. Our best work happens when we are deeply embedded in a brand’s evolution, not just executing tasks but helping shape strategy over time. We test, learn, and scale alongside our partners, focusing on sustainable growth rather than short-term wins.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="w-full bg-black text-white max-sm:py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-start">
        <div>
          <p className="text-[#F3F757] text-[20px] font-medium mb-4 md:mb-6">
            FAQ
          </p>

          <p className="text-[#E5EDF1] text-[16px] md:text-[18px] font-medium mb-16 md:mb-28 max-w-md">
            We get it — choosing a growth partner is a big decision.<br/>
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

        <div className='flex flex-col justify-between max-h-[90%] h-full max-sm:gap-8'>
          <p className="text-[#F3F757] text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-tight">
            Hear our CEO explain how we built full-funnel strategies
            that drove {' '}
            <span className="font-medium">
              30% lower CPAs
            </span>{' '}
            and{' '}
            <span className="font-medium">
              50% cheaper add-to-carts
            </span>
          </p>
          <div>
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
      </div>
    </section>
  );
}
