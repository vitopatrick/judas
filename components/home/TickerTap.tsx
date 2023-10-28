import { TickerTape } from "react-tradingview-embed";

type Props = {};

const TickerTap = (props: Props) => {
  return (
    <TickerTape
      widgetProps={{
        colorTheme: "light",
      }}
    />
  );
};

export default TickerTap;
