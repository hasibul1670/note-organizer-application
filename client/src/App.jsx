/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import { router } from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

export const userDataContext = createContext();

const App = () => {
  const { user } = useAuth();
  const [loggInUser, setLoggInUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        setLoading(true);

        try {
          const response = await axios.get(
            `https://summer-camp-school-server-sigma.vercel.app/api/v1/students/${user.email}`
          );

          if (response?.data?.data !== null) {
            setLoggInUser(response?.data?.data);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  return (
    <div>
      <userDataContext.Provider value={[loggInUser]}>
        <Provider store = {store}>
        <RouterProvider router={router} />
        </Provider>
        <Toaster/>
      </userDataContext.Provider>
    </div>
  );
};

export default App;
