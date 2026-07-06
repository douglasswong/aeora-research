import Image from "next/image";
import Link from "next/link";

type BrandLockupProps = {
  asLink?: boolean;
  logo?: "dark" | "light";
  compact?: boolean;
  inverse?: boolean;
  priority?: boolean;
};

export function BrandLockup({
  asLink = false,
  logo,
  compact = false,
  inverse = false,
  priority = false
}: BrandLockupProps) {
  const className = [
    "brand-lockup",
    logo ? "brand-lockup--asset" : "",
    logo ? `brand-lockup--asset-${logo}` : "",
    compact ? "brand-lockup--compact" : "",
    inverse ? "brand-lockup--inverse" : ""
  ]
    .filter(Boolean)
    .join(" ");

  const content = logo ? (
    <Image
      className="brand-lockup__image"
      src={`/brand/aeora-logo-${logo}.png`}
      alt="Aeora Research"
      width={1254}
      height={1254}
      priority={priority}
      sizes="(max-width: 720px) 132px, 158px"
    />
  ) : (
    <>
      <span className="brand-lockup__mark" aria-hidden="true" />
      <span className="brand-lockup__text">
        <span className="sr-only">Aeora Research</span>
        <span className="brand-lockup__word" aria-hidden="true">
          {"\u039bEOR\u039b"}
        </span>
        <span className="brand-lockup__sub" aria-hidden="true">
          R E S E A R C H
        </span>
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
