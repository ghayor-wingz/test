'use client';

import Image from 'next/image';
import PrimaryButton from '../components/PrimaryButton';

export default function Performance() {
  return (
    <section className="w-full bg-[#F3F757] py-12 md:py-16">
      <div className="page-width mx-auto px-6 flex flex-col gap-6 md:py-20 ">
        <div className="flex gap-6 max-sm:flex-col-reverse">
          <div className="flex-1 bg-white rounded-xl flex flex-col md:max-w-fit p-6 md:p-12 max-sm:justify-center max-sm:items-center max-sm:order-2">
            <p className="text-black text-sm font-medium leading-[1.2] capitalize">
              Over
            </p>
            <h3 className="text-black text-[49px] md:text-[57px] font-medium leading-[1.2] capitalize">
              70+
            </h3>
            <p className="text-black text-[20px] font-medium leading-[1.2] capitalize mb-4">
              Happy Clients
            </p>
            <div className="mt-auto">
              <Image
                src="/happy-clients.webp"
                alt="happy clients"
                width={116}
                height={38}
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl p-6 md:p-12 md:max-w-[420px] max-sm:order-1 max-sm:flex max-sm:flex-col items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/megaphone-icon.webp"
                alt="megaphone icon"
                width={62}
                height={62}
                loading="lazy"
                className="max-h-[62px]"
              />
              <h3 className="text-black text-[60px] md:text-[77px] font-medium leading-[1.5] capitalize ">
                20M+
              </h3>
            </div>
            <p className="text-black text-[25px] md:text-[30px] font-medium leading-[1.2] capitalize">
              In Ad Spend Managed
            </p>
          </div>

          <div className="flex-1 md:p-6 flex flex-col gap-2 justify-center max-w-[475px] max-sm:order-3">
            <p className="text-[#8A9398] text-[20px] font-medium leading-[0.84] max-sm:mb-2">
              Performance
            </p>
            <h3 className="text-black text-[32px] md:text-[40px] font-medium leading-[1.05] tracking-[-0.4px]">
              We test, refine, and scale the winners to actually drive revenue.
            </h3>
          </div>
        </div>

        <div className="flex gap-6 items-stretch max-sm:flex-col">
          <div className="flex-1 bg-white rounded-xl p-6 md:p-12 max-h-fit md:min-w-[420px] max-sm:flex max-sm:flex-col items-center">
            <div className="flex gap-4 items-center">
              <Image
                src="/dollar-icon.webp"
                alt="dollar icon"
                width={62}
                height={62}
                loading="lazy"
                className="max-h-[62px]"
              />
              <h3 className="text-black text-[60px] md:text-[77px] font-medium leading-[1.5] capitalize">
                60M+
              </h3>
            </div>
            <p className="text-black text-center text-[28px] md:text-[33px] font-medium leading-[1.5] tracking-[0.33px] capitalize">
              Revenue Generated
            </p>
            <p className="text-black text-center text-[13px] font-medium leading-[1.2] capitalize">
              Lorem ipsum dolor amet <br /> Amet Dlor Lorem Ipsum
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 md:min-w-[205px] max-sm:flex max-sm:flex-col items-center">
              <div className="flex gap-4 items-center">
                <span className="text-black text-center text-[60px] font-medium leading-[1.5] capitalize">
                  4.8
                </span>
                <Image
                  src="/rating-star.webp"
                  alt="rating star"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-black text-[20px] font-medium leading-[1.05] capitalize max-sm:text-center">
                Average Client <br /> Rating
              </p>
              <p className="text-black text-[13px] font-medium leading-[1.2] capitalize mt-8">
                Lorem ipsum dolor amet
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:min-w-[205px] max-sm:flex max-sm:flex-col items-center">
              <div className="flex gap-4 items-center">
                <span className="text-black text-[60px] font-medium leading-[1.5] capitalize">
                  12k+
                </span>
                <Image
                  src="/trophy.webp"
                  alt="trophy"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-black text-[20px] font-medium leading-[1.05] capitalize">
                High performing <br /> Ads Delivered
              </p>
              <p className="text-black text-[13px] font-medium leading-[1.2] capitalize mt-8">
                Lorem ipsum dolor amet
              </p>
            </div>
          </div>

          <div className="flex-[1.3] flex flex-col md:min-w-[400px] order-6 max-sm:items-center max-sm:gap-6">
            <div className="bg-white p-12 flex justify-center flex-col items-center gap-4 rounded-xl">
              <Image
                src="/quote-icon.webp"
                alt="quote"
                width={42}
                height={42}
                className="mb-2"
              />
              <p className="text-black text-center text-[16px] font-medium leading-[1.2]">
                Their team are excellent strategists, they aren’t afraid to test
                new ideas.
              </p>
              <hr className="w-full" />
              <div>
                <p className="text-black text-center text-[32px] font-medium leading-[1.5] capitalize">
                  Kristy Kohler
                </p>
                <p className="text-black text-center text-[13px] font-medium leading-[1.05] capitalize">
                  Growth Marketing Manager
                </p>
              </div>
            </div>

            <div className="my-4">
              <PrimaryButton className="text-white text-[20px] font-medium leading-[115%] tracking-[0.2px] bg-black">
                Partner With 551
              </PrimaryButton>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl p-6 flex flex-col justify-between max-h-fit max-sm:flex max-sm:flex-col items-center">
            <div>
              <h3 className="text-black text-[60px] font-medium leading-[1.5] capitalize max-sm:text-center">
                100+
              </h3>
              <p className="text-black text-[20px] font-medium leading-[1.05] capitalize md:max-w-[70%]">
                Lorem Ipsum Dolor Amet
              </p>
            </div>
            <p className="text-black text-[13px] font-medium leading-[1.2] capitalize mt-4 md:mt-8">
              Lorem ipsum dolor amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
