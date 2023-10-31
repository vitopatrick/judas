import { useEffect, useRef } from "react";

type Details = {
  symbol: string;
};

const CompanyInfoCard = ({ symbol }: Details) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;

    const options = {
      symbol,
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "12M",
      colorTheme: "light",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
    };

    script.innerHTML = `
      {
        "symbol": "${options.symbol}",
        "width": ${options.width},
        "height": ${options.height},
        "locale": "${options.locale}",
        "dateRange": "${options.dateRange}",
        "colorTheme": "${options.colorTheme}",
        "isTransparent": ${options.isTransparent},
        "autosize": ${options.autosize},
        "largeChartUrl": "${options.largeChartUrl}"
      }
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default CompanyInfoCard;
