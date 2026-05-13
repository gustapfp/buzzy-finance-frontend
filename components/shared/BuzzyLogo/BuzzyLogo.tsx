export default function BuzzyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Buzzy"
    >
      <polygon points="80,12 149.28,52 149.28,132 80,172 10.72,132 10.72,52" fill="#F5B800" />
      <path
        d="M 26 130 L 50 110 L 62 120 L 88 90 L 100 100 L 136 60"
        stroke="#1C1917"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="136" cy="60" r="9" fill="#1C1917" />
    </svg>
  );
}

