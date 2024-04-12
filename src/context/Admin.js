import { createContext, useCallback, useState } from "react";

export const AdminContext = createContext();

export const AdminContextWrapper = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const updateData = useCallback((updatedData) => {
    setData((prev) => ({ ...prev, ...updatedData }));
  }, [setData]);

  const clearData = useCallback(() => {
    setData({});
  }, [setData]);

  return (
    <AdminContext.Provider
      value={{ data, loading, updateData, clearData, setLoading }}
    >
      {children}
    </AdminContext.Provider>
  );
};
