'use client';

import Image from 'next/image';
import { useState } from 'react';
import PrimaryButton from '@/app/(ui)/components/PrimaryButton';

export default function ScalingFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="bg-slate-50 py-18 md:py-40 px-4" id='contact'>
      <div className="page-width">
        <div className="flex flex-col-reverse items-center gap-14 lg:grid lg:grid-cols-2 lg:items-center">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/551-team.webp"
              alt="Team collaboration"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="w-full">
            <h2 className="mb-8 text-center text-[32px] md:text-4xl font-medium leading-tight text-slate-900 lg:text-left">
              Ready to Start Scaling Up Your Brand?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center">
              <div className="flex flex-col gap-4 sm:flex-row max-sm:w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-md bg-slate-200 px-4 py-3 text-sm placeholder-slate-500 focus:bg-white focus:outline-none focus:ring-2"
                />
                <input
                  type="url"
                  placeholder="Website"
                  className="w-full rounded-md bg-slate-200 px-4 py-3 text-sm placeholder-slate-500 focus:bg-white focus:outline-none focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row max-sm:w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-md bg-slate-200 px-4 py-3 text-sm placeholder-slate-500 focus:bg-white focus:outline-none focus:ring-2"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-md bg-slate-200 px-4 py-3 text-sm placeholder-slate-500 focus:bg-white focus:outline-none focus:ring-2"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-md bg-slate-200 px-4 py-3 text-sm placeholder-slate-500 focus:bg-white focus:outline-none focus:ring-2"
              />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex h-12 items-center justify-center text-[20px] px-8 font-semibold uppercase leading-[115%] tracking-[0.2px] transition-colors duration-300 cursor-pointer rounded-[8px] ${
                    isSubmitting
                      ? 'bg-slate-300 text-black'
                      : isSuccess
                      ? 'bg-green-400 text-black hover:bg-black hover:text-white'
                      : 'bg-[#F3F757] text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  ) : isSuccess ? (
                    'Submitted ✓'
                  ) : (
                    'Grow With Us'
                  )}
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
