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
  useEffect(() => {
    fetch.then((e: any) => {
      setData(e);
    });
  }, []);
  return { data, isLoading: !data };
};
