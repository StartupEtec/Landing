function Svg({ children, size = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BrandMark(props) {
  return (
    <Svg {...props}>
      <path d="M7 5v14h11" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function ArrowRight(props) {
  return (
    <Svg {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  );
}

export function UsersThree(props) {
  return (
    <Svg {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  );
}

export function Briefcase(props) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
      <path d="M2.5 12.5h19" />
    </Svg>
  );
}

export function Check(props) {
  return (
    <Svg {...props}>
      <path d="m20 6-11 11-5-5" />
    </Svg>
  );
}

export function ShieldCheck(props) {
  return (
    <Svg {...props}>
      <path d="M12 21.5s7.5-3.7 7.5-9.4V5.4L12 2.5 4.5 5.4v6.7c0 5.7 7.5 9.4 7.5 9.4Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function MapPin(props) {
  return (
    <Svg {...props}>
      <path d="M19 10c0 5.5-7 12-7 12S5 15.5 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

export function CreditCard(props) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6.5 15h4" />
    </Svg>
  );
}

export function Clock(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </Svg>
  );
}

export function ChatCircle(props) {
  return (
    <Svg {...props}>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.2 7.7L3.5 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 11.5h7" />
      <path d="M8.5 14.5h4" />
    </Svg>
  );
}

export function Device(props) {
  return (
    <Svg {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 5.5h3" />
      <path d="M11 18.5h2" />
    </Svg>
  );
}

export function Switch(props) {
  return (
    <Svg {...props}>
      <path d="M4 8h14" />
      <path d="m15 5 3 3-3 3" />
      <path d="M20 16H6" />
      <path d="m9 13-3 3 3 3" />
    </Svg>
  );
}

export function Plus(props) {
  return (
    <Svg {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Svg>
  );
}

export function Clipboard(props) {
  return (
    <Svg {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2.8h6V4" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <path d="M9 18h3" />
    </Svg>
  );
}
