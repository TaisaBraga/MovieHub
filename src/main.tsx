import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GetMoviesProvider } from "./Context/useGetMoviesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GetMoviesProvider>
      <App />
    </GetMoviesProvider>
  </StrictMode>
);
