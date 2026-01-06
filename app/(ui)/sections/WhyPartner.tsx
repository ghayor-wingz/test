'use client';

import Image from 'next/image';
import PrimaryButton from '../components/PrimaryButton';

export default function WhyPartner() {
  return (
    <section className="w-full bg-[#a2afb5] py-14 md:py-30">
      <div className="page-width flex flex-col gap-12 md:gap-30">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          
          <div className="lg:flex-1 text-center lg:text-left">
            <h2 className="text-white text-[48px] md:text-[52px] lg:text-[65px] font-medium leading-[105%]">
              Why Partner <br className="hidden lg:block" /> with Us?
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 lg:flex-1 text-center lg:text-left">
            <p className="text-white max-sm:text-center text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[110%] tracking-[0.2px]">
              Because growth is both an art and a science.
              <br/>
              Most agencies only know one side.
              <br />
              We specialize in both.
            </p>

            <div className="flex justify-center lg:justify-start">
              <PrimaryButton className="bg-[#F3F757] text-black hover:bg-black hover:text-[#A3AFB5]" href="#contact">
                Grow With Us
              </PrimaryButton>
            </div>
          </div>

          <div className="relative w-full max-w-[304px] h-[147px] mx-auto lg:mx-0 lg:flex-1">
            <Image
              src="/growth-card.webp"
              alt="Brand Card"
              fill
              className="object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full relative">
          <video
            className="w-full rounded-xl md:rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/d7058ebf0d6d479cb54607b93e7b56c9.mp4"
              type="video/mp4"
              media="(min-width:1024px)"
            />
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6d773d3c900549cda095b6c11943fdbf.mp4"
              type="video/mp4"
              media="(max-width:1023px)"
            />
          </video>
        </div>

      </div>
    </section>
  );
}
