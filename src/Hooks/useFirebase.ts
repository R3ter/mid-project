import { useEffect, useState } from "react";

export const useFirebase = (
  fetch:
    | Promise<
        {
          id: string;
        }[]
      >
    | Promise<{
        id: string;
      }>
    | any
) => {
  const [data, setData] = useState<any>();
  const [re, setRe] = useState(false);
  const refresh = () => {
    setRe(!re);
  };
  useEffect(() => {
    setData(null);
    fetch.then((e: any) => {
      setData(e);
    });
  }, [re]);
  return { data, isLoading: !data, refresh };
};
