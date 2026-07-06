import Link from "next/link";

type BrandLockupProps = {
  asLink?: boolean;
  compact?: boolean;
  inverse?: boolean;
};

export function BrandLockup({
  asLink = false,
  compact = false,
  inverse = false
}: BrandLockupProps) {
  const className = [
    "brand-lockup",
    compact ? "brand-lockup--compact" : "",
    inverse ? "brand-lockup--inverse" : ""
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="sr-only">Aeora Research</span>
      <span className="brand-lockup__word" aria-hidden="true">
        {"\u039bEOR\u039b"}
      </span>
      <span className="brand-lockup__sub" aria-hidden="true">
        R E S E A R C H
      </span>
    </>
  );

  if (asLink) {
    return (
      <Link className={className} href="#top" aria-label="Aeora Research home">
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
