import { useContext } from "react";
import { AdminContext } from "../context/Admin";

const useAdminContext = () => useContext(AdminContext);

export default useAdminContext;