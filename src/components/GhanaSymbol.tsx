type Props = {
  className?: string;
  title?: string;
};

// Inline SVG symbol using currentColor so CSS controls its color
export default function GhanaSymbol({ className, title = 'Ghana symbol' }: Props) {
  return (
    <svg
      className={className}
      role="img"
      aria-label={title}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{title}</title>
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
      <path
        d="M44 20c-6 0-10 4-12 8-3 6-8 10-14 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20 44c3-3 6-6 9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="18" cy="42" r="2.2" fill="currentColor" />
    </svg>
  );
}
