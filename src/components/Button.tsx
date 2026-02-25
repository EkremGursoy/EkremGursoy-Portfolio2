interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  icon?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  icon,
  children,
  type = "button",
  className = "",
}: ButtonProps) {
  const base = "flex items-center gap-2 px-4 py-2 rounded-[5px] border cursor-pointer";
  const colors =
    variant === "primary"
      ? "bg-black text-white border-black"
      : "bg-white text-black border-black";

  const classes = `${base} ${colors} ${className}`;

  const content = (
    <>
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
