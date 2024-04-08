import axios from "axios";
import useAdminContext from "./useAdminContext";

const useApiCall = () => {
  const { setLoading } = useAdminContext();

  const fetchData = async (method, url, reqData = null) => {
    setLoading(true);

    const config = {
      method, 
      url, 
      data: reqData
    }

    try {
      const response = await axios(config);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { fetchData };
};

export default useApiCall;
