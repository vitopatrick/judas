import CompanyInfoCard from "./CompanyInfoCard";
import TickerTap from "./TickerTap";

type Props = {};

const TradingComponents = (props: Props) => {
  return (
    <div className="w-full">
      {/* Ticker Tap */}
      <div className="mb-8">
        <TickerTap />
      </div>
      {/* Company Info Card*/}
      <div className="grid md:grid-cols-2 gap-4 w-full place-items-center">
        <CompanyInfoCard symbol={"BINANCE:ADAUSDT"} />
        <CompanyInfoCard symbol={"BINANCE:LTCUSDT"} />
        <CompanyInfoCard symbol={"BINANCE:BTCUSDT"} />
        <CompanyInfoCard symbol={"BINANCE:ETHUSDT"} />
      </div>
    </div>
  );
};

export default TradingComponents;
