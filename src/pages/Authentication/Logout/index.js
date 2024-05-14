import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import { AUTH_CONFIG } from "../../../constants";
import APILoader from "../../../components/APILoader";
import { removeItemFromLocalStorage } from "../../../helpers/localStoragehelper";
import { useDispatch } from "react-redux";
import { clearData } from "../../../redux/actions";

const Logout = (props) => {
  const history = useHistory();
  // const { clearData } = useAdminContext();
  const { state } = props.location;
  const dispatch = useDispatch(); 

  useEffect(() => {
    removeItemFromLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO);
    dispatch(clearData())
    // clearData();
    history.replace({
      pathname: ROUTES.LOGIN,
      state,
    });
  }, []);

  return <APILoader />;
};

export default Logout;
