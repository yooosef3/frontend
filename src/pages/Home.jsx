import DonutChart from "react-donut-chart";
import bnb from "../../public/bnb.png";
import btc from "../../public/btc.png";
import matic from "../../public/matic.png";
import trx from "../../public/trx.png";

const coins = [
  {
    id: 1,
    name: "بیت کوین",
    symbol: "BTC",
    percent: "5%",
    color: "#4464EE",
    icon: btc,
  },
  {
    id: 2,
    name: "پالیگان",
    symbol: "MATIC",
    percent: "35%",
    color: "#FFAA35",
    icon: matic,
  },
  {
    id: 3,
    name: "بایننس",
    symbol: "BNB",
    percent: "10%",
    color: "#26A17B",
    icon: bnb,
  },
  {
    id: 4,
    name: "ترون",
    symbol: "TRX",
    percent: "50%",
    color: "#FB774A",
    icon: trx,
  },
];

const Coin = ({ name, symbol, percent, color, icon }) => {
  return (
    <div className="flex flex-col items-center gap-1 my-5">
      <div className="flex items-center gap-2">
        <img src={icon} alt={name} width={32} height={32} />
        <div className={`w-4 h-4 `}>
          <span className="text-[#9E9FA4] font-medium text-xs">{percent}</span>
        </div>
      </div>
      <div className="flex gap-1">
        <h3 className="text-[#FFFFFF] font-bold">{name}</h3>
        <h3 className="text-[#A4A8AB] font-normal">{symbol}</h3>
      </div>
    </div>
  );
};

const CoinsPercents = () => {
  return (
    <div className="grid grid-cols-2">
      {coins.map((coin) => (
        <Coin key={coin.id} {...coin} />
      ))}
    </div>
  );
};

const reactDonutChartBackgroundColor = [
  "#7928ca",
  "#627594",
  "#2152ff",
  "#82d616",
  "#fba833",
];
const reactDonutChartSelectedOffset = 0.0;
const reactDonutChartdata = [
  {
    label: "پذیرایی",
    value: 15,
    color: "#7928ca",
  },
  {
    label: "آشپزخانه",
    value: 20,
    color: "#627594",
  },
  {
    label: "اتاق",
    value: 13,
    color: "#2152ff",
  },
  {
    label: "پارکینگ",
    value: 32,
    color: "#82d616",
  },
  {
    label: "زیر زمین",
    value: 20,
    color: "#fba833",
  },
];
const TotalValue = () => {
  return (
    <DonutChart
      outerRadius={0.9}
      innerRadius={0.7}
      data={[
        {
          label: "Give you up",
          value: 25,
        },
        {
          label: "Give you up",
          value: 25,
        },
        {
          label: "Give you up",
          value: 25,
        },
        {
          label: "Give you up",
          value: 25,
        },
        {
          label: "",
          value: 75,
          isEmpty: true,
        },
      ]}
      width={180}
      className="my-auto"
      height={180}
      //   strokeColor="#FFFFFF"
      //   data={reactDonutChartdata}
      colors={reactDonutChartBackgroundColor}
      selectedOffset={reactDonutChartSelectedOffset}
    />
  );
};

const Home = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr] bg-[#001917] rounded-[25px] my-28 w-1/3">
      <CoinsPercents />
      <TotalValue />
    </div>
  );
};

export default Home;
