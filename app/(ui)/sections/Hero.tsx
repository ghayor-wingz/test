'use client';

import PrimaryButton from '../components/PrimaryButton';

export default function Hero() {
  return (
    <section className="bg-[#F3F757] overflow-hidden pb-12 md:pb-24">
      <div className="relative page-width">
        <div className="relative md:min-h-[620px] w-full overflow-hidden">
          <h1 className="sr-only">
            Five Five One — Beautiful brands attract. Profitable brands convert.
          </h1>
          <div className="md:hidden mt-10 overflow-hidden bg-[#F3F757] w-full">
            <video
            className="object-cover w-full block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/poster-mb.webp?v=1767725847"
            aria-hidden="true"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/26f138c98cbb4439bd90e2ce86b930f9.mp4"
              type="video/mp4"
            />
          </video>
          </div>
          

          <video
            className="absolute inset-0 h-full w-full object-contain hidden md:block "
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://cdn.shopify.com/s/files/1/0706/7887/2109/files/poster-dk.webp?v=1767725847"
            aria-hidden="true"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/bd4c7f93422449698b4e7bc0ba5f6e86.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="mx-auto">
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

              <PrimaryButton className="text-white text-[20px] font-medium leading-[115%] tracking-[0.2px] bg-black hover:bg-[#A3AFB5] hover:text-black" href="#contact">
                Grow With Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
