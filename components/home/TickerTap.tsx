import { useEffect, useRef } from "react";

type Props = {};

const TickerTap = (props: Props) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;

    const options = {
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          description: "Cardano",
          proName: "BINANCE:ADAUSDT",
        },
        {
          description: "Litecoin",
          proName: "BINANCE:LTCUSDT",
        },
        {
          description: "Doge",
          proName: "BINANCE:DOGEUSDT",
        },
      ],
      colorTheme: "light",
      isTransparent: false,
      showSymbolLogo: true,
      locale: "en",
    };

    script.innerHTML = `
      {
        "symbols": ${JSON.stringify(options.symbols)},
        "colorTheme": "${options.colorTheme}",
        "isTransparent": ${options.isTransparent},
        "showSymbolLogo": ${options.showSymbolLogo},
        "locale": "${options.locale}"
      }
    `;

    scriptRef.current = script;

    const widgetContainer = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
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

export default TickerTap;
