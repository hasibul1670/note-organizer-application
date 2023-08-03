import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <div className="max-w-screen-2xl   mx-auto w-full">
        <App />
      </div>
    </React.StrictMode>
  </QueryClientProvider>
);
