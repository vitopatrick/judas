import { MiniChart } from "react-tradingview-embed";

type Details = {
  symbol: string;
};

const CompanyInfoCard = ({ symbol }: Details) => {
  return (
    <MiniChart
      widgetProps={{
        colorTheme: "light",
        symbol: symbol,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CompanyInfoCard;
