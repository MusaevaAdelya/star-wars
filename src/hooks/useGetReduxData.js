import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const useGetReduxData = (url, setIsLoading, setData, setIsError) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    axios
      .get(url)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        dispatch(setIsError(true));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, [dispatch, setData, setIsError, setIsLoading, url]);
};

export default useGetReduxData;
