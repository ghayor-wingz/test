import Image from 'next/image';
import Link from 'next/link';

const menuLinks = ['WHY US?', 'WHAT WE DO', 'OUR RESULTS', 'CASE STUDIES'];
const socialIcons = ['fb-icon', 'instagram-icon', 'linkedin-icon', 'x-icon', 'yt-icon'];
const partnerLogos = [
  '/shopify.webp',
  '/klaviyo.webp',
  '/agency-logo.webp',
];

export default function Footer() {
  return (
    <footer className="bg-[#F3F757] text-black pt-10 pb-10 pt-30">
      <div className="page-width flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        <div className="flex flex-col md:gap-6 md:items-start">
          <div className="flex flex-col items-center md:items-center md:justify-between gap-10 md:gap-[5rem]">
            <Image
              src="/footer-551-logo.webp"
              alt="551 Growth Lab Logo"
              width={425}
              height={120}
              className="w-[260px] md:w-[425px] h-auto"
              priority
            />
            <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-6 md:ml-6 md:items-center md:mt-[6rem]">
              {menuLinks.map((link) => (
                <Link key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="hover:underline">{link}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-lg font-medium mb-4">LET'S CONNECT</h2>
          <p>Email: <a href="mailto:fivefiveone_contact@551.com" className="underline">fivefiveone_contact@551.com</a></p>
          <p>Phone: <a href="tel:+55305661412" className="underline">+55 305 661 412</a></p>
          <div className="mt-6 flex flex-col items-center md:items-start gap-2">
            <p className='font-[16px] font-medium'>Social</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialIcons.map((icon) => (
                <Image
                  key={icon}
                  src={`/${icon}.svg`}
                  alt={`${icon} icon`}
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-lg font-medium mb-4">PARTNERS</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {partnerLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt={`Partner logo ${idx + 1}`}
                width={87}
                height={48}
                className="w-[87px] h-[48px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 md:-mt-6 text-sm text-center md:ml-45">
        © 2025 551 GROWTH LAB. All rights reserved.
      </div>
    </footer>
  );
}
