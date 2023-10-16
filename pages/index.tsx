import Hero from "../components/home/Hero";
import Footer from "../components/home/footer";
import NavBar from "../components/home/nav-bar";
import TradingAdvantages from "../components/home/trading-advantages";
import TradingPlatforms from "../components/home/trading-platforms";
import TradingSteps from "../components/home/trading-steps";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <TradingAdvantages />
      <TradingPlatforms
        order={1}
        ctaImage="/devices.png"
        header="Access To All Global Markets From A Single Account."
        body="Multi-asset terminal Allpips combines cutting-edge technologies and a classic design taken to a whole new level. No more unnecessary software and updates-get access to all global financial markets via a web terminal in a familiar web browser."
        heading="Trading Platforms"
      />

      <TradingPlatforms
        order={2}
        ctaImage="/metatrader4-devices.png"
        header="Most Popular Platforms In The Financial Markets."
        body="MetaTrader4 terminal is still an unquestionable leader among retail traders. It has all features and tools that are necessary for beginners and expirienced trader ot the financial market. Moreover, the terminal includes embedded functionality and opportunities, which are typical only for MQL platforms."
        // heading="Trading Platforms"
      />
      <TradingPlatforms
        order={1}
        ctaImage="https://adrofx.com/themes/custom/adrofx_theme/images/earn-by-copy.png"
        header="Earn By Copying The Success Of Top Traders"
        body="Everyone can trade like a top trader. With Allpip's innovative Copy Trading you can automatically copy the moves of other investors. Find investors you believe in and replicate their actions in real-time."
        // heading="Trading Platforms"
      />
      <TradingSteps />
      <Footer />
    </>
  );
}
