import { PropsWithChildren, useEffect } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Skeleton from "../../UI/Skeleton/Skeleton";
import { useActions } from "../../../hooks/useAction";

const FetchChartWrapper = ({ children }: PropsWithChildren) => {
  const { getChartData } = useActions();
  const { isLoading } = useAppSelector((state) => state.chart);

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  if (isLoading) return <Skeleton />;

  return <div>{children}</div>;
};

export default FetchChartWrapper;
