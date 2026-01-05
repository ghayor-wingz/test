'use client';

import Image from 'next/image';
import PrimaryButton from '../components/PrimaryButton';

export default function WhyPartner() {
  return (
    <section className="w-full bg-[#a9b3b6] py-14 md:py-20">
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
              <PrimaryButton className="bg-[#F3F757] !text-black">
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
          <picture>
            <source
              srcSet="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/ad-grow-dk.gif?v=1767370555"
              media="(min-width:1024px)"
              type="image/gif"
            />
            <source
              srcSet="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/ad-grow-mb.gif?v=1767370505"
              media="(max-width:1023px)"
              type="image/gif"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/ad-grow-dk.gif?v=1767370555"
              alt="Growth animation"
              className="w-full rounded-xl md:rounded-2xl"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </picture>
        </div>

      </div>
    </section>
  );
}
