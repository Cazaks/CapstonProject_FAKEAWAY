import { Dribbble, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 pt-30 text-gray-600 md:px-16 lg:px-24">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16">
        <div className="flex-1">
          <a href="#">
            <span className="font-bold">FAKEAWAY</span>
          </a>
          <p className="mt-1 max-w-sm text-sm/6">
            Fake tickets and scalpers are ruining Nigeria’s events. 
            Our system verifies tickets instantly, updates QR codes every minute, 
            and ensures secure entry — so fans enjoy the event and organizers stay protected.
          </p>
          <div className="mt-2 flex items-center gap-3 text-gray-400">
            <a
              href="#"
              aria-label="YouTube"
              title="YouTube"
            >
              <Youtube className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              title="Dribbble"
            >
              <Dribbble className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-around gap-8 md:flex-1 md:flex-row md:gap-20">
          <div className="flex flex-col">
            <h2 className="mb-5 font-semibold text-gray-800">Company</h2>
            <a href="/" className="py-1.5 transition duration-200 hover:text-black">
              Home
            </a>
            <a href="/about" className="py-1.5 transition duration-200 hover:text-black">
              About
            </a>
            <a href="/" className="py-1.5 transition duration-200 hover:text-black">
              Careers
            </a>
            <a href="/" className="py-1.5 transition duration-200 hover:text-black">
              Partners
            </a>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-gray-800">
              Subscribe to our newsletter
            </h2>
            <div className="max-w-xs space-y-6 text-sm">
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="flex items-center justify-center gap-2 rounded-md bg-gray-100 p-1.5">
                <input
                  className="w-full max-w-64 rounded px-2 py-2 outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button className="rounded bg-gray-800 px-4 py-2 text-white transition hover:opacity-90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-4 md:flex-row">
        <p className="text-center">
          Copyright 2026 ©{" "}
          <a href="#">FAKEAWAY</a> All
          Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy-policy"
            className="transition duration-200 hover:text-black"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="transition duration-200 hover:text-black"
          >
            Terms of Service
          </a>
          <a
            href="/cookie-policy"
            className="transition duration-200 hover:text-black"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
