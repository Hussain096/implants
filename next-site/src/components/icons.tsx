type IconProps = {
  name:
    | "arrow"
    | "book"
    | "check"
    | "cost"
    | "heart"
    | "layers"
    | "menu"
    | "scale"
    | "search"
    | "shield"
    | "spark"
    | "warning";
  size?: number;
};

export function Icon({ name, size = 20 }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    cost: <><circle cx="12" cy="12" r="9" /><path d="M16 8.5c-.8-.8-2-1.2-4-1.2-2.2 0-3.5 1-3.5 2.5 0 3.8 7 1.4 7 5 0 1.5-1.4 2.5-3.7 2.5-1.8 0-3.2-.5-4.1-1.4" /><path d="M12 5v14" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    scale: <><path d="m16 16 3-8 3 8a5 5 0 0 1-6 0Z" /><path d="m2 16 3-8 3 8a5 5 0 0 1-6 0Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h18" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    spark: <><path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3Z" /><path d="m5 14-.9 2.1L2 17l2.1.9L5 20l.9-2.1L8 17l-2.1-.9L5 14Z" /></>,
    warning: <><path d="m21 19-9-16-9 16h18Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
