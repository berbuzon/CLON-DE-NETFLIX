import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider/root_provider";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
    };
  }, []);

  return (
    <>
      <div>USERS</div>

      {/*       <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider> */}
    </>
  );
};

export default App;
