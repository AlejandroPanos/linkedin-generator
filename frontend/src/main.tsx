import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./context/AuthContext";
import App from "./App";

const queryClient = new QueryClient();

const root = createRoot(document.querySelector("#root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthContextProvider>
  </QueryClientProvider>,
);
