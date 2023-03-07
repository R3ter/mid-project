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
  const [data, setData] = useState<any>({ data: null, loading: true });
  const [re, setRe] = useState(false);
  const refresh = () => {
    setRe(!re);
  };
  useEffect(() => {
    setData({ data: null, loading: false });
    fetch.then((e: any) => {
      setData({ data: e, loading: false });
    });
  }, [re]);
  return { data: data.data, isLoading: data.data === null, refresh };
};

export const useMutationFirebase = (
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
  const [data, setData] = useState({ data: null, start: false });
  let mutate = async (args: any) => {
    setData({ data: data.data, start: true });
    fetch(args).then((e: any) => {
      setData({ data: e, start: false });
    });
  };
  return { data: data.data, isLoading: !data.data && data.start, mutate };
};
