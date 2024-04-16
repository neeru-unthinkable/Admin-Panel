import { get, post } from "../api";
import ROUTES from "../constants/routes";
import { AUTH_CONFIG } from "../constants";
import { useCallback, useState } from "react";
import useAdminContext from "./useAdminContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getItemFromLocalStorage } from "../helpers/localStoragehelper";
const useAdminCRUD = ({
  url,
  method,
  multipart,
  timeout,
  shouldSetLoading = true,
}) => {
  const getToken = () =>
    JSON.parse(getItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO))?.token;
  const { loading, setLoading } = useAdminContext();
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const history = useHistory();

  const clearResponse = useCallback(() => {
    setResponse(null);
  }, [setResponse]);

  const handleError = (e) => {
    if (e) {
      if (e?.response?.status === 401) {
        history.replace({
          pathname: ROUTES.LOGOUT,
          state: { from: history.location.pathname },
        });
      } else if (e.errors) {
        const errObj = {};
        e.errors.forEach((obj) => {
          const { errorCode, errorMessage } = obj;
          if (errorCode && errorMessage) errObj[errorCode] = errorMessage;
        });
        setError(errObj);
      }
    }
  };

  const op = {};

  op.create = useCallback(
    async ({ data, headers, formData, token, params }) => {
      if (shouldSetLoading) setLoading(true);
      const res = await post({
        url,
        multipart,
        timeout,
        token: token || getToken(),
        data,
        headers,
        formData,
        params,
      }).catch((e) => {
        setResponse(e?.response?.data);
        handleError(e);
      });
      setLoading(false);
      if (res) {
        setResponse(res);
        handleError(res);
      }
    },
    [multipart, timeout, url, shouldSetLoading]
  );

  op.read = useCallback(
    async ({ headers, token }) => {
      setLoading(true);
      const res = await get({
        url,
        timeout,
        token: token || getToken(),
        headers,
      }).catch((e) => {
        console.log("Error: ", e);
        setResponse(e?.response?.data);
        setError(e?.response);
      });
      setLoading(false);
      if (res) setResponse(res);
    },
    [timeout, url]
  );

  return [op[method], response, loading, error, clearResponse];
};

export default useAdminCRUD;
