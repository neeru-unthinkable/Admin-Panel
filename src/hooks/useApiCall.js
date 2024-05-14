import axios from "axios";
import useAdminContext from "./useAdminContext";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actions";

const useApiCall = () => {
  const dispatch = useDispatch(); 

  const fetchData = async (method, url, reqData = null) => {
    dispatch(setLoading(true)); 

    const config = {
      method, 
      url, 
      data: reqData
    }

    try {
      const response = await axios(config);
      dispatch(setLoading(false))
      return response.data;
    } catch (error) {
      dispatch(setLoading(false))
      throw error;
    }
  };

  return { fetchData };
};

export default useApiCall;
