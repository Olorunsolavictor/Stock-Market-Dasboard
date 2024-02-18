import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { CandleStickData } from "types/StockDataTypes";
import { useNavigate } from "react-router-dom";

// Define the context
const AuthContext = createContext<any>(null);

// Define the props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorNotification, setErrorNotification] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movingAverage, setMovingAverage] = useState<number[]>([]);

  // Process received data into CandleStickData format
  const processData = (data: any): CandleStickData[] => {
    const timeSeries = data["Time Series (Daily)"];
    const candlestickData: CandleStickData[] = [];

    for (const date in timeSeries) {
      const candleData = timeSeries[date];
      candlestickData.push({
        date,
        open: parseFloat(candleData["1. open"]),
        high: parseFloat(candleData["2. high"]),
        low: parseFloat(candleData["3. low"]),
        close: parseFloat(candleData["4. close"]),
        volume: parseFloat(candleData["5. volume"]),
      });
    }

    // Sort data by date
    candlestickData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return candlestickData;
  };

  // Generate a random number within a range
  const getRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  // Generate dummy data for CandleStickChart
  const generateDummyData = (): CandleStickData[] => {
    const data: CandleStickData[] = [];

    // Generate data for the past 25 days
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
      });

      const open = getRandomNumber(200, 300);
      const high = open + getRandomNumber(0, 20);
      const low = open - getRandomNumber(0, 20);
      const close = getRandomNumber(low, high);
      const volume = getRandomNumber(1000000, 50000000);

      data.push({ date: dateString, open, high, low, close, volume });
    }

    return data.reverse();
  };

  // Generate dummy data
  const dummyData: CandleStickData[] = generateDummyData();

  useEffect(() => {
    // Define the period for the moving average
    const period = 10; // You can adjust this value as needed

    // Function to calculate moving average
    const calculateMovingAverage = (
      data: CandleStickData[],
      period: number
    ): number[] => {
      const movingAverages: number[] = [];

      for (let i = period - 1; i < data.length; i++) {
        let sum = 0;
        for (let j = 0; j < period; j++) {
          sum += data[i - j].close;
        }
        const average = sum / period;
        movingAverages.push(average);
      }
      return movingAverages;
    };

    const debounce = (func: Function, delay: number) => {
      let timer: ReturnType<typeof setTimeout>;
      return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    };
    // Calculate moving averages with debouncing
    const debouncedCalculateMovingAverage = debounce((data: CandleStickData[], period: number) => {
      const averages = calculateMovingAverage(data, period);
      setMovingAverage(averages);
    }, 300); // Adjust the delay as needed

    // Call the debounced function when data changes
    debouncedCalculateMovingAverage(dummyData, period);
  }, [dummyData]); // Re-calculate when data changes
  console.log(movingAverage)

  // Function to get all data
  const getAllData = async (symbol: any) => {
    try {
      // You can fetch data from the API using axios or fetch here
      // const response = await axios.get(`your-api-endpoint`);
      // const newData = processData(response.data);
      // console.log(newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        dummyData,
        movingAverage,
        isLoading,
        errorNotification,
        message,
        getAllData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
