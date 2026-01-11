// components/Footer.jsx
import Link from "next/link";
import LogoFrame from "@/components/ui/logoFrame";

export default function Footer() {
  const socials = [
    {
      href: "https://linkedin.com/in/utkueren", // kendi linkinle değiştir
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0zM0 8h5v16H0V8zm9 0h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6C22.8 7.6 24 10 24 14v10h-5V14.9c0-2.2-.8-3.7-2.7-3.7-1.5 0-2.4 1-2.8 2-.2.4-.2 1-.2 1.6V24H9V8z" />
        </svg>
      ),
    },
    {
      href: "https://dribbble.com", // kendi linkinle değiştir
      label: "Dribbble",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.65 11.04c-1.2-.37-2.6-.57-4.16-.55-.07-1.5-.4-2.96-.97-4.33 2.37.97 4.12 3.07 5.13 4.88zM12 2.4c1.23 0 2.39.27 3.44.75-.45 1.2-1.05 2.35-1.79 3.41-1.4-.55-2.9-.95-4.47-1.18.92-1.54 1.97-2.94 2.82-2.98zM8.2 5.03c1.46.2 2.86.55 4.2 1.04-.95 1.22-2.1 2.35-3.44 3.35C7.7 7.73 6.7 6.25 6.08 5.2c.62-.09 1.32-.16 2.12-.17zM3.06 12c0-2.15.86-4.1 2.26-5.52.72 1.18 1.84 2.9 3.3 4.62-1.72.91-3.7 1.47-5.56 1.6V12zm8.94 9.6c-2.38 0-4.52-.95-6.09-2.5 1.2-1.62 2.95-3.22 5.28-4.55.55 1.5.98 3.1 1.27 4.78-.15 1.42-.3 2.2-.46 2.27zm2.54-.36c-.23-1.46-.6-2.9-1.1-4.27 1.5-.6 3.18-.95 5.02-.96-.93 2.3-2.86 4.1-4.92 5.23zM13.1 14.5c-.46-1.03-.99-2.03-1.59-2.99 1.04-.66 2-1.44 2.87-2.32.35 1.06.57 2.2.63 3.36-1.1.14-2.14.44-3.11.95zM16.03 13.1c1.6.02 3.02.26 4.2.68.07.4.11.81.11 1.22 0 .36-.03.71-.08 1.06-2.11-.02-4.02.35-5.69 1.05-.5-1.31-.99-2.67-1.54-3.98.92-.38 1.92-.62 3-.63z" />
        </svg>
      ),
    },
    {
      href: "https://x.com", // kendi linkinle değiştir
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.6l-5.2-6.7L5.6 22H2.5l7.3-8.4L.9 2h6.7l4.7 6.1L18.9 2zm-1.2 18h1.8L7.8 3.9H5.9l11.8 16.1z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/utkueren", // kendi linkinle değiştir
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
          <span className="text-white/60">Made by </span>
          <span className="tracking-[0.35em] text-white">U T K U E R E N</span>
        </p>

        {/* open source line */}
        <p className="mt-6 text-small font-light sm:text-base text-white/50">
          This portfolio is open source and the source code can be found on{" "}
          <Link
            href="https://github.com/utkueren/portfolio"
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
