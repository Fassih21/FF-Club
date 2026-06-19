import { waLink } from "@/lib/business";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.17_150)] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.12.55 4.18 1.6 6L4 28l6.13-1.6a11.96 11.96 0 0 0 5.88 1.5h.01c6.63 0 12.02-5.39 12.02-12.02C28.04 9.39 22.65 4 16.02 4zm0 21.93h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.64.95.97-3.55-.24-.37a9.93 9.93 0 1 1 18.32-5.34c0 5.48-4.46 9.91-9.98 9.91z" />
      </svg>
    </a>
  );
}
