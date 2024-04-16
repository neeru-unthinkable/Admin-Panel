import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import { AUTH_CONFIG } from "../../../constants";
import APILoader from "../../../components/APILoader";
import useAdminContext from "../../../hooks/useAdminContext";
import { removeItemFromLocalStorage } from "../../../helpers/localStoragehelper";

const Logout = (props) => {
  const history = useHistory();
  const { clearData } = useAdminContext();
  const { state } = props.location;

  useEffect(() => {
    removeItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO);
    clearData();
    history.replace({
      pathname: ROUTES.LOGIN,
      state,
    });
  }, []);

  return <APILoader />;
};

export default Logout;
