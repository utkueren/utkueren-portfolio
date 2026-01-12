// components/Footer.jsx
import Link from "next/link";
import LogoFrame from "@/components/ui/logoFrame";

export default function Footer() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/utku-eren-bulut-604b101a3/",
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0zM0 8h5v16H0V8zm9 0h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6C22.8 7.6 24 10 24 14v10h-5V14.9c0-2.2-.8-3.7-2.7-3.7-1.5 0-2.4 1-2.8 2-.2.4-.2 1-.2 1.6V24H9V8z" />
        </svg>
      ),
    },

    {
      href: "https://dribbble.com/utkueren",
      label: "Dribbble",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M4.8 8.8c2.6 1.3 6 1.7 9.5 1.2" />
          <path d="M6.2 16.8c1.9-2.1 5.3-3.3 9.6-3.1" />
          <path d="M12.6 3.4c2 2.6 3.6 6.6 4.3 10.9" />
        </svg>
      ),
    },
    {
      href: "https://x.com",
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.6l-5.2-6.7L5.6 22H2.5l7.3-8.4L.9 2h6.7l4.7 6.1L18.9 2zm-1.2 18h1.8L7.8 3.9H5.9l11.8 16.1z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/utkueren",
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.75-.24.75-.53v-1.86c-3.05.66-3.69-1.31-3.69-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.67.07-.66.07-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.43-.28-4.99-1.21-4.99-5.37 0-1.19.43-2.16 1.13-2.92-.11-.28-.49-1.4.11-2.92 0 0 .92-.29 3.01 1.11a10.5 10.5 0 0 1 5.48 0c2.09-1.4 3.01-1.11 3.01-1.11.6 1.52.22 2.64.11 2.92.7.76 1.13 1.73 1.13 2.92 0 4.17-2.56 5.09-5 5.36.39.34.73 1.01.73 2.05v3.04c0 .29.2.64.75.53A10.99 10.99 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* socials */}
        <div className="mb-12 flex items-center justify-center gap-6">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-100 opacity-80"
            >
              <LogoFrame size="sm">
                <div className="flex h-full w-full items-center justify-center text-white/80">
                  {s.icon}
                </div>
              </LogoFrame>
            </Link>
          ))}
        </div>

        {/* made by */}
        <p className="text-small">
          <span className="text-white font-extralight">Made by </span>
          <span className="text-small font-regular tracking-45p text-white">
            UTKUEREN
          </span>
        </p>

        {/* open source line */}
        <p className="mt-6 text-small font-extraLight sm:text-small text-white">
          This portfolio is open source and the source code can be found on{" "}
          <Link
            href="https://github.com/utkueren/utkueren-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
