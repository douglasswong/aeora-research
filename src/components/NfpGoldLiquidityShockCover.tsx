import Image from "next/image";

type NfpGoldLiquidityShockCoverProps = {
  articleCover?: boolean;
};

export function NfpGoldLiquidityShockCover({
  articleCover = true
}: NfpGoldLiquidityShockCoverProps) {
  return (
    <figure
      className="nfp-gold-cover"
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="nfp-gold-cover__media">
        <Image
          src="/research/xauusd-gold-nfp-liquidity-shock-september-2026.webp"
          alt="Illustrative XAUUSD liquidity shock visual with order-book depth changing around a rapid gold selloff"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="nfp-gold-cover__label">
          <span>Aeora Research / Market Microstructure</span>
          <strong>XAUUSD</strong>
          <small>Inside a liquidity shock</small>
        </div>
      </div>
      <figcaption>
        Illustrative liquidity visual. It is not a price chart or a reconstruction
        of a specific broker feed.
      </figcaption>
    </figure>
  );
}
