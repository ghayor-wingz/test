'use client';

import Image from 'next/image';
import PrimaryButton from '../components/PrimaryButton';

export default function Hero() {
  return (
    <section className="bg-[#F3F757] overflow-hidden pb-12 md:pb-24">
      <div className="relative page-width">
        <div className="relative min-h-[250px] md:min-h-[620px] w-full overflow-hidden">
          <h1 className="sr-only">
            Five Five One — Beautiful brands attract. Profitable brands convert.
          </h1>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/551-mb.gif?v=1767370503"
            />
            <source
              media="(min-width: 769px)"
              srcSet="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/551-dk.gif?v=1767370144"
            />
            <Image
              src="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/551-dk.gif?v=1767370144"
              alt="five five one hero"
              fill
              unoptimized
              priority
              className="absolute inset-0 object-contain"
              aria-hidden="true"
            />
          </picture>
        </div>

        <div className="md:page-width mx-auto md:px-6">
          <div className="mt-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-4 md:gap-12">
            <div className="flex-1">
              <p className="text-black font-medium text-[30px] max-sm:text-center md:text-[55px] leading-[105%]">
                Beautiful brands attract.
                <br />
                Profitable brands convert.
                <br />
                Our lab perfects both.
              </p>
            </div>
            <div className="flex-1 md:max-w-[420px] flex flex-col gap-4 md:gap-8 max-sm:justify-center max-sm:items-center">
              <p className="mb-6 text-black text-[16px] max-sm:text-center md:text-[20px] font-medium leading-[115%] tracking-[0.2px]">
                We’re a growth lab that combines dazzling creative with rigorous
                analysis to make marketing you can be proud of that also
                performs.
              </p>
              <PrimaryButton className="text-black text-[20px] font-medium leading-[115%] tracking-[0.2px] bg-black">
                Grow With Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
